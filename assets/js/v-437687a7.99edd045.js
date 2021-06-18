(self.webpackChunksisters_wudilib_docs=self.webpackChunksisters_wudilib_docs||[]).push([[414],{6522:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>p});const p={key:"v-437687a7",path:"/kuozhan/API.html",title:"扩展 API",lang:"zh-CN",frontmatter:{title:"扩展 API",lang:"zh-CN"},excerpt:"",headers:[{level:2,title:"定义响应数据类",slug:"定义响应数据类",children:[]},{level:2,title:"定义请求方法",slug:"定义请求方法",children:[]},{level:2,title:"调用扩展 API",slug:"调用扩展-api",children:[]}],filePathRelative:"kuozhan/API.md"}},9372:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>r});var p=a(6252);const t=(0,p.Wm)("h1",{id:"扩展-wudilib-api"},[(0,p.Wm)("a",{class:"header-anchor",href:"#扩展-wudilib-api"},"#"),(0,p.Uk)(" 扩展 WudiLib API")],-1),e=(0,p.Wm)("p",null,"WudiLib 中暴露了发送请求、获得响应的底层方法。如果您希望扩展 WudiLib 的 API，可以通过扩展方法来实现。",-1),c=(0,p.Uk)("例如，您想使用"),o={href:"https://onebot.page.moe/v11/specs/api/public.html#get_stranger_info-%E8%8E%B7%E5%8F%96%E9%99%8C%E7%94%9F%E4%BA%BA%E4%BF%A1%E6%81%AF",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("获取陌生人信息"),u=(0,p.Uk)("这个 API。"),i=(0,p.uE)('<div class="custom-container tip"><p class="custom-container-title">提示</p><p>此 API 不一定已被所有 OneBot 服务端实现，使用时请选用已实现的 API，根据实际需求扩展。</p></div><p>扩展 WudiLib API 有两步，分别是定义响应数据和定义请求方法。扩展完成后，便可像调用普通的 API 那样调用扩展的 API。</p><h2 id="定义响应数据类"><a class="header-anchor" href="#定义响应数据类">#</a> 定义响应数据类</h2><p>首先查阅文档，确定您要扩展的 API 的响应数据，然后定义对应的类。WudiLib 用 Newtonsoft.Json 作为反序列化的工具，请使用相应的特性（Attribute）标记每个属性。此 API 的响应定义如下</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Newtonsoft<span class="token punctuation">.</span>Json</span><span class="token punctuation">;</span>\n<span class="token keyword">using</span> <span class="token namespace">Sisters<span class="token punctuation">.</span>WudiLib<span class="token punctuation">.</span>Responses</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StrangerInfo</span>\n<span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">JsonProperty</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;user_id&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">long</span></span> UserId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">JsonProperty</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;nickname&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> NickName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">JsonProperty</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Sex</span> Sex <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">// `Sex` 是 `Sisters.WudiLib.Responses` 中已经定义好的枚举，可以直接使用</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">JsonProperty</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Age <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果要扩展的 API 没有响应数据，则不用定义。</p></div><h2 id="定义请求方法"><a class="header-anchor" href="#定义请求方法">#</a> 定义请求方法</h2><p>下面需要定义一个扩展方法。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Sisters<span class="token punctuation">.</span>WudiLib</span><span class="token punctuation">;</span>\n<span class="token keyword">using</span> <span class="token namespace">Sisters<span class="token punctuation">.</span>WudiLib<span class="token punctuation">.</span>Responses</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>StrangerInfo<span class="token punctuation">&gt;</span></span> <span class="token function">GetStrangerInfoAsync</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">HttpApiClient</span> httpApiClient<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">long</span></span> userId<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">bool</span></span> noCache <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> httpApiClient<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">CallAsync</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>StrangerInfo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;get_stranger_info&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span>\n    <span class="token punctuation">{</span>\n        user_id <span class="token operator">=</span> userId<span class="token punctuation">,</span>\n        no_cache <span class="token operator">=</span> noCache<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果是没有响应数据的 API，可以调用非泛型的 <code>CallAsync</code> 方法，返回的是 <code>Task&lt;bool&gt;</code>，指示是否成功。</p></div><h2 id="调用扩展-api"><a class="header-anchor" href="#调用扩展-api">#</a> 调用扩展 API</h2><p>扩展好了，您就可以像调用普通 API 那样调用您自己扩展出来的 API。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">HttpApiClient</span> httpApiClient <span class="token operator">=</span> <span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">;</span> <span class="token comment">// 省略了配置 API 客户端的代码。</span>\n<span class="token class-name"><span class="token keyword">var</span></span> strangerInfo <span class="token operator">=</span> <span class="token keyword">await</span> httpApiClient<span class="token punctuation">.</span><span class="token function">GetStrangerInfoAsync</span><span class="token punctuation">(</span><span class="token number">123456789</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',13),r={render:function(s,n){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,e,(0,p.Wm)("p",null,[c,(0,p.Wm)("a",o,[l,(0,p.Wm)(a)]),u]),i],64)}}}}]);