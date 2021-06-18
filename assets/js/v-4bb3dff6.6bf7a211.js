(self.webpackChunksisters_wudilib_docs=self.webpackChunksisters_wudilib_docs||[]).push([[613],{1502:(e,l,r)=>{"use strict";r.r(l),r.d(l,{data:()=>t});const t={key:"v-4bb3dff6",path:"/gei-sdk-kaifazhedejianyi.html",title:"给 SDK 开发者的建议",lang:"zh-CN",frontmatter:{title:"给 SDK 开发者的建议",lang:"zh-CN"},excerpt:"",headers:[{level:2,title:"想清楚定位",slug:"想清楚定位",children:[]},{level:2,title:"先积攒一定的经验",slug:"先积攒一定的经验",children:[]},{level:2,title:"充分参考现有项目，吸收现有项目的优点",slug:"充分参考现有项目-吸收现有项目的优点",children:[]},{level:2,title:"简单的 SDK",slug:"简单的-sdk",children:[{level:3,title:"避免过度设计",slug:"避免过度设计",children:[]},{level:3,title:"注重可扩展性",slug:"注重可扩展性",children:[]},{level:3,title:"控制依赖",slug:"控制依赖",children:[]},{level:3,title:"开启 nullable reference types",slug:"开启-nullable-reference-types",children:[]}]},{level:2,title:"完整框架",slug:"完整框架",children:[{level:3,title:"DI 是绝对必要的",slug:"di-是绝对必要的",children:[]},{level:3,title:"保留一定的灵活性",slug:"保留一定的灵活性",children:[]},{level:3,title:"考虑 IDE 集成",slug:"考虑-ide-集成",children:[]}]},{level:2,title:"泛泛的建议",slug:"泛泛的建议",children:[{level:3,title:"多读文档，正确地运用 C# 语言特性",slug:"多读文档-正确地运用-c-语言特性",children:[]},{level:3,title:"多阅读优秀项目源码",slug:"多阅读优秀项目源码",children:[]}]},{level:2,title:"总结",slug:"总结",children:[]}],filePathRelative:"gei-sdk-kaifazhedejianyi.md"}},8937:(e,l,r)=>{"use strict";r.r(l),r.d(l,{default:()=>ge});var t=r(6252);const a=(0,t.Wm)("h1",{id:"给-sdk-开发者的建议"},[(0,t.Wm)("a",{class:"header-anchor",href:"#给-sdk-开发者的建议"},"#"),(0,t.Uk)(" 给 SDK 开发者的建议")],-1),n=(0,t.Wm)("p",null,"如果你对现有的 OneBot C# SDK 都不满意，并打算自己再造一个轮子，为了避免重复陷入弯路，请认真考虑以下建议。",-1),o=(0,t.Wm)("p",null,"当然，我的水平只能给刚开始实践 C# 编程的新晋开发者提供一些建议。对于有经验的大佬，我说的很可能是正确的废话，甚至部分内容干脆是片面的。恳请各位大佬斧正。",-1),s=(0,t.Wm)("h2",{id:"想清楚定位"},[(0,t.Wm)("a",{class:"header-anchor",href:"#想清楚定位"},"#"),(0,t.Uk)(" 想清楚定位")],-1),i=(0,t.Uk)("目前 OneBot SDK 就应有两种不同的定位。用 .NET 官方的项目进行类比，一种是类似于 "),c={href:"https://docs.microsoft.com/en-us/dotnet/api/system.net.httplistener",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("HttpListener"),d=(0,t.Uk)(" 的简单访问库，这也是 WudiLib 的定位；另一种是类似于 "),p={href:"https://dotnet.microsoft.com/apps/aspnet",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("ASP.NET Core"),m=(0,t.Uk)(" 这种包含完整的命令处理的大框架，"),k={href:"https://github.com/b11p/OsuQqBotForNewbieGroup/tree/master/Bleatingsheep.NewHydrant.Bot",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("我也有这种框架"),W=(0,t.Uk)("，但我觉得目前的质量还不值得拿出来给大家使用。前者应尽可能简单，后者可以依赖前者。如果搞不清楚自己的定位，就会出现过度或不伦不类的设计。"),b=(0,t.Uk)("对于简单的 SDK，主要任务是处理请求、反序列化等，将 bot 开发者从繁杂的重复工作中解放出来。例如 "),U={href:"https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("公开 API"),D=(0,t.Uk)(" 中每一个 API 都有不同的参数和返回类型，SDK 应该定义好所对应的请求方法和返回类型，这样 bot 开发者就可以快速开发出包含简单功能的 bot，并享受 C# 强静态类型带来的便利。"),v=(0,t.Wm)("p",null,"对于功能完整的框架，除了上面简单 SDK 的任务，还应该包含指令路由、日志、生命周期管理等功能。这样就可以提高 bot 应用的稳定性和可维护性。",-1),S=(0,t.Uk)("除此之外，"),K={href:"https://v2.nonebot.dev/",target:"_blank",rel:"noopener noreferrer"},I=(0,t.Uk)("NoneBot2"),C=(0,t.Uk)(" 等框架还带插件商店，可以运行其他人写的插件，有点儿接近以前的酷 Q 了。我没有发布插件让别人运行的经验，无权对此指点江山。因此本页面主要讨论 bot 开发者和运营者是同一人，你的 SDK 或框架为此类人服务的情况。"),_=(0,t.uE)('<h2 id="先积攒一定的经验"><a class="header-anchor" href="#先积攒一定的经验">#</a> 先积攒一定的经验</h2><p>我强烈建议所有人不要冒然开始开发 SDK 或框架，而是先做一个包含一定功能的 bot。尤其是目前绝大多数 SDK/框架开发者还只是学生（我也是）的情况下。SDK 可能还好，因为比较简单；框架则会牵扯到更多东西，至少要有几个不同的数据来源，经历几次需求变更（例如本来依赖的服务变得不可用），才能更好地理解 bot 开发者对框架的需求。</p><h2 id="充分参考现有项目-吸收现有项目的优点"><a class="header-anchor" href="#充分参考现有项目-吸收现有项目的优点">#</a> 充分参考现有项目，吸收现有项目的优点</h2><p>无论你要开发 SDK 还是框架，我都建议你浏览现有的几个 C# OneBot SDK/框架，甚至也应该参考其他一些语言的框架。考虑这么设计或实现的优点和缺点是什么，取长补短，避免走其他人走过的弯路。</p><h2 id="简单的-sdk"><a class="header-anchor" href="#简单的-sdk">#</a> 简单的 SDK</h2><h3 id="避免过度设计"><a class="header-anchor" href="#避免过度设计">#</a> 避免过度设计</h3><p>如果你要设计一个用来收发消息和事件的简单 SDK，请保持设计简单。这种 SDK 只需要收、发、API 列表、事件解析和分发各一个基类或接口（根据需要创建子类），并定义一些事件和 API 响应的类即可。</p><h3 id="注重可扩展性"><a class="header-anchor" href="#注重可扩展性">#</a> 注重可扩展性</h3><p>OneBot 协议只规定了基础的 API、事件列表和三（或四）种通信方式，其中每项都可以进行扩展。bot 开发者使用和 SDK 开发者不同的 OneBot 实现是完全可能的。如果 bot 开发者想访问某个 API，而这个 API 在 OneBot 标准和其他实现中都没有，他会希望 SDK 开发者预留了相应的方式使其访问此 API。同理，bot 开发者可能用不同的通信方式和事件列表，SDK 应预留对应的可扩展性。</p><h3 id="控制依赖"><a class="header-anchor" href="#控制依赖">#</a> 控制依赖</h3><p>SDK 只负责最基本的通信，通常不需要依赖过多外部的库，同时也不常用到 .NET 新版本的新特性。因此，我建议 SDK 应依赖尽可能少的外部库，并尽可能降低最低要求的 .NET 版本。</p><h3 id="开启-nullable-reference-types"><a class="header-anchor" href="#开启-nullable-reference-types">#</a> 开启 nullable reference types</h3>',12),y={href:"https://docs.microsoft.com/zh-cn/dotnet/csharp/nullable-references",target:"_blank",rel:"noopener noreferrer"},P=(0,t.Uk)("可为空引用类型"),A=(0,t.Uk)(" 是 C# 8.0 引入的新特性，建议启用，增强健壮性。"),E=(0,t.uE)('<h2 id="完整框架"><a class="header-anchor" href="#完整框架">#</a> 完整框架</h2><h3 id="di-是绝对必要的"><a class="header-anchor" href="#di-是绝对必要的">#</a> DI 是绝对必要的</h3><p>当 bot 功能与个人信息强关联，并且需要从多个数据源更新数据时，DI 可以大大提升可维护性，减少屎山。这是我开发 bot 四年最直接的体会，DI 是绝对必要的。</p><h3 id="保留一定的灵活性"><a class="header-anchor" href="#保留一定的灵活性">#</a> 保留一定的灵活性</h3><p>例如，我建议把事件的各属性设计成可修改的，并且允许任意构造或进行其他处理，以方便可能有需求的中间件。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这种灵活性还使适配其他协议（如钉钉、Discord）成为可能，但是……说到这儿好像有点儿多了。</p></div><h3 id="考虑-ide-集成"><a class="header-anchor" href="#考虑-ide-集成">#</a> 考虑 IDE 集成</h3>',7),B=(0,t.Uk)("在这种框架下开发机器人，往往需要用很多"),N={href:"https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/attributes/",target:"_blank",rel:"noopener noreferrer"},T=(0,t.Uk)("特性（Attribute）"),w=(0,t.Uk)("控制指令触发等。就像 VS 可以直接在 ASP.NET Core 项目中添加控制器并自动生成对应视图，框架开发者可以提供能够在 VS 等 IDE 中使用的模板，帮助 bot 开发者减少编写重复代码，快速创建项目或添加新功能等。"),L=(0,t.Wm)("h2",{id:"泛泛的建议"},[(0,t.Wm)("a",{class:"header-anchor",href:"#泛泛的建议"},"#"),(0,t.Uk)(" 泛泛的建议")],-1),O=(0,t.Wm)("p",null,"这些建议不仅仅是针对开发 SDK 或框架，而是给新晋开发者在编程中的建议。",-1),z=(0,t.Wm)("h3",{id:"多读文档-正确地运用-c-语言特性"},[(0,t.Wm)("a",{class:"header-anchor",href:"#多读文档-正确地运用-c-语言特性"},"#"),(0,t.Uk)(" 多读文档，正确地运用 C# 语言特性")],-1),V=(0,t.Uk)("以异步编程为例，如果一个方法不打算返回任何东西，并且它是异步的，那么它的返回值类型可以为 "),j=(0,t.Wm)("code",null,"void",-1),H=(0,t.Uk)(" 或 "),G=(0,t.Wm)("code",null,"Task",-1),Q=(0,t.Uk)("（"),R=(0,t.Wm)("code",null,"ValueTask",-1),q=(0,t.Uk)(" 暂且不论）。那么应该返回什么呢？官方文档 "),x={href:"https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/async/async-return-types",target:"_blank",rel:"noopener noreferrer"},F=(0,t.Uk)("异步返回类型 (C#)"),Y=(0,t.Uk)(" 就说明了只有此方法作为事件处理器，并且这个事件处理器要求返回 "),J=(0,t.Wm)("code",null,"void",-1),M=(0,t.Uk)(" 时，异步方法才应该用 "),X=(0,t.Wm)("code",null,"void",-1),Z=(0,t.Uk)(" 作为返回值，其余情况都应该用 "),$=(0,t.Wm)("code",null,"Task",-1),ee=(0,t.Uk)(" 作为返回值。而且，返回 "),le=(0,t.Wm)("code",null,"void",-1),re=(0,t.Uk)(" 的异步方法不应引发异常，如果引发，则会导致程序故障。"),te={class:"custom-container tip"},ae=(0,t.Wm)("p",{class:"custom-container-title"},"私货（不是）",-1),ne=(0,t.Uk)("WudiLib 使用 C# 的事件机制处理 OneBot 中的事件，并且要求事件处理器返回 "),oe=(0,t.Wm)("code",null,"void",-1),se=(0,t.Uk)(" 类型，这个设计并不好。想一想，为什么？"),ie={href:"https://github.com/int-and-his-friends/Sisters.WudiLib/blob/d66504387f253b0c2d556806ff3fd4e6cd382fa8/Sisters.WudiLib/Posts/ApiPostListener.cs#L598",target:"_blank",rel:"noopener noreferrer"},ce=(0,t.Uk)("点此查看所提及的源码"),he=(0,t.uE)('<details class="custom-container details"><p>消息的事件处理器常常是异步的，因为指令触发后常常需要异步地访问外部资源（如读取数据库等）。这种设计会使部分 bot 开发者无意识地编写返回 <code>void</code> 类型的异步方法。如果他们没有在方法内捕获并处理异常，就可能导致整个应用程序崩溃。事实上，返回 <code>void</code> 的异步方法几乎只在 GUI 程序中才会用到。</p></details><div class="custom-container tip"><p class="custom-container-title">提示</p><p>你能找出 <code>ValueTask</code> 的官方文档，阅读并总结出 <code>ValueTask</code> 的使用要点吗？</p><p><em>这部分文档翻译得不好，建议找到后阅读英文原文。</em></p></div><h3 id="多阅读优秀项目源码"><a class="header-anchor" href="#多阅读优秀项目源码">#</a> 多阅读优秀项目源码</h3>',3),de=(0,t.Uk)("我还建议每个开发者多阅读像 "),pe={href:"https://github.com/dotnet/runtime",target:"_blank",rel:"noopener noreferrer"},ue=(0,t.Uk)(".NET runtime"),me=(0,t.Uk)(" 这样的优秀项目的源码，学习其中的思路和思想。"),ke=(0,t.Wm)("h2",{id:"总结"},[(0,t.Wm)("a",{class:"header-anchor",href:"#总结"},"#"),(0,t.Uk)(" 总结")],-1),fe=(0,t.Wm)("p",null,"SDK 和框架的设计有相当大的自由发挥的空间，我在此只提出几点我认为无论如何设计，都应该认真考虑的建议。这是我针对在阅读其他 SDK 代码、文档，及与其开发者交流中发现的一部分常见问题提出的建议。这些建议基于我的个人经验，难免会有疏漏，再次恳请各位大佬不吝斧正。",-1),We=(0,t.Uk)("关于我对理想的 SDK 和框架的想法，会在"),be=(0,t.Uk)("蓝图"),Ue=(0,t.Uk)("中更新。"),ge={render:function(e,l){const r=(0,t.up)("OutboundLink"),ge=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[a,n,o,s,(0,t.Wm)("p",null,[i,(0,t.Wm)("a",c,[h,(0,t.Wm)(r)]),d,(0,t.Wm)("a",p,[u,(0,t.Wm)(r)]),m,(0,t.Wm)("a",k,[f,(0,t.Wm)(r)]),W]),(0,t.Wm)("p",null,[b,(0,t.Wm)("a",U,[g,(0,t.Wm)(r)]),D]),v,(0,t.Wm)("p",null,[S,(0,t.Wm)("a",K,[I,(0,t.Wm)(r)]),C]),_,(0,t.Wm)("p",null,[(0,t.Wm)("a",y,[P,(0,t.Wm)(r)]),A]),E,(0,t.Wm)("p",null,[B,(0,t.Wm)("a",N,[T,(0,t.Wm)(r)]),w]),L,O,z,(0,t.Wm)("p",null,[V,j,H,G,Q,R,q,(0,t.Wm)("a",x,[F,(0,t.Wm)(r)]),Y,J,M,X,Z,$,ee,le,re]),(0,t.Wm)("div",te,[ae,(0,t.Wm)("p",null,[ne,oe,se,(0,t.Wm)("a",ie,[ce,(0,t.Wm)(r)])])]),he,(0,t.Wm)("p",null,[de,(0,t.Wm)("a",pe,[ue,(0,t.Wm)(r)]),me]),ke,fe,(0,t.Wm)("p",null,[We,(0,t.Wm)(ge,{to:"/lantu.html"},{default:(0,t.w5)((()=>[be])),_:1}),Ue])],64)}}}}]);