---
title: 扩展 CQ 码
lang: zh-CN
---
# 扩展 WudiLib CQ 码
如果您想发送的 CQ 码类型不存在于 WudiLib 中，您可以手动构建相应的消息段，也可以用原始消息的方式直接发送。本文以 [XML 消息](https://onebot.page.moe/v11/specs/message/segment.html#xml-%E6%B6%88%E6%81%AF)为例。

## 手动构建相应的消息段
可以按照下面的方式构建 XML 消息。
```
SendingMessage CreateXmlMessage(string xmlData)
{
    // 构建 XML 消息段。
    var section = new Section("xml", ("data", xmlData));
    // 从消息段构建消息。
    return new SendingMessage(section);
}
```

其中构建消息段时，如果要传入参数，可以通过一个或多个元组的方式（就像例子里那样），也可以通过包含参数列表的字典传入。

若要构建包含多个消息段的消息，可以对每个消息段分别构建一条消息，然后用 `+` 操作符连接。

## 用原始消息字符串构建
```
var message = new RawMessage("[CQ:xml,data=<?xml ...]");
```

直接用字符串构建需要考虑转义问题，如果采用这种方式，请查阅 OneBot 文档[字符串格式](https://onebot.page.moe/v11/specs/message/string.html)章节。