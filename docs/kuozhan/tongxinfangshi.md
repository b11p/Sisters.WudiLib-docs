---
title: 扩展通信方式
lang: zh-CN
---
# 扩展 WudiLib 通信方式
目前 WudiLib 已支持 OneBot 全部通信方式。如果您想继续扩展，也是可以做到的。

## 扩展 API 通信方式
扩展 API 通信方式非常简单，只需要继承 `HttpApiClient` 类，然后重写 `CallRawAsync` 和/或 `CallRawJObjectAsync` 方法即可。

## 扩展事件上报通信方式
继承 `ApiPostListener` 类，收到事件时调用 `ProcessPost(string content)`（如果你不需要自己处理反序列化）或 `ProcessPost(JObject contentObject)`（如果你已经反序列化成 `JObject` 对象）即可。

::: tip
扩展上报通信方式与扩展事件类型都需要继承 `ApiPostListener` 类，某些情况下有冲突，难以同时扩展。未来版本将会解决这个问题。
:::