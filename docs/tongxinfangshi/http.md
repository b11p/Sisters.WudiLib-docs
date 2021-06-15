---
title: HTTP 和 HTTP POST
lang: zh-CN
---
# HTTP 和 HTTP POST
HTTP (POST) 的优点包括实现简单、无需处理重连等，缺点是每次上报都需要建立 HTTP 连接，比较消耗资源，而且需要 OneBot 服务器和业务逻辑服务器都可连接，或者在同一台机器上。

HTTP 和 HTTP POST 是最基础的通信方式，也是 WudiLib 最早实现的通信方式。在“[快速上手](/zhinan/kuaisushangshou.md)”中也是以此为例进行介绍，此处不再赘述。
