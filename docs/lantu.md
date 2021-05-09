---
title: 蓝图
lang: zh-CN
---
# 蓝图
我会在此介绍我心目中理想的 OneBot SDK 应有怎样的设计和实现。

## 总结 WudiLib
### WudiLib 的优点

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

#### 事件过滤器
```cs
When<EventType>(Func<..., Task<bool>/bool>).Do(..., Func<..., Task/Task<ResponseType>>);
When<EventType>(Func<..., Task<bool>/bool>).Respond(..., Func<..., Task<ResponseType>>);
```

## 框架设计
