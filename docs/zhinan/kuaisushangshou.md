---
title: 快速上手
lang: zh-CN
---
# 快速上手
本页将指导您快速使用 go-cqhttp 建立起可以简单回应消息的机器人。

## 准备 go-cqhttp
下载最新版本的 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp/releases/tag/v1.0.0-beta3)，然后运行，此时 go-cqhttp 将会生成配置文件并退出。打开生成的配置文件，按以下说明修改。

在 `account` 节的 `uin` 和 `password` 字段填入机器人 QQ 号和密码。

```yaml
account:
  uin: 1233456 # QQ账号
  password: 'mima'
```

在 `servers` 节配置 HTTP 和 HTTP POST 通信方式

```yaml
servers:
  - http:
      host: localhost
      port: 5700
      post:
        - url: 'http://localhost:6700/'
```

::: tip
除了 go-cqhttp，您还可以使用任何兼容的 [OneBot 实现](https://onebot.page.moe/ecosystem.html#onebot-%E5%AE%9E%E7%8E%B0)，这些实现的配置方式略有不同。如要使用，请查阅对应项目的文档。
:::

配置完毕后，再次启动 go-cqhttp，按提示处理登录认证，当出现群和好友数量时即为登录成功。当进行后面的步骤时，请确保 go-cqhttp 一直正常运行，不要关闭。

## 新建项目并添加 nuget 包
新建控制台项目，用 IDE 或命令行添加 nuget 包 [Sisters.WudiLib](https://www.nuget.org/packages/Sisters.WudiLib)。

## 设置 OneBot API 并发送测试消息
[将 `Main` 方法改为异步](https://docs.microsoft.com/zh-cn/dotnet/csharp/whats-new/csharp-7#async-main)，然后添加下列代码，并将数字改为你的 QQ 号（不是机器人的）。

::: warning
请确保你已经添加机器人为好友，以接收私聊消息。
:::

```cs
using Sisters.WudiLib;

var httpApi = new HttpApiClient();
httpApi.ApiAddress = "http://localhost:5700/";
var privateResponse = await httpApi.SendPrivateMessageAsync(12345678, "hello");
```

编译并执行程序，如果所有步骤都被正确完成，则你应该可以收到机器人发来的私聊消息。

## 配置消息监听
消息监听可以让机器人收到消息或事件时进行处理。要监听并处理消息，需要先编写事件处理器的方法。

现在，让我们继续添加以下方法。

```cs
using Sisters.WudiLib.Posts;
using Message = Sisters.WudiLib.SendingMessage;
using MessageContext = Sisters.WudiLib.Posts.Message;

public static async Task OnMessageAsync(HttpApiClient api, MessageContext message)
{
    if (message.Text == "hello")
    {
        await api.SendMessage(message.Endpoint, "Hello, WudiLib!");
        // Endpoint 代表消息接收/发送的节点。使用 Endpoint 可以让 bot 同时处理私聊和群聊消息，而无需分别编写代码。
    }
}
```

::: tip
由于 `Sisters.WudiLib.Message` 与 `Sisters.WudiLib.Posts.Message` 常常出现命名冲突，同时 `Sisters.WudiLib.SendingMessage` 也是比 `Sisters.WudiLib.Message` 更常用的类，此处使用 *[using 别名指令](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/using-directive)*导入了这两个类。
:::

然后在 `Main` 方法中继续添加下列代码。

```cs
var listener = new ApiPostListener();
listener.ApiClient = httpApi; // 上面所示客户端的实例，将作为参数传给事件处理器，便于进行各种操作。
listener.PostAddress = "http://localhost:6700/";
listener.StartListen();
listener.MessageEvent += (api, message) => OnMessageAsync(api, message).GetAwaiter().GetResult();
await Task.Delay(-1); // 阻止程序退出。
```

此时，我们已经配置好了处理器。运行程序并向 bot 发消息测试，当 bot 收到内容为“hello”的消息时，就会回复“Hello, WudiLib!”。
