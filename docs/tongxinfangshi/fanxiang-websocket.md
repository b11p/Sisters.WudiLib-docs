---
title: 反向 WebSocket
lang: zh-CN
---
# 反向 WebSocket
反向 WebSocket 是实现和使用最复杂的一种方式。考虑到反向 WebSocket 的潜在使用场景，WudiLib 会在建立连接后再配置 Listener。

目前 WudiLib 只支持“Universe”连接类型，也就是 API 和事件都用一个连接。

## 快速上手
要使用反向 WebSocket，请引入 Sisters.WudiLib.WebSocket 包不低于 **0.2.0-beta3** 的版本。然后在 `Main` 方法中编写以下代码：

```cs
using Sisters.WudiLib.WebSocket.Reverse;

var reverseWSServer = new ReverseWebSocketServer("http://localhost:9191");
reverseWSServer.SetListenerAuthenticationAndConfiguration((listener, selfId) =>
{
    listener.MessageEvent += (api, e) =>
    {
        Console.WriteLine(e.Content.Text);
    };
});
reverseWSServer.Start();
```

编写好之后运行程序，然后用 OneBot 服务（如 go-cqhttp）反向 WS 连接到 localhost:9191，之后可以看到，当 bot 每收到一条消息，就会把文本部分打印到控制台上。

## 进阶反向 WebSocket
传入 `SetListenerAuthenticationAndConfiguration` 方法的委托会在有连接来临时调用，每次调用都会构造新的 Listener 和 API 客户端，一旦连接断开，则不能再使用。

当你需要外部使用构造的 Listener 或 API 客户端时，可以在委托里传给外界。例如：

```cs
var reverseWSServer = new ReverseWebSocketServer("http://localhost:9191");
HttpApiClient onebotApi = null;
reverseWSServer.SetListenerAuthenticationAndConfiguration((listener, selfId) =>
{
    onebotApi = listener.ApiClient; // 当建立反向 WebSocket 连接时，把 API 客户端赋值到外面。
    listener.SocketDisconnected += () => onebotApi = null; // 连接断开时已无法使用，把 API 客户端设为 null。
});
reverseWSServer.Start();

while (true)
{
    // 每 1 分钟尝试发送一次群组消息。
    await Task.Delay(60000);
    var api = onebotApi;
    if (api != null)
    {
        try
        {
            await onebotApi.SendGroupMessageAsync(1234567, "Hello");
        }
        catch (Exception)
        {
            // 记录日志等。
        }
    }
}
```

::: warning
上面的示例假定同时只有一个反向 WebSocket 连接，如果建立了多个连接则会出问题。WudiLib 支持同时建立多个反向 WebSocket 连接，将在文档后半讲述用法。
:::

::: tip
配置时可以查看 `selfId`，并根据 `selfId` 进行不同的配置（例如注册不同的事件处理器）。
:::

## 鉴权认证
WudiLib 支持对反向 WebSocket 连接进行认证，并内置了通过 Access Token 和/或 Self ID（即机器人 QQ 号）进行认证。

要进行鉴权认证，只需要在配置方法中添加 Access Token 和 Self ID 两个参数即可。

```cs
var reverseWSServer = new ReverseWebSocketServer("http://localhost:9191");
reverseWSServer.SetListenerAuthenticationAndConfiguration((listener, selfId) =>
{
    // Configuration code.
}, "your-access-token", 123456789);
reverseWSServer.Start();
```

当按此鉴权时，只接受 QQ 为 123456789，并且 Access Token 配置为“your-access-token”的机器人连接。其中两个参数可以分别设置为 `null`，表示跳过这一项，例如只验证 QQ 号或者 Access Token。

## 高级鉴权及配置
WudiLib 的强大之处在于，你可以自定义鉴权过程，并且根据不同的鉴权结果进行不同的配置。例如：

```cs
using System.Net;

var reverseWSServer = new ReverseWebSocketServer("http://localhost:9191");
HttpApiClient onebotApi = null;
reverseWSServer.SetListenerAuthenticationAndConfiguration(async request =>
{
    IPAddress[] allowedIPAddress = await GetAllowedIPAddress();
    if (allowedIPAddress.Contains(request.RemoteEndPoint.Address))
    {
        // allow
        return (listener, selfId) =>
        {
            // Configuration code.
        };
    }
    else
    {
        // deny
        return null;
        // Or you can return another configuration.
        //return (listener, selfId) =>
        //{
        //    // Configure for only basic functions.
        //};
    }
});
reverseWSServer.Start();
```

运行这段代码，WudiLib 会在收到连接时执行验证。如果连接的 IP 在允许列表中，就允许连接并进行配置；否则就拒绝连接（也可以进行另一种配置）。高级鉴权可以和简单鉴权结合使用，此时 WudiLib 会先验证 Access Token 和 Self ID 是否吻合，然后再执行自定义的认证和配置。

::: tip
进行自定义鉴证应传入一个异步委托，这是为了便于从数据库等地方读取认证信息。
:::