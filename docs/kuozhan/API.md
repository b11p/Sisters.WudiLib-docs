---
title: 扩展 API
lang: zh-CN
---
# 扩展 WudiLib API
WudiLib 中暴露了发送请求、获得响应的底层方法。如果您希望扩展 WudiLib 的 API，可以通过扩展方法来实现。

例如，您想使用[获取陌生人信息](https://onebot.page.moe/v11/specs/api/public.html#get_stranger_info-%E8%8E%B7%E5%8F%96%E9%99%8C%E7%94%9F%E4%BA%BA%E4%BF%A1%E6%81%AF)这个 API。

::: tip
并不保证目前此 OneBot API 一定已实现，使用时请选用已实现的 API，根据实际需求扩展。
:::

扩展 WudiLib API 有两步，分别是定义响应数据和定义请求方法。扩展完成后，便可像调用普通的 API 那样调用扩展的 API。

## 定义响应数据类
首先查阅文档，确定您要扩展的 API 的响应数据，然后定义对应的类。WudiLib 用 Newtonsoft.Json 作为反序列化的工具，请使用相应的特性（Attribute）标记每个属性。此 API 的响应定义如下

```cs
using Newtonsoft.Json;
using Sisters.WudiLib.Responses;

public class StrangerInfo
{
    [JsonProperty("user_id")]
    public long UserId { get; set; }
    [JsonProperty("nickname")]
    public string NickName { get; set; }
    [JsonProperty("sex")]
    public Sex Sex { get; set; } // `Sex` 是 `Sisters.WudiLib.Responses` 中已经定义好的枚举，可以直接使用
    [JsonProperty("age")]
    public int Age { get; set; }
}
```

::: tip
如果要扩展的 API 没有响应数据，则不用定义。
:::

## 定义请求方法
下面需要定义一个扩展方法。

```cs
using Sisters.WudiLib;
using Sisters.WudiLib.Responses;

public static Task<StrangerInfo> GetStrangerInfoAsync(this HttpApiClient httpApiClient, long userId, bool noCache = false)
{
    return httpApiClient.CallAsync<StrangerInfo>("get_stranger_info", new
    {
        user_id = userId,
        no_cache = noCache,
    });
}
```

::: tip
如果是没有响应数据的 API，可以调用非泛型的 `CallAsync` 方法，返回的是 `Task<bool>`，指示是否成功。
:::

## 调用扩展 API
扩展好了，您就可以像调用普通 API 那样调用您自己扩展出来的 API。

```cs
HttpApiClient httpApiClient = ...; // 省略了配置 API 客户端的代码。
var strangerInfo = await httpApiClient.GetStrangerInfoAsync(123456789, true);
```