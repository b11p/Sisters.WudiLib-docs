import{_ as s,M as e,p as t,q as o,R as c,t as a,N as p,V as i,a1 as l}from"./framework-5866ffd3.js";const r={},d=l(`<h1 id="进阶-wudilib" tabindex="-1"><a class="header-anchor" href="#进阶-wudilib" aria-hidden="true">#</a> 进阶 WudiLib</h1><h2 id="在消息中包含文本以外的内容-cq-码" tabindex="-1"><a class="header-anchor" href="#在消息中包含文本以外的内容-cq-码" aria-hidden="true">#</a> 在消息中包含文本以外的内容（CQ 码）</h2><p>可以通过 <code>SendingMessage</code> 的静态方法构造各种类型的消息，然后通过 <code>+</code> 连接。</p><h3 id="发送图片、语音、at-等消息" tabindex="-1"><a class="header-anchor" href="#发送图片、语音、at-等消息" aria-hidden="true">#</a> 发送图片、语音、At 等消息</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// At 消息</span>
<span class="token class-name"><span class="token keyword">var</span></span> atMessage <span class="token operator">=</span> SendingMessage<span class="token punctuation">.</span><span class="token function">At</span><span class="token punctuation">(</span><span class="token number">555555555</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 网络图片消息。</span>
<span class="token class-name"><span class="token keyword">var</span></span> netImage <span class="token operator">=</span> SendingMessage<span class="token punctuation">.</span><span class="token function">NetImage</span><span class="token punctuation">(</span><span class="token string">&quot;https://your.image.url/file.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 文本消息。</span>
<span class="token class-name"><span class="token keyword">var</span></span> textMessage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SendingMessage</span><span class="token punctuation">(</span><span class="token string">&quot;这是一条文本消息。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 混合排版消息。</span>
<span class="token class-name"><span class="token keyword">var</span></span> mixedMessage <span class="token operator">=</span> netImage <span class="token operator">+</span> textMessage<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展-cq-码" tabindex="-1"><a class="header-anchor" href="#扩展-cq-码" aria-hidden="true">#</a> 扩展 CQ 码</h3>`,6);function u(k,m){const n=e("RouterLink");return t(),o("div",null,[d,c("p",null,[a("由于 OneBot 及其实现多种多样，很难把所有可能的 CQ 码都列出来。因此，对于 WudiLib 中没有预定义好的 CQ 码，您可以自行扩展。见："),p(n,{to:"/kuozhan/CQ-ma.html"},{default:i(()=>[a("扩展 WudiLib CQ 码")]),_:1}),a("。")])])}const v=s(r,[["render",u],["__file","jinjie-wudilib.html.vue"]]);export{v as default};