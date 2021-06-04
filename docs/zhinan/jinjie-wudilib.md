---
title: 进阶 WudiLib
lang: zh-CN
sidebar:
  - isGroup: true
    text: 指南
    children: ['/zhinan/kuaisushangshou.md', '/zhinan/jinjie-wudilib.md']
---
# 进阶 WudiLib
## 在消息中包含文本以外的内容（CQ 码）
可以通过 `SendingMessage` 的静态方法构造各种类型的消息，然后通过 `+` 连接。
### 发送图片、语音、At 等消息
```cs
// At 消息
var atMessage = SendingMessage.At(555555555);
// 网络图片消息。
var netImage = SendingMessage.NetImage("https://your.image.url/file.jpg");
// 文本消息。
var textMessage = new SendingMessage("这是一条文本消息。");
// 混合排版消息。
var mixedMessage = netImage + textMessage;
```

### 扩展 CQ 码
由于 OneBot 及其实现多种多样，很难把所有可能的 CQ 码都列出来。因此，对于 WudiLib 中没有预定义好的 CQ 码，您可以自行扩展。见：[扩展 WudiLib CQ 码](/kuozhan/CQ-ma.html)。
