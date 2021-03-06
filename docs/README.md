---
title: Sisters.WudiLib
lang: zh-CN
---
# Sisters.WudiLib
## 介绍
妹妹无敌库（Sisters.WudiLib）是 C# 乃至 .NET 下的 OneBot SDK，实现 .NET 平台进行 OneBot 协议通信。

[快速上手](zhinan/kuaisushangshou.md)

## 写在前面
我从 2018 年初开始制作这个通信库。当时还是酷 Q 时代，COOLQ-HTTP-API 还是 3.4 版本。那时候还完全没有 C# 的 SDK，于是我就写了 WudiLib。一转眼几年过去，酷 Q 永远离开了我们，但 COOLQ-HTTP-API 进化成了 OneBot 协议，生态也繁荣起来。光是 C# 写的 SDK 就有好几个。我一直希望能有现成的 SDK 用，因为我一度不想把这个 SDK 维护下去了。但是，现有的几个其他 SDK 质量实在无法令我满意。各个开发者一遍又一遍地采用早就被我废弃的不良设计，甚至部分想当然的设计让我怀疑其开发者是不是在写 bot。于是，我就只好把 WudiLib 继续更新下去。

诚然，由于历史原因，WudiLib 也包含许多可以改进的设计。您有很大概率对 WudiLib 也不满意，因为我也是。我将在[蓝图](lantu.md)中描述我心目中理想的 C# OneBot SDK 和框架应该是什么样子的。我也强烈建议每个想自己开发 SDK 或框架的开发者读一读我[给 SDK 开发者的建议](gei-sdk-kaifazhedejianyi.md)。希望早日见到质量媲美 [.NET runtime](https://github.com/dotnet/runtime) 的 SDK，和质量媲美 [ASP.NET Core](https://github.com/dotnet/aspnetcore) 的框架。
