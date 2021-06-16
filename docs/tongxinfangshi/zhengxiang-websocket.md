---
title: 正向 WebSocket
lang: zh-CN
---
# 正向 WebSocket
正向 WebSocket 可以用于业务服务器无法被连接，但是 OneBot 服务器可连接的情况，也可以与 HTTP 通信方式配合使用。

要使用正向 WebSocket，您需要安装 nuget 包：[Sisters.WudiLib.WebSocket](https://www.nuget.org/packages/Sisters.WudiLib.WebSocket/)。

## 配置正向 WebSocket API
下面是配置正向 WebSocket API 的示例。

```cs
var httpApiClient = new CqHttpWebSocketApiClient(
    "ws://your-ws-address/event",
    "your-access-token"); // 创建正向 WebSocket 通信客户端。
```

创建之后，就可以访问各种 API，与其他方式没有很大区别。

::: tip
无需手动连接 WebSocket，访问任意 API 时将自动连接。WebSocket 是持续连接的，也就是可以在同一连接多次访问 API。如果连接断开，所有未完成的请求会立即失败，并且不会立即重连，而是在下次请求时重连。
:::

## 配置正向 WebSocket 事件上报

下面是配置正向 WebSocket 事件上报的示例。

```cs
var cqWebSocketEvent = new CqHttpWebSocketEvent(
    "ws://your-ws-address/event",
    "your-access-token"); // 创建 WebSocket 事件监听客户端。
```

您可以像其他通信方式的事件上报那样设置对应的 API 客户端、注册事件处理器。

```cs
cqWebSocketEvent.ApiClient = httpApiClient;

// 订阅事件。
cqWebSocketEvent.MessageEvent += (api, e) =>
{
    Console.WriteLine(e.Content.Text);
};
cqWebSocketEvent.FriendRequestEvent += (api, e) =>
{
    return true;
};
cqWebSocketEvent.GroupInviteEvent += (api, e) =>
{
    return true;
}; // 可以通过 return 的方式响应请求，与使用 HTTP 时没有差别。
```

此外，WebSocket 事件上报的客户端同时有 `IsAvailable` 和 `IsListening` 两个属性，主要的区别是，连接中断后，重连成功前，`IsListening` 会返回 `true`，而 `IsAvailable` 会返回 `false`。

::: tip
与正向 WebSocket API 客户端不同，事件上报需要手动开启监听，并且会自动重连。是否丢失重连过程中的事件取决于 OneBot 实现。
:::

## 示例
此示例包含了简单的事件监听和处理，并观察 WudiLib 正向 WebSocket 的特点。
```cs
var cqWebSocketEvent = new CqHttpWebSocketEvent(
    "ws://your-ws-address/event",
    "your-access-token"); // 创建 WebSocket 事件监听客户端。
var httpApiClient = new CqHttpWebSocketApiClient(
    "ws://your-ws-address/event",
    "your-access-token"); // 创建 HTTP 通信客户端。
cqWebSocketEvent.ApiClient = httpApiClient;

// 订阅事件。
cqWebSocketEvent.MessageEvent += (api, e) =>
{
    Console.WriteLine(e.Content.Text);
};
cqWebSocketEvent.FriendRequestEvent += (api, e) =>
{
    return true;
};
cqWebSocketEvent.GroupInviteEvent += (api, e) =>
{
    return true;
}; // 可以通过 return 的方式响应请求，与使用 HTTP 时没有差别。

// 每秒打印 WebSocket 状态。
Task.Run(async () =>
{
    while (true)
    {
        await Task.Delay(1000);
        Console.WriteLine("Available: {0}, Listening {1}", cqWebSocketEvent.IsAvailable, cqWebSocketEvent.IsListening);
    }
});

// 连接前等待 3 秒观察状态。
Task.Delay(TimeSpan.FromSeconds(3)).Wait();

// 连接（开始监听上报）。
var cancellationTokenSource = new CancellationTokenSource();
cqWebSocketEvent.StartListen(cancellationTokenSource.Token); // 首次连接必须成功。

// 按下回车会在 2 秒后断开，再过 3 秒使用新的 CancellationTokenSource 重连。
// 您可以先断开网络，观察自动重连，再继续执行后面的代码。
Console.ReadLine();
cancellationTokenSource.CancelAfter(TimeSpan.FromSeconds(2));
Task.Delay(TimeSpan.FromSeconds(5)).Wait();
cancellationTokenSource.Dispose();
cancellationTokenSource = new CancellationTokenSource();
cqWebSocketEvent.StartListen(cancellationTokenSource.Token);
Task.Delay(-1).Wait();
```

## 与 HTTP 方式配合
正向 WebSocket 可以和 HTTP/HTTP POST 通信方式任意组合。
