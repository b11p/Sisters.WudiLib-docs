import{_ as e,r as p,o,c as l,a,b as c,F as i,e as n,d as s}from"./app.4da2a9fc.js";const u={},r=n(`<h1 id="\u84DD\u56FE" tabindex="-1"><a class="header-anchor" href="#\u84DD\u56FE" aria-hidden="true">#</a> \u84DD\u56FE</h1><p>\u6211\u4F1A\u5728\u6B64\u4ECB\u7ECD\u6211\u5FC3\u76EE\u4E2D\u7406\u60F3\u7684 OneBot SDK \u5E94\u6709\u600E\u6837\u7684\u8BBE\u8BA1\u548C\u5B9E\u73B0\u3002</p><h2 id="\u603B\u7ED3-wudilib" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3-wudilib" aria-hidden="true">#</a> \u603B\u7ED3 WudiLib</h2><h3 id="wudilib-\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#wudilib-\u7684\u4F18\u70B9" aria-hidden="true">#</a> WudiLib \u7684\u4F18\u70B9</h3><p>WudiLib \u5728\u8BBE\u8BA1\u65F6\u9884\u7559\u4E86\u4E00\u5B9A\u7684\u63A5\u53E3\uFF0C\u4F7F\u5F97\u4F7F\u7528\u8005\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8FDB\u884C\u6269\u5C55\uFF0C\u5E76\u4E14\u53EF\u4EE5\u9002\u5E94\u8F83\u4E3A\u5E7F\u6CDB\u7684\u5E94\u7528\u573A\u666F\u3002</p><p>\u6CA1\u6709\u5F15\u5165\u65E0\u610F\u4E49\u7684\u4F9D\u8D56\uFF0C\u4E5F\u6CA1\u6709\u663E\u8457\u6D6A\u8D39\u8D44\u6E90\u7684\u4EE3\u7801\u3002</p><h3 id="wudilib-\u7684\u4E0D\u8DB3" tabindex="-1"><a class="header-anchor" href="#wudilib-\u7684\u4E0D\u8DB3" aria-hidden="true">#</a> WudiLib \u7684\u4E0D\u8DB3</h3><h4 id="\u7C7B\u540D\u3001api-\u540D\u8BBE\u8BA1\u4E0D\u4F73" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u540D\u3001api-\u540D\u8BBE\u8BA1\u4E0D\u4F73" aria-hidden="true">#</a> \u7C7B\u540D\u3001API \u540D\u8BBE\u8BA1\u4E0D\u4F73</h4><p>\u6211\u592A\u4E0D\u4F1A\u8D77\u540D\u5B57\u4E86\u2026\u2026\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5404\u4E2A\u6D88\u606F\u7684\u57FA\u7C7B\u53EB <code>Message</code>\uFF0C\u6D88\u606F\u4E8B\u4EF6\u7684\u57FA\u7C7B\u4E5F\u53EB <code>Message</code>\uFF0C\u7ECF\u5E38\u4F1A\u51FA\u73B0\u51B2\u7A81\u3002</p><h4 id="\u53EF\u6269\u5C55\u6027\u8FD8\u6709\u63D0\u5347\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u53EF\u6269\u5C55\u6027\u8FD8\u6709\u63D0\u5347\u7A7A\u95F4" aria-hidden="true">#</a> \u53EF\u6269\u5C55\u6027\u8FD8\u6709\u63D0\u5347\u7A7A\u95F4</h4><p>\u4E3B\u8981\u662F\u4E8B\u4EF6\u7684\u53EF\u6269\u5C55\u6027\u3002\u5F53\u524D\u8981\u6269\u5C55\u4E8B\u4EF6\u7C7B\u578B\u975E\u5E38\u9EBB\u70E6\uFF0C\u800C\u4E14\u8FD8\u6709\u5F88\u591A\u9650\u5236\u3002</p><h2 id="sdk-\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#sdk-\u8BBE\u8BA1" aria-hidden="true">#</a> SDK \u8BBE\u8BA1</h2><p>\u5206\u4E3A sender\u3001receiver\u3001dispatcher \u4E09\u90E8\u5206\uFF0Csender \u8D1F\u8D23\u53D1\u9001\u8BF7\u6C42\u5E76\u8FD4\u56DE\u54CD\u5E94\uFF0Creceiver \u63A5\u6536\u4E8B\u4EF6\u4E0A\u62A5\uFF0Cdispatcher \u8D1F\u8D23\u89E3\u6790\u4E8B\u4EF6\u3002</p><h3 id="dispatcher" tabindex="-1"><a class="header-anchor" href="#dispatcher" aria-hidden="true">#</a> Dispatcher</h3><p>sender \u548C receiver \u53C2\u8003\u73B0\u6709\u8BBE\u8BA1\u5373\u53EF\uFF0C\u5173\u952E\u662F dispatcher\uFF0C\u8FD9\u4E2A\u4E1C\u897F\u5E76\u4E0D\u5B58\u5728\u4E8E\u73B0\u5728\u7684 WudiLib \u4E2D\u3002</p><h4 id="\u6DFB\u52A0\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4E8B\u4EF6" aria-hidden="true">#</a> \u6DFB\u52A0\u4E8B\u4EF6</h4><p>\u9996\u5148\u5F97\u6536\u96C6\u6240\u6709\u4E8B\u4EF6\u7C7B\u578B\u7684\u5B9E\u4F53\u7C7B\uFF0C\u5E76\u4E14\u5141\u8BB8\u7528\u6237\u81EA\u5B9A\u4E49\u6DFB\u52A0\u3002</p><p>\u7528Attribute\u6807\u660E\u6BCF\u4E00\u4E2A\u7C7B\u7684\u6761\u4EF6\uFF0C\u6BD4\u5982</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">IfField</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Message</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Event</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8868\u793A\u5982\u679C <code>type</code> \u662F <code>message</code>\uFF0C\u90A3\u5C31\u627E <code>Message</code> \u76F8\u5173\u7684\u5B50\u7C7B\u3002</p><h5 id="\u57FA\u672C\u9650\u5236-\u89C4\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u9650\u5236-\u89C4\u5B9A" aria-hidden="true">#</a> \u57FA\u672C\u9650\u5236\uFF08\u89C4\u5B9A\uFF09\uFF1A</h5><ul><li>\u5982\u679C\u5B50\u7C7B\u548C\u7236\u7C7B\uFF08\u5305\u62EC\u95F4\u63A5\u7684\uFF09\u6807\u8BB0\u4E86\u540C\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u90A3\u5FC5\u987B\u76F8\u540C\u3002</li><li>\u5B50\u7C7B\u6BD4\u7236\u7C7B\u591A\u6807\u8BB0\u7684\u5B57\u6BB5\u4E5F\u5E94\u8BE5\u53D7\u5230\u9650\u5236\u3002 <ul><li>\u4E25\u683C\u7248\uFF1A <ul><li>\u6BCF\u4E2A\u7C7B\u53EA\u80FD\u6BD4\u7236\u7C7B\u591A\u6307\u5B9A\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u5E76\u4E14\u4E00\u4E2A\u4E8B\u4EF6\u7C7B\u7684\u76F4\u63A5\u6D3E\u751F\u7C7B\u591A\u6307\u5B9A\u7684\u90A3\u4E2A\u5B57\u6BB5\u5FC5\u987B\u662F\u540C\u4E00\u4E2A\u3002</li></ul></li><li>\u5BBD\u677E\u7248\uFF08\u90E8\u5206\u89C4\u5B9A\uFF09\uFF1A <ul><li>\u5982\u679C\u4E00\u4E2A\u7C7B\u6D3E\u751F\u4E86\u591A\u4E2A\u5B50\u7C7B\uFF0C\u5E76\u4E14\u5176\u5171\u540C\u6307\u5B9A\u7684\u5B57\u6BB5\u5B8C\u5168\u76F8\u540C\uFF0C\u5219\u4E00\u4E2A\u7C7B\u6307\u5B9A\u7684\u5B57\u6BB5\u5FC5\u987B\u662F\u53E6\u4E00\u4E2A\u7684\u5B50\u96C6\u3002</li><li>\u5339\u914D\u65F6\uFF0C\u6307\u5B9A\u5B57\u6BB5\u591A\u7684\u4F18\u5148\u5339\u914D\u3002</li></ul></li></ul></li></ul><p>\u4F8B\u5982\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">IfField</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span><span class="token class-name">IfField</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">SomeBase</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">IfField</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span><span class="token class-name">IfField</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span> <span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">SomeBase</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u5C31\u4E0D\u884C\uFF0C\u56E0\u4E3A\u5982\u679C\u4E0A\u62A5\u540C\u65F6\u5305\u542B\u4E86&quot;a&quot;, &quot;b&quot;, &quot;c&quot;\uFF0C\u5C31\u4F1A\u4EA7\u751F\u6B67\u4E49\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">IfField</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span><span class="token class-name">IfField</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">SomeBase</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">IfField</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span> <span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">SomeBase</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u5C31\u53EF\u4EE5\uFF0C\u4F18\u5148\u5339\u914DA\u3002</p><p>\u4E4B\u6240\u4EE5\u8BF4\u8FD9\u4E9B\uFF0C\u662F\u60F3\u65B9\u4FBF bot \u5F00\u53D1\u8005\u5904\u7406\u672A\u5728 SDK \u4E2D\u5B9A\u4E49\u7684\u4E8B\u4EF6\uFF0C\u5E76\u5C3D\u53EF\u80FD\u5E2E\u52A9\u4ED6\u4EEC\u51CF\u5C11\u8BEF\u7528\u3002</p><p>\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u6CA1\u60F3\u597D\u3002</p><h5 id="\u6DFB\u52A0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u65B9\u5F0F" aria-hidden="true">#</a> \u6DFB\u52A0\u65B9\u5F0F</h5><p>\u8003\u8651API\u548C\u76F4\u63A5\u4F7F\u7528\u53CD\u5C04\u67E5\u627E\u4E24\u79CD\u65B9\u5F0F\u3002</p><h5 id="\u5F85\u5B9A\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u5F85\u5B9A\u4E8B\u9879" aria-hidden="true">#</a> \u5F85\u5B9A\u4E8B\u9879</h5><p>\u662F\u5426\u5141\u8BB8\u591A\u6B21\u6CE8\u518C\uFF1F</p><ul><li>\u7981\u6B62</li><li>\u6309\u987A\u5E8F\u5904\u7406</li></ul><h4 id="\u5904\u7406\u4E8B\u4EF6-\u6DFB\u52A0\u4E8B\u4EF6\u5904\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u4E8B\u4EF6-\u6DFB\u52A0\u4E8B\u4EF6\u5904\u7406\u5668" aria-hidden="true">#</a> \u5904\u7406\u4E8B\u4EF6\uFF08\u6DFB\u52A0\u4E8B\u4EF6\u5904\u7406\u5668\uFF09</h4><p>\u53EF\u4EE5\u8003\u8651\u5728 dispatcher \u4E2D\u63D0\u4F9B\u7C7B\u4F3C\u8FD9\u6837\u7684\u65B9\u6CD5\u6765\u6CE8\u518C\u4E8B\u4EF6\u5904\u7406\u5668\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token function">RegisterMessage</span><span class="token punctuation">(</span>Func<span class="token operator">&lt;</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">,</span> Task<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token generic-method"><span class="token function">RegisterEvent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>EventType<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>Func<span class="token operator">&lt;</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">,</span> Task<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token generic-method"><span class="token function">RegisterEvent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>EventType<span class="token punctuation">,</span> ResponseType<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>Func<span class="token operator">&lt;</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">,</span> Task<span class="token operator">&lt;</span>ResponseType<span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u65B9\u6CD5\u540D\u8003\u8651\u201CRegister\u201D\u6216\u201CSubscribe\u201D\u5F00\u5934\u3002</p><h4 id="\u4E8B\u4EF6\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u4E8B\u4EF6\u8FC7\u6EE4\u5668</h4><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">When</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>EventType<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>Func<span class="token operator">&lt;</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">,</span> Task<span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token operator">&gt;</span><span class="token operator">/</span><span class="token keyword">bool</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">,</span> Func<span class="token operator">&lt;</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">,</span> Task<span class="token operator">/</span>Task<span class="token operator">&lt;</span>ResponseType<span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token generic-method"><span class="token function">When</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>EventType<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>Func<span class="token operator">&lt;</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">,</span> Task<span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token operator">&gt;</span><span class="token operator">/</span><span class="token keyword">bool</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Respond</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">,</span> Func<span class="token operator">&lt;</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">,</span> Task<span class="token operator">&lt;</span>ResponseType<span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u53CD\u5411-websocket-\u901A\u4FE1\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411-websocket-\u901A\u4FE1\u65B9\u5F0F" aria-hidden="true">#</a> \u53CD\u5411 WebSocket \u901A\u4FE1\u65B9\u5F0F</h3><p>\u53CD\u5411 WebSocket \u901A\u4FE1\u5E94\u8BE5\u53EF\u4EE5\u6B63\u786E\u5904\u7406\u591A\u4E2A\u8FDE\u63A5\u7684\u60C5\u51B5\uFF0C\u751A\u81F3\u5E94\u8BE5\u652F\u6301\u5728\u4E0D\u540C\u7684\u8FDE\u63A5\u4E0A\u542F\u7528\u4E0D\u540C\u7684\u529F\u80FD\u3002</p><h2 id="\u6846\u67B6\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u6846\u67B6\u8BBE\u8BA1" aria-hidden="true">#</a> \u6846\u67B6\u8BBE\u8BA1</h2><p>\u6846\u67B6\u5E94\u5F53\u5305\u542B DI\u3001\u65E5\u5FD7\u7B49\u529F\u80FD\u3002\u7528 <code>Microsoft.Extensions.Hosting</code> \u76F8\u5173\u7684\u7C7B\u4F5C\u4E3A\u57FA\u7840\u63D0\u4F9B\u8FD9\u4E9B\u529F\u80FD\u5E94\u5F53\u662F\u4E0D\u9519\u7684\u9009\u62E9\u3002</p><p>\u6211\u4E0D\u6253\u7B97\u4EE5 ASP.NET Core \u4E3A\u57FA\u7840\uFF0C\u56E0\u4E3A ASP.NET Core \u542B\u6709\u8FC7\u591A\u4E0E Bot \u6846\u67B6\u65E0\u5173\u7684\u5185\u5BB9\u3002</p>`,45),k=s("\u6B64\u5916\uFF0C\u6211\u7684\u6700\u65B0\u601D\u8DEF\u662F\uFF0C\u505A\u597D\u4E91\u63D2\u4EF6\u7684\u652F\u6301\u3002\u4E00\u4E2A\u4F8B\u5B50\u5C31\u662F"),d={href:"https://xfs.b11p.com/fenshen/",target:"_blank",rel:"noopener noreferrer"},h=s("\u6D88\u9632\u6813\u5206\u8EAB"),b=s("\u3002\u6211\u5E0C\u671B\u7528\u6237\u53EA\u8981\u914D\u7F6E\u597D go-cqhttp \u6216\u8005\u5176\u4ED6 OneBot \u5B9E\u73B0\u7684\u53CD\u5411 WebSocket \u8FDE\u63A5\uFF0C\u5C31\u80FD\u8FDE\u63A5\u5230\u5F00\u53D1\u8005\u7684\u670D\u52A1\u5668\u5904\u7406\u4E8B\u4EF6\uFF0C\u51CF\u5C11\u98CE\u63A7\u7684\u540C\u65F6\u53C8\u4E0D\u62AC\u9AD8\u4F7F\u7528\u95E8\u69DB\u3002"),g=n('<h3 id="\u672F\u8BED\u8868" tabindex="-1"><a class="header-anchor" href="#\u672F\u8BED\u8868" aria-hidden="true">#</a> \u672F\u8BED\u8868</h3><ul><li><strong>\u5F00\u53D1\u8005</strong>\uFF1A\u4E91\u63D2\u4EF6\u7684\u5F00\u53D1\u8005\uFF0C\u5373\u6846\u67B6\u7684\u4F7F\u7528\u8005\u3002\u5F00\u53D1\u63D2\u4EF6\u4F9B bot \u8FDE\u63A5\u3002</li><li><strong>\u7528\u6237</strong>\uFF1A\u4E91\u63D2\u4EF6\u7684\u4F7F\u7528\u8005\u3002\u7528\u6237\u4F7F\u7528 go-cqhttp \u6216\u5176\u4ED6 OneBot \u5B9E\u73B0\u8FDE\u63A5\u5230\u5F00\u53D1\u8005\u63D0\u4F9B\u7684\u4E91\u63D2\u4EF6\u4E0A\u3002</li><li><strong>bot</strong>\uFF1A\u8FDE\u63A5\u4E91\u63D2\u4EF6\u7684 QQ \u8D26\u53F7\u3002</li><li><strong>\u7BA1\u7406\u5458</strong>\uFF1Abot \u8D26\u53F7\u7684\u7BA1\u7406\u8005\u53CA\u5176\u6240\u7528\u7684\u8D26\u53F7\u3002</li></ul><h3 id="\u4E91\u63D2\u4EF6\u6846\u67B6\u4E3B\u8981\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4E91\u63D2\u4EF6\u6846\u67B6\u4E3B\u8981\u9700\u6C42" aria-hidden="true">#</a> \u4E91\u63D2\u4EF6\u6846\u67B6\u4E3B\u8981\u9700\u6C42</h3><ul><li>\u505A\u597D\u6743\u9650\u63A7\u5236\uFF0C\u5141\u8BB8\u533F\u540D\u7528\u6237\u8FDE\u63A5\uFF08\u53EF\u914D\u7F6E\uFF09</li><li>\u5BF9\u8FDE\u63A5\u6709\u4FE1\u4EFB\u7B49\u7EA7 <ul><li>\u533F\u540D\u7528\u6237\uFF1A\u7B49\u7EA7\u6700\u4F4E\uFF0C\u53EA\u5F00\u653E\u6781\u5176\u6709\u9650\u7684\u529F\u80FD</li><li>\u6CE8\u518C\u7528\u6237\uFF1A\u6307\u8FDE\u63A5\u7684 bot \u8D26\u53F7\u662F\u6CE8\u518C\u8FC7\u6B64\u4E91\u63D2\u4EF6\u7684\u8D26\u53F7\u3002\u6CE8\u610F\u6B64\u7B49\u7EA7\u7684\u4FE1\u4EFB\u7B49\u7EA7\u53D6\u51B3\u4E8E\u6CE8\u518C\u95E8\u69DB\u3002\u5982\u679C\u6CE8\u518C\u95E8\u69DB\u4E0D\u9AD8\uFF0C\u7528\u6237\u4F9D\u7136\u6709\u5F88\u5927\u53EF\u80FD\u662F\u4F1A\u4F2A\u9020\u8BF7\u6C42\u7684\u6076\u610F\u7528\u6237\u3002\u5F00\u542F\u6D88\u8017\u8D44\u6E90\u8F83\u591A\uFF0C\u6216\u8005\u53EF\u80FD\u4F1A\u4FEE\u6539\u6570\u636E\u5E93\u7684\u529F\u80FD\u65F6\u9700\u8C28\u614E\u3002</li><li>\u9AD8\u4FE1\u4EFB\u7528\u6237\uFF1A\u6307\u5F00\u53D1\u8005\u81EA\u5DF1\u7684 bot \u53F7\u6216\u8005\u5176\u4ED6\u53EF\u4EE5\u4FE1\u4EFB\u7684 bot \u53F7\u8FDE\u63A5\u3002</li></ul></li><li>\u8FDE\u63A5\u7684 bot \u9ED8\u8BA4\u7ED9\u4E88\u5F00\u53D1\u8005\u4E00\u5B9A\u6743\u9650\uFF08\u5982\u52A0\u597D\u53CB\u81EA\u52A8\u901A\u8FC7\uFF0C\u53EF\u914D\u7F6E\uFF09\u3002\u6CE8\u518C\u7528\u6237\u53EF\u4EE5\u8C03\u6574\u8BBE\u5B9A\uFF08\u8BE5 bot \u5BF9\u5E94\u7684\u7BA1\u7406\u5458\u8D26\u53F7\u3001\u662F\u5426\u81EA\u52A8\u901A\u8FC7\u597D\u53CB\u6216\u52A0\u7FA4\u8BF7\u6C42\u7B49\uFF09\u3002</li><li>\u63D0\u4F9B\u529F\u80FD\u5F00\u5173\uFF0C\u5141\u8BB8\u7BA1\u7406\u5458\u9488\u5BF9\u6BCF\u4E2A\u7FA4\u8C03\u6574\u529F\u80FD\u5F00\u5173\u3002</li><li>\u533F\u540D\u7528\u6237\u7684 QQ \u53F7\u662F\u9760\u7528\u6237\u4E3B\u52A8\u4E0A\u62A5\u83B7\u53D6\u7684\uFF0C\u53EF\u4FE1\u5EA6\u4F4E\uFF0C\u56E0\u6B64\u533F\u540D\u7528\u6237\u4E0D\u9650\u8FDE\u63A5\u6570\u3002\u6CE8\u518C\u7528\u6237\uFF08QQ \u53F7\u548C\u8BBE\u5B9A\u7684\u5BC6\u94A5\u5FC5\u987B\u5339\u914D\uFF09\u8FDE\u63A5\u6570\u53EF\u4EE5\u53D7\u5230\u9650\u5236\u3002</li></ul><h3 id="\u8BBE\u8BA1\u60F3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u60F3\u6CD5" aria-hidden="true">#</a> \u8BBE\u8BA1\u60F3\u6CD5</h3><p>\u8BBE\u8BA1\uFF1A</p><ul><li>\u6570\u636E\u5E93\u6709 bot \u8868\uFF0C\u5B58\u50A8\uFF1Abot \u8D26\u53F7\u3001\u5BF9\u5E94\u7684\u5BC6\u94A5\u3001\u4FE1\u4EFB\u7B49\u7EA7</li><li>\u6709\u914D\u7F6E\u8868\uFF0C\u5217\uFF1Abot \u8D26\u53F7\u3001\u914D\u7F6E\u9879\u540D\u79F0\u3001\u914D\u7F6E\u9879\u7684\u503C\uFF08\u8003\u8651JSON\uFF1F\uFF09</li><li>\u914D\u7F6E <ul><li>\u7BA1\u7406\u5458\u8D26\u53F7</li><li>\u6BCF\u4E2A\u529F\u80FD\u7684\u5F00\u5173</li><li>\u6BCF\u4E2A\u529F\u80FD\u7684\u914D\u7F6E</li><li>\u91CD\u8F7D\u662F\u5426\u5141\u8BB8\u5F00\u53D1\u8005\u52A0\u597D\u53CB</li><li>\u662F\u5426\u5141\u8BB8\u5BA3\u79F0\u662F\u8BE5\u8D26\u53F7\u7684\u533F\u540D\u8FDE\u63A5\uFF08\u5141\u8BB8\uFF09</li></ul></li><li>Host\uFF1A\u5F97\u6709\u4E2A\u603B Host\xB9\uFF0C\u4F46\u662F\u6BCF\u4E2A bot \u4F7F\u7528\u5355\u72EC\u7684 Host\xB2 \u5417\uFF1F <ul><li>\u5F53\u6709\u8FDE\u63A5\u5230 Host\xB9 \u7684\u8FDE\u63A5\uFF0C\u5C31\u4E3A\u5176\u521B\u5EFA\u4E00\u4E2A Host\xB2\uFF0C\u65AD\u5F00\u5373\u9500\u6BC1</li><li>\u5982\u679C\u662F\u5DF2\u6CE8\u518C\u7528\u6237\uFF0C\u5C31\u7F13\u5B58\u8BE5 Host\xB2 <ul><li>\u5305\u88C5\u4E00\u4E0B\u4E8B\u4EF6\u7C7B\u548C API \u7C7B</li><li>\u65AD\u5F00\u4E00\u6BB5\u65F6\u95F4\u540E\u624D\u9500\u6BC1</li><li>\u62D2\u7EDD\u540C\u65F6\u591A\u4E2A\u8FDE\u63A5</li><li>\u68C0\u6D4B\u5230\u91CD\u8FDE\u5C31\u4F7F\u7528\u540C\u4E00\u4E2A Host\xB2</li></ul></li><li>API\u7C7B\u548C\u4E8B\u4EF6\u76D1\u542C\u7C7B\u672C\u8EAB\u4E5F\u662F Service</li></ul></li><li>\u4E2D\u95F4\u4EF6\uFF1A <ul><li>\u5141\u8BB8\u6CE8\u518C\u4E2D\u95F4\u4EF6\uFF0C\u4E2D\u95F4\u4EF6\u751A\u81F3\u5141\u8BB8\u4FEE\u6539\u4E8B\u4EF6\u672C\u8EAB</li><li>\u4E8B\u4EF6\u5904\u7406\u672C\u8EAB\u4E5F\u662F\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u641C\u7D22\u5408\u9002\u7684\u5904\u7406\u5668\u5E76\u628A\u4E8B\u4EF6\u53D1\u7ED9\u5408\u9002\u7684\u4E8B\u4EF6\u5904\u7406\u5668\uFF08\u5E76\u53D1\u6267\u884C\uFF09</li><li>\u6709\u4E9B\u4E8B\u4EF6\u5904\u7406\u53EF\u80FD\u5E0C\u671B\u662F\u4E2D\u95F4\u4EF6\u6A21\u5F0F\uFF08\u5199\u5728\u4EFB\u610F\u5730\u65B9\u5374\u53EF\u80FD\u5E0C\u671B\u4FEE\u6539\u4E8B\u4EF6\u672C\u8EAB\uFF09 <ul><li>\u4F18\u5148\u7EA7\u95EE\u9898\u5982\u4F55\u89E3\u51B3</li></ul></li><li>\u89E6\u53D1\u547D\u4EE4\u5C31\u4E0D\u5904\u7406\u4E8B\u4EF6 <ul><li>\u547D\u4EE4\u4E2D\u95F4\u4EF6\u89E6\u53D1\u5C31\u4E0D\u5F80\u4E0B\u8D70</li><li>\u6839\u636E\u547D\u4EE4\u5904\u7406\u7ED3\u679C\u3002\u7528\u7279\u6027\uFF1A<code>[Condition&lt;CommandResultService&gt;(Property, Value)]</code></li></ul></li><li>\u5BF9 API \u8FDB\u884C\u5305\u88C5\uFF0C\u7528\u4EE5\u62E6\u622A\u8C03\u7528\u5E76\u4EA4\u7531\u4E2D\u95F4\u4EF6\u5904\u7406 <ul><li>\u5982\u4F55\u5B9E\u73B0\u5462\uFF1F</li><li>\u4E0E HTTP \u4E4B\u7C7B\u7684\u670D\u52A1\u4E0D\u540C\uFF0Cbot \u670D\u52A1\u53EF\u4EE5\u5305\u542B\u591A\u4E2A\u54CD\u5E94\uFF0C\u4E5F\u53EF\u80FD\u8C03\u7528\u5E73\u53F0\u7684\u5176\u4ED6 API\u3002</li></ul></li><li>\u529F\u80FD\u5F00\u5173\u4E5F\u7531\u4E2D\u95F4\u4EF6\u5904\u7406</li></ul></li><li>\u5355 Host\xB2 \u591A\u8D26\u53F7\uFF1A\u4F7F\u7528\u4E2D\u95F4\u4EF6\u5B9E\u73B0 <ul><li>\u63D0\u4F9B\u4E00\u4E2A scoped \u7684\u670D\u52A1\uFF0C\u7528\u4E8E\u628A\u6D88\u606F\u4FDD\u5B58\u6210\u5E73\u53F0\u65E0\u5173\u7684\u683C\u5F0F</li><li>\u6709\u4E2D\u95F4\u4EF6\u53EF\u4EE5\u8BFB\u53D6 onebot \u6216\u8005\u5176\u4ED6\u5E73\u53F0\u7684\u4E8B\u4EF6\uFF0C\u5C06\u5176\u5B58\u50A8\u5230\u8BE5\u670D\u52A1\u4E2D</li><li>\u547D\u4EE4\u4E4B\u7C7B\u7684\u4E5F\u662F\u7531\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u5904\u7406\uFF08\u628A\u5904\u7406\u7ED3\u679C\u4E5F\u4FDD\u5B58\u5230\u76F8\u5173\u7684\u670D\u52A1\u91CC\uFF09 <ul><li>\u6BD4\u5982\u63D0\u4F9B <code>Respond</code> \u65B9\u6CD5\uFF08\u540C\u6B65\u8FD8\u662F\u5F02\u6B65\u5462\uFF0C\u4E5F\u8BB8\u4F20\u5165 <code>onFailure</code> \u59D4\u6258\u66F4\u597D\uFF09</li></ul></li></ul></li><li>\u7528\u6237\u7EC4\uFF08\u975E\u9762\u5411\u5F00\u53D1\u8005\u7684\u51B3\u5B9A\u4FE1\u4EFB\u7B49\u7EA7\u7684\u7528\u6237\u7EC4\uFF0C\u4E3A\u9762\u5411\u7528\u6237\u7684\u65B9\u4FBF\u7BA1\u7406\u7684\u7528\u6237\u7EC4\uFF09 <ul><li>\u53EF\u80FD\u53EA\u6709\u90E8\u5206\u529F\u80FD\u7528\u5230\u7528\u6237\u7EC4\u529F\u80FD</li><li>\u4E5F\u8BB8\u53EF\u4EE5\u4F5C\u4E3A\u670D\u52A1\u4E4B\u4E00\u63D0\u4F9B</li><li>\u8868\uFF1A <ul><li>\u7528\u6237\u8868</li><li>\u7528\u6237\u7EC4\u8868\uFF08\u7EC4\u540D\uFF0C\u6743\u9650\u7B49\u7EA7\uFF08int\uFF09\uFF09</li><li>\u6743\u9650\u5217\u8868 <ul><li>\u62BD\u8C61\u6743\u9650\uFF08string\uFF09</li><li>\u529F\u80FD\u6743\u9650</li></ul></li><li>\u7528\u6237-\u7EC4\u8868</li><li>\u7528\u6237/\u7EC4-\u6743\u9650\u8868\uFF08\u6388\u4E88/\u62D2\u7EDD\uFF09</li></ul></li><li>\u9ED8\u8BA4\u90FD\u6709 Invoke\uFF08\u540D\u79F0\u5F85\u5B9A\uFF09\u4E4B\u7C7B\u7684\u6743\u9650\uFF0C\u88AB\u7981\u6B62\u5219\u65E0\u6CD5\u4F7F\u7528\u6240\u6709\u529F\u80FD</li><li>API\uFF1A\u8BA1\u5212\u7B80\u5355\u5730\u63D0\u4F9B\u589E\u5220\u6539\u67E5</li><li>Attributes\uFF1A <ul><li><code>[PermissionLevel(int)]</code> \u5FC5\u987B\u6709\u76F8\u5E94\u7B49\u7EA7</li><li><code>[Require(string)]</code> \u5FC5\u987B\u6709\u76F8\u5E94\u540D\u79F0\u7684\u6743\u9650\uFF08\u62BD\u8C61\u6743\u9650\uFF09</li><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5FC5\u987B\u6709\u5BF9\u5E94\u7684\u201C\u529F\u80FD\u6743\u9650\u201D\u624D\u53EF\u8C03\u7528/\u89E6\u53D1</li><li>\u8FD9\u4E9B\u90FD\u662F\u52A0\u5728\u201C\u547D\u4EE4\u201D\u4E0A\u7684\uFF0C\u7531\u547D\u4EE4\u4E2D\u95F4\u4EF6\u8C03\u7528\u7528\u6237\u7EC4\u76F8\u5173\u670D\u52A1\u5224\u65AD\u662F\u5426\u89E6\u53D1\u3002</li></ul></li></ul></li><li>\u65E5\u5FD7 <ul><li>\u5C31\u7528\u5185\u7F6E\u7684</li><li>\u6709 Warning \u4EE5\u4E0A\u7B49\u7EA7\u7684\u65E5\u5FD7\uFF0C\u901A\u8FC7\u5176\u4ED6\u9014\u5F84\u901A\u77E5\uFF1F\u4F46\u662F\u8FD9\u6837\u9700\u8981\u5F00\u53D1\u8005\u5904\u7406\uFF0C\u6BD5\u7ADF\u4EE3\u7801\u662F\u5F00\u53D1\u8005\u5199</li></ul></li><li>\u5355\u5143\u6D4B\u8BD5 <ul><li>\u5F85\u5B9A\uFF0C\u770B\u770B ASP.NET Core \u600E\u4E48\u505A\u7684</li></ul></li><li>\u6846\u67B6\u672C\u8EAB\u7684\u5355\u5143\u6D4B\u8BD5</li></ul>',7);function m(f,q){const t=p("ExternalLinkIcon");return o(),l(i,null,[r,a("p",null,[k,a("a",d,[h,c(t)]),b]),g],64)}var x=e(u,[["render",m],["__file","lantu.html.vue"]]);export{x as default};
