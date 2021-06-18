(self.webpackChunksisters_wudilib_docs=self.webpackChunksisters_wudilib_docs||[]).push([[830],{73:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-5503c3ee",path:"/kuozhan/CQ-ma.html",title:"扩展 CQ 码",lang:"zh-CN",frontmatter:{title:"扩展 CQ 码",lang:"zh-CN"},excerpt:"",headers:[{level:2,title:"手动构建相应的消息段",slug:"手动构建相应的消息段",children:[]},{level:2,title:"用原始消息字符串构建",slug:"用原始消息字符串构建",children:[]}],filePathRelative:"kuozhan/CQ-ma.md"}},8014:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>d});var e=a(6252);const t=(0,e.Wm)("h1",{id:"扩展-wudilib-cq-码"},[(0,e.Wm)("a",{class:"header-anchor",href:"#扩展-wudilib-cq-码"},"#"),(0,e.Uk)(" 扩展 WudiLib CQ 码")],-1),p=(0,e.Uk)("如果您想发送的 CQ 码类型不存在于 WudiLib 中，您可以手动构建相应的消息段，也可以用原始消息的方式直接发送。本文以 "),c={href:"https://onebot.page.moe/v11/specs/message/segment.html#xml-%E6%B6%88%E6%81%AF",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("XML 消息"),l=(0,e.Uk)("为例。"),r=(0,e.uE)('<h2 id="手动构建相应的消息段"><a class="header-anchor" href="#手动构建相应的消息段">#</a> 手动构建相应的消息段</h2><p>可以按照下面的方式构建 XML 消息。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token return-type class-name">SendingMessage</span> <span class="token function">CreateXmlMessage</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> xmlData<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// 构建 XML 消息段。</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> section <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Section</span><span class="token punctuation">(</span><span class="token string">&quot;xml&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span> xmlData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 从消息段构建消息。</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SendingMessage</span><span class="token punctuation">(</span>section<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>其中构建消息段时，如果要传入参数，可以通过一个或多个元组的方式（就像例子里那样），也可以通过包含参数列表的字典传入。</p><p>若要构建包含多个消息段的消息，可以对每个消息段分别构建一条消息，然后用 <code>+</code> 操作符连接。</p><h2 id="用原始消息字符串构建"><a class="header-anchor" href="#用原始消息字符串构建">#</a> 用原始消息字符串构建</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RawMessage</span><span class="token punctuation">(</span><span class="token string">&quot;[CQ:xml,data=&lt;?xml ...]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',7),u=(0,e.Uk)("直接用字符串构建需要考虑转义问题，如果采用这种方式，请查阅 OneBot 文档"),i={href:"https://onebot.page.moe/v11/specs/message/string.html",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("字符串格式"),m=(0,e.Uk)("章节。"),d={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("p",null,[p,(0,e.Wm)("a",c,[o,(0,e.Wm)(a)]),l]),r,(0,e.Wm)("p",null,[u,(0,e.Wm)("a",i,[k,(0,e.Wm)(a)]),m])],64)}}}}]);