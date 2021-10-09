---
title: 路线图
lang: zh-CN
---
# 路线图
并没有一个什么时候发布什么版本，应该包含哪些新功能的非常详细的路线图，权当这是个带优先级的 TODO 列表吧。

## 确定 WebSocket 通信方式实现细节
目前 WebSocket 通信方式已经可以稳定工作，但内部实现的一部分内容仍需要做取舍。

**已在 0.2.0-beta3 完成。**

## 实现 dispatcher
现在 WudiLib 监听事件和处理事件（调用事件处理器）是写在一起的，影响了扩展性。我接下来要把 dispatcher 独立出来，让其可以独立扩展。

## 完全重构（破坏性变更）
在每一部分都有了良好实现的基础上，彻底解决 WudiLib 历史遗留的不良设计，创造出符合[蓝图](lantu.md)的 SDK。

## 在消防栓用的框架里尝试不同的框架设计

## 重新开发一个我满意的框架