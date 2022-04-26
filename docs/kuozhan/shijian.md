---
title: 扩展事件
lang: zh-CN
---
# 扩展 WudiLib 事件
若要扩展 WudiLib 事件列表，需要定义数据类型，继承 `ApiPostListener` 类（或者子类），重写 `Response ProcessPost(JObject contentObject)` 方法。

## 定义事件的数据类型
首先需要定义数据类型，根据事件类型不同，继承不同的类并添加缺失字段。同时需要 `override Endpoint` 以确保相关响应可以发送到正确的群或好友。以好友消息撤回为例：

```cs
public sealed class FriendRecallNotice : Notice
{
    public override Endpoint Endpoint => new PrivateEndpoint(UserId); // 必须 override

    [JsonProperty("message_id")]
    public long MessageId { get; set; }
}
```

::: tip
`Post` 类中已经定义了 `time` 等字段，`Notice` 类定义了 `notice_type`，所以无需在此重复定义。
:::

## 添加事件处理路由
根据通信方式的不同，需要继承不同的类并重写相关方法。如果是 HTTP POST 方式，需要继承 `ApiPostListener`；正向 WebSocket 则需要继承 `CqHttpWebSocketEvent`。

可以重写的方法包括 `Response ProcessPost(JObject contentObject)`、`void ProcessMessage(JObject contentObject)`、`virtual void ProcessNotice(JObject contentObject)` 等，请根据扩展事件类型重写对应方法。如果匹配事件类型，则调用相关业务逻辑，并**在未匹配时调用基类的同名方法**。例如：

```cs
public class ExtendedApiPostListener : ApiPostListener
{
    public ExtendedApiPostListener() : base() { } // 添加构造方法
    public ExtendedApiPostListener(string address) : base(address) { } // 添加构造方法
    public ExtendedApiPostListener(int port) : base(port) { } // 添加构造方法

    protected override void ProcessNotice(JObject contentObject)
    {
        switch (contentObject["notice_type"].ToObject<string>())
        {
            case "friend_recall":
                ProcessFriendRecallNotice(contentObject.ToObject<FriendRecallNotice>());
                break;
            default:
                base.ProcessNotice(contentObject); // 必须调用基类的方法
                break;
        }
    }
}
```

