import{_ as n,e as s}from"./app.4da2a9fc.js";const a={},e=s(`<h1 id="\u6269\u5C55-wudilib-\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55-wudilib-\u4E8B\u4EF6" aria-hidden="true">#</a> \u6269\u5C55 WudiLib \u4E8B\u4EF6</h1><p>\u82E5\u8981\u6269\u5C55 WudiLib \u4E8B\u4EF6\u5217\u8868\uFF0C\u9700\u8981\u5B9A\u4E49\u6570\u636E\u7C7B\u578B\uFF0C\u7EE7\u627F <code>ApiPostListener</code> \u7C7B\uFF08\u6216\u8005\u5B50\u7C7B\uFF09\uFF0C\u91CD\u5199 <code>Response ProcessPost(JObject contentObject)</code> \u65B9\u6CD5\u3002</p><h2 id="\u5B9A\u4E49\u4E8B\u4EF6\u7684\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u4E8B\u4EF6\u7684\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u5B9A\u4E49\u4E8B\u4EF6\u7684\u6570\u636E\u7C7B\u578B</h2><p>\u9996\u5148\u9700\u8981\u5B9A\u4E49\u6570\u636E\u7C7B\u578B\uFF0C\u6839\u636E\u4E8B\u4EF6\u7C7B\u578B\u4E0D\u540C\uFF0C\u7EE7\u627F\u4E0D\u540C\u7684\u7C7B\u5E76\u6DFB\u52A0\u7F3A\u5931\u5B57\u6BB5\u3002\u540C\u65F6\u9700\u8981 <code>override Endpoint</code> \u4EE5\u786E\u4FDD\u76F8\u5173\u54CD\u5E94\u53EF\u4EE5\u53D1\u9001\u5230\u6B63\u786E\u7684\u7FA4\u6216\u597D\u53CB\u3002\u4EE5\u597D\u53CB\u6D88\u606F\u64A4\u56DE\u4E3A\u4F8B\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">sealed</span> <span class="token keyword">class</span> <span class="token class-name">FriendRecallNotice</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Notice</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">Endpoint</span> Endpoint <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">PrivateEndpoint</span><span class="token punctuation">(</span>UserId<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5FC5\u987B override</span>

    <span class="token punctuation">[</span><span class="token function">JsonProperty</span><span class="token punctuation">(</span><span class="token string">&quot;message_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">long</span></span> MessageId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>Post</code> \u7C7B\u4E2D\u5DF2\u7ECF\u5B9A\u4E49\u4E86 <code>time</code> \u7B49\u5B57\u6BB5\uFF0C<code>Notice</code> \u7C7B\u5B9A\u4E49\u4E86 <code>notice_type</code>\uFF0C\u6240\u4EE5\u65E0\u9700\u5728\u6B64\u91CD\u590D\u5B9A\u4E49\u3002</p></div><h2 id="\u6DFB\u52A0\u4E8B\u4EF6\u5904\u7406\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4E8B\u4EF6\u5904\u7406\u8DEF\u7531" aria-hidden="true">#</a> \u6DFB\u52A0\u4E8B\u4EF6\u5904\u7406\u8DEF\u7531</h2><p>\u6839\u636E\u901A\u4FE1\u65B9\u5F0F\u7684\u4E0D\u540C\uFF0C\u9700\u8981\u7EE7\u627F\u4E0D\u540C\u7684\u7C7B\u5E76\u91CD\u5199\u76F8\u5173\u65B9\u6CD5\u3002\u5982\u679C\u662F HTTP POST \u65B9\u5F0F\uFF0C\u9700\u8981\u7EE7\u627F <code>ApiPostListener</code>\uFF1B\u6B63\u5411 WebSocket \u5219\u9700\u8981\u7EE7\u627F <code>CqHttpWebSocketEvent</code>\u3002</p><p>\u53EF\u4EE5\u91CD\u5199\u7684\u65B9\u6CD5\u5305\u62EC <code>Response ProcessPost(JObject contentObject)</code>\u3001<code>void ProcessMessage(JObject contentObject)</code>\u3001<code>virtual void ProcessNotice(JObject contentObject)</code> \u7B49\uFF0C\u8BF7\u6839\u636E\u6269\u5C55\u4E8B\u4EF6\u7C7B\u578B\u91CD\u5199\u5BF9\u5E94\u65B9\u6CD5\u3002\u5982\u679C\u5339\u914D\u4E8B\u4EF6\u7C7B\u578B\uFF0C\u5219\u8C03\u7528\u76F8\u5173\u4E1A\u52A1\u903B\u8F91\uFF0C\u5E76<strong>\u5728\u672A\u5339\u914D\u65F6\u8C03\u7528\u57FA\u7C7B\u7684\u540C\u540D\u65B9\u6CD5</strong>\u3002\u4F8B\u5982\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExtendedApiPostListener</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ApiPostListener</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">ExtendedApiPostListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> <span class="token comment">// \u6DFB\u52A0\u6784\u9020\u65B9\u6CD5</span>
    <span class="token keyword">public</span> <span class="token function">ExtendedApiPostListener</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> address<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> <span class="token comment">// \u6DFB\u52A0\u6784\u9020\u65B9\u6CD5</span>
    <span class="token keyword">public</span> <span class="token function">ExtendedApiPostListener</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> port<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> <span class="token comment">// \u6DFB\u52A0\u6784\u9020\u65B9\u6CD5</span>

    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ProcessNotice</span><span class="token punctuation">(</span><span class="token class-name">JObject</span> contentObject<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>contentObject<span class="token punctuation">[</span><span class="token string">&quot;notice_type&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ToObject</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;friend_recall&quot;</span><span class="token punctuation">:</span>
                <span class="token function">ProcessFriendRecallNotice</span><span class="token punctuation">(</span>contentObject<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ToObject</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FriendRecallNotice<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">ProcessNotice</span><span class="token punctuation">(</span>contentObject<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5FC5\u987B\u8C03\u7528\u57FA\u7C7B\u7684\u65B9\u6CD5</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,10);function p(t,c){return e}var l=n(a,[["render",p],["__file","shijian.html.vue"]]);export{l as default};
