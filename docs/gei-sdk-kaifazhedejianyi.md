---
title: 给 SDK 开发者的建议
lang: zh-CN
---
# 给 SDK 开发者的建议
如果你对现有的 OneBot C# SDK 都不满意，并打算自己再造一个轮子，为了避免重复陷入弯路，请认真考虑以下建议。

## 想清楚定位
目前 OneBot SDK 就应有两种不同的定位。用 .NET 官方的项目进行类比，一种是类似于 [HttpListener](https://docs.microsoft.com/en-us/dotnet/api/system.net.httplistener) 的简单访问库，这也是 WudiLib 的定位；另一种是类似于 [ASP.NET Core](https://dotnet.microsoft.com/apps/aspnet) 这种包含完整的命令处理的大框架，[我也有这种框架](https://github.com/b11p/OsuQqBotForNewbieGroup/tree/master/Bleatingsheep.NewHydrant.Bot)，但我觉得目前的质量还不值得拿出来给大家使用。前者应尽可能简单，后者可以依赖前者。如果搞不清楚自己的定位，就会出现过度或不伦不类的设计。

对于简单的 SDK，主要任务是处理请求、反序列化等，将 bot 开发者从繁杂的重复工作中解放出来。例如 [公开 API](https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md) 中每一个 API 都有不同的参数和返回类型，SDK 应该定义好所对应的请求方法和返回类型，这样 bot 开发者就可以快速开发出包含简单功能的 bot，并享受 C# 强静态类型带来的便利。

对于功能完整的框架，除了上面简单 SDK 的任务，还应该包含指令路由、日志、生命周期管理等功能。这样就可以提高 bot 应用的稳定性和可维护性。

## 先积攒一定的经验
我强烈建议所有人不要冒然开始开发 SDK 或框架，而是先做一个包含一定功能的 bot。尤其是目前绝大多数 SDK/框架开发者还只是学生（我也是）的情况下。SDK 可能还好，因为比较简单；框架则会牵扯到更多东西，至少要有几个不同的数据来源，经历几次需求变更（例如本来依赖的服务变得不可用），才能更好地理解 bot 开发者对框架的需求。

## 充分参考现有项目，吸收现有项目的优点
无论你要开发 SDK 还是框架，我都建议你浏览现有的几个 C# OneBot SDK/框架，甚至也应该参考其他一些语言的框架。考虑这么设计或实现的优点和缺点是什么，取长补短，避免走其他人走过的弯路。

此外，我还建议每个开发者多阅读像 [.NET runtime](https://github.com/dotnet/runtime) 这样的优秀项目的源码，学习其中的思路和思想。

## 简单的 SDK
### 避免过度设计

### 注重可扩展性

### 控制依赖
- 外部依赖
- .NET 版本依赖

## 完整框架
### DI 是绝对必要的

### 依然是可扩展性

### 考虑 IDE 集成

### 允许直接构造、修改和处理事件
