---
title: 通信方式
lang: zh-CN
---
# 通信方式
WudiLib 支持 OneBot 标准全部四种通信方式，包括
- HTTP 和 HTTP POST
- 正向 WebSocket
- 反向 WebSocket

## HTTP 和 HTTP POST
HTTP (POST) 的优点包括实现简单、无需处理重连等，缺点是每次上报都需要建立 HTTP 连接，比较消耗资源，而且需要 OneBot 服务器和业务逻辑服务器都可连接，或者在同一台机器上。

### 使用
HTTP 和 HTTP POST 是最基础的通信方式，也是 WudiLib 最早实现的通信方式。在“快速上手”中也是以此为例进行介绍，此处不再赘述。

## 正向 WebSocket
正向 WebSocket 可以用于业务服务器无法被连接，但是 OneBot 服务器可连接的情况，也可以与 HTTP 通信方式配合使用。

### 使用
见[正向 WebSocket](zhengxiang-websocket.md)。

## 反向 WebSocket
反向 WebSocket 可以用于业务服务器可以被连接，但 OneBot 服务器无法被连接的情况，也可以用于同一业务服务器连接多个 OneBot 服务器（多个 QQ 号）。

### 使用
见[反向 WebSocket](fanxiang-websocket.md)。