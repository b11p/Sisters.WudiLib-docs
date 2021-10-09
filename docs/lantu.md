---
title: 蓝图
lang: zh-CN
---
# 蓝图
我会在此介绍我心目中理想的 OneBot SDK 应有怎样的设计和实现。

## 总结 WudiLib
### WudiLib 的优点
WudiLib 在设计时预留了一定的接口，使得使用者可以根据需要进行扩展，并且可以适应较为广泛的应用场景。

没有引入无意义的依赖，也没有显著浪费资源的代码。

### WudiLib 的不足
#### 类名、API 名设计不佳
我太不会起名字了……举个例子，各个消息的基类叫 `Message`，消息事件的基类也叫 `Message`，经常会出现冲突。

#### 可扩展性还有提升空间
主要是事件的可扩展性。当前要扩展事件类型非常麻烦，而且还有很多限制。

## SDK 设计
分为 sender、receiver、dispatcher 三部分，sender 负责发送请求并返回响应，receiver 接收事件上报，dispatcher 负责解析事件。

### Dispatcher
sender 和 receiver 参考现有设计即可，关键是 dispatcher，这个东西并不存在于现在的 WudiLib 中。

#### 添加事件
首先得收集所有事件类型的实体类，并且允许用户自定义添加。 

用Attribute标明每一个类的条件，比如

```cs
[IfField("type", "message")]
public abstract class Message : Event { } 
```

表示如果 `type` 是 `message`，那就找 `Message` 相关的子类。 

##### 基本限制（规定）： 
- 如果子类和父类（包括间接的）标记了同一个字段，那必须相同。
- 子类比父类多标记的字段也应该受到限制。
    - 严格版：
        - 每个类只能比父类多指定一个字段，并且一个事件类的直接派生类多指定的那个字段必须是同一个。
    - 宽松版（部分规定）：
        - 如果一个类派生了多个子类，并且其共同指定的字段完全相同，则一个类指定的字段必须是另一个的子集。 
        - 匹配时，指定字段多的优先匹配。 

例如： 

```cs
[IfField("a", "a"),IfField("b", "b")] class A : SomeBase { } 
[IfField("a", "a"),IfField("c", "c")] class B : SomeBase { } 
```

这就不行，因为如果上报同时包含了"a", "b", "c"，就会产生歧义。 

```cs
[IfField("a", "a"),IfField("b", "b")] class A : SomeBase { } 
[IfField("a", "a")] class B : SomeBase { } 
```

这就可以，优先匹配A。 

之所以说这些，是想方便 bot 开发者处理未在 SDK 中定义的事件，并尽可能帮助他们减少误用。

数据结构和算法没想好。 

##### 添加方式
考虑API和直接使用反射查找两种方式。 

##### 待定事项
是否允许多次注册？

- 禁止
- 按顺序处理

#### 处理事件（添加事件处理器）
可以考虑在 dispatcher 中提供类似这样的方法来注册事件处理器。

```cs
RegisterMessage(Func<..., Task>);
RegisterEvent<EventType>(Func<..., Task>);
RegisterEvent<EventType, ResponseType>(Func<..., Task<ResponseType>>);
```

方法名考虑“Register”或“Subscribe”开头。

#### 事件过滤器
```cs
When<EventType>(Func<..., Task<bool>/bool>).Do(..., Func<..., Task/Task<ResponseType>>);
When<EventType>(Func<..., Task<bool>/bool>).Respond(..., Func<..., Task<ResponseType>>);
```

### 反向 WebSocket 通信方式
反向 WebSocket 通信应该可以正确处理多个连接的情况，甚至应该支持在不同的连接上启用不同的功能。

## 框架设计
框架应当包含 DI、日志等功能。用 `Microsoft.Extensions.Hosting` 相关的类作为基础提供这些功能应当是不错的选择。

我不打算以 ASP.NET Core 为基础，因为 ASP.NET Core 含有过多与 Bot 框架无关的内容。

此外，我的最新思路是，做好云插件的支持。一个例子就是[消防栓分身](https://xfs.b11p.com/fenshen/)。我希望用户只要配置好 go-cqhttp 或者其他 OneBot 实现的反向 WebSocket 连接，就能连接到开发者的服务器处理事件，减少风控的同时又不抬高使用门槛。

### 术语表
- **开发者**：云插件的开发者，即框架的使用者。开发插件供 bot 连接。
- **用户**：云插件的使用者。用户使用 go-cqhttp 或其他 OneBot 实现连接到开发者提供的云插件上。
- **bot**：连接云插件的 QQ 账号。
- **管理员**：bot 账号的管理者及其所用的账号。

### 云插件框架主要需求
- 做好权限控制，允许匿名用户连接（可配置）
- 对连接有信任等级
  - 匿名用户：等级最低，只开放极其有限的功能
  - 注册用户：指连接的 bot 账号是注册过此云插件的账号。注意此等级的信任等级取决于注册门槛。如果注册门槛不高，用户依然有很大可能是会伪造请求的恶意用户。开启消耗资源较多，或者可能会修改数据库的功能时需谨慎。
  - 高信任用户：指开发者自己的 bot 号或者其他可以信任的 bot 号连接。
- 连接的 bot 默认给予开发者一定权限（如加好友自动通过，可配置）。注册用户可以调整设定（该 bot 对应的管理员账号、是否自动通过好友或加群请求等）。
- 提供功能开关，允许管理员针对每个群调整功能开关。
- 匿名用户的 QQ 号是靠用户主动上报获取的，可信度低，因此匿名用户不限连接数。注册用户（QQ 号和设定的密钥必须匹配）连接数可以受到限制。

### 设计想法

设计：
- 数据库有 bot 表，存储：bot 账号、对应的密钥、信任等级
- 有配置表，列：bot 账号、配置项名称、配置项的值（考虑JSON？）
- 配置
    - 管理员账号
    - 每个功能的开关
    - 每个功能的配置
    - 重载是否允许开发者加好友
    - 是否允许宣称是该账号的匿名连接（允许）
- Host：得有个总 Host¹，但是每个 bot 使用单独的 Host² 吗？
    - 当有连接到 Host¹ 的连接，就为其创建一个 Host²，断开即销毁
    - 如果是已注册用户，就缓存该 Host²
        - 包装一下事件类和 API 类
        - 断开一段时间后才销毁
        - 拒绝同时多个连接
        - 检测到重连就使用同一个 Host²
    - API类和事件监听类本身也是 Service
- 中间件：
    - 允许注册中间件，中间件甚至允许修改事件本身
    - 事件处理本身也是个中间件，搜索合适的处理器并把事件发给合适的事件处理器（并发执行）
    - 有些事件处理可能希望是中间件模式（写在任意地方却可能希望修改事件本身）
        - 优先级问题如何解决
    - 触发命令就不处理事件
        - 命令中间件触发就不往下走
        - 根据命令处理结果。用特性：`[Condition<CommandResultService>(Property, Value)]`
    - 对 API 进行包装，用以拦截调用并交由中间件处理
        - 如何实现呢？
        - 与 HTTP 之类的服务不同，bot 服务可以包含多个响应，也可能调用平台的其他 API。
    - 功能开关也由中间件处理
- 单 Host² 多账号：使用中间件实现
    - 提供一个 scoped 的服务，用于把消息保存成平台无关的格式
    - 有中间件可以读取 onebot 或者其他平台的事件，将其存储到该服务中
    - 命令之类的也是由一个中间件处理（把处理结果也保存到相关的服务里）
        - 比如提供 `Respond` 方法（同步还是异步呢，也许传入 `onFailure` 委托更好）
- 用户组（非面向开发者的决定信任等级的用户组，为面向用户的方便管理的用户组）
    - 可能只有部分功能用到用户组功能
    - 也许可以作为服务之一提供
    - 表：
        - 用户表
        - 用户组表（组名，权限等级（int））
        - 权限列表
            - 抽象权限（string）
            - 功能权限
        - 用户-组表
        - 用户/组-权限表（授予/拒绝）
    - 默认都有 Invoke（名称待定）之类的权限，被禁止则无法使用所有功能
    - API：计划简单地提供增删改查
    - Attributes：
        - `[PermissionLevel(int)]` 必须有相应等级
        - `[Require(string)]` 必须有相应名称的权限（抽象权限）
        - 默认情况下，必须有对应的“功能权限”才可调用/触发
        - 这些都是加在“命令”上的，由命令中间件调用用户组相关服务判断是否触发。
- 日志
    - 就用内置的
    - 有 Warning 以上等级的日志，通过其他途径通知？但是这样需要开发者处理，毕竟代码是开发者写
- 单元测试
    - 待定，看看 ASP.NET Core 怎么做的
- 框架本身的单元测试