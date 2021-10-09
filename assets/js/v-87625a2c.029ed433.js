"use strict";(self.webpackChunksisters_wudilib_docs=self.webpackChunksisters_wudilib_docs||[]).push([[226],{1976:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-87625a2c",path:"/tongxinfangshi/fanxiang-websocket.html",title:"反向 WebSocket",lang:"zh-CN",frontmatter:{title:"反向 WebSocket",lang:"zh-CN"},excerpt:"",headers:[{level:2,title:"快速上手",slug:"快速上手",children:[]},{level:2,title:"进阶反向 WebSocket",slug:"进阶反向-websocket",children:[]},{level:2,title:"鉴权认证",slug:"鉴权认证",children:[]},{level:2,title:"高级鉴权及配置",slug:"高级鉴权及配置",children:[]}],filePathRelative:"tongxinfangshi/fanxiang-websocket.md"}},8806:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="反向-websocket" tabindex="-1"><a class="header-anchor" href="#反向-websocket" aria-hidden="true">#</a> 反向 WebSocket</h1><p>反向 WebSocket 是实现和使用最复杂的一种方式。考虑到反向 WebSocket 的潜在使用场景，WudiLib 会在建立连接后再配置 Listener。</p><p>目前 WudiLib 只支持“Universe”连接类型，也就是 API 和事件都用一个连接。</p><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2><p>要使用反向 WebSocket，请引入 Sisters.WudiLib.WebSocket 包不低于 <strong>0.2.0-beta3</strong> 的版本。然后在 <code>Main</code> 方法中编写以下代码：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Sisters<span class="token punctuation">.</span>WudiLib<span class="token punctuation">.</span>WebSocket<span class="token punctuation">.</span>Reverse</span><span class="token punctuation">;</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> reverseWSServer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ReverseWebSocketServer</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:9191&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nreverseWSServer<span class="token punctuation">.</span><span class="token function">SetListenerAuthenticationAndConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">(</span>listener<span class="token punctuation">,</span> selfId<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    listener<span class="token punctuation">.</span>MessageEvent <span class="token operator">+=</span> <span class="token punctuation">(</span>api<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Content<span class="token punctuation">.</span>Text<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nreverseWSServer<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>编写好之后运行程序，然后用 OneBot 服务（如 go-cqhttp）反向 WS 连接到 localhost:9191，之后可以看到，当 bot 每收到一条消息，就会把文本部分打印到控制台上。</p><h2 id="进阶反向-websocket" tabindex="-1"><a class="header-anchor" href="#进阶反向-websocket" aria-hidden="true">#</a> 进阶反向 WebSocket</h2><p>传入 <code>SetListenerAuthenticationAndConfiguration</code> 方法的委托会在有连接来临时调用，每次调用都会构造新的 Listener 和 API 客户端，一旦连接断开，则不能再使用。</p><p>当你需要外部使用构造的 Listener 或 API 客户端时，可以在委托里传给外界。例如：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> reverseWSServer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ReverseWebSocketServer</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:9191&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">HttpApiClient</span> onebotApi <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\nreverseWSServer<span class="token punctuation">.</span><span class="token function">SetListenerAuthenticationAndConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">(</span>listener<span class="token punctuation">,</span> selfId<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    onebotApi <span class="token operator">=</span> listener<span class="token punctuation">.</span>ApiClient<span class="token punctuation">;</span> <span class="token comment">// 当建立反向 WebSocket 连接时，把 API 客户端赋值到外面。</span>\n    listener<span class="token punctuation">.</span>SocketDisconnected <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> onebotApi <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 连接断开时已无法使用，把 API 客户端设为 null。</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nreverseWSServer<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// 每 1 分钟尝试发送一次群组消息。</span>\n    <span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span><span class="token number">60000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> api <span class="token operator">=</span> onebotApi<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>api <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">try</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">await</span> onebotApi<span class="token punctuation">.</span><span class="token function">SendGroupMessageAsync</span><span class="token punctuation">(</span><span class="token number">1234567</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token comment">// 记录日志等。</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>上面的示例假定同时只有一个反向 WebSocket 连接，如果建立了多个连接则会出问题。WudiLib 支持同时建立多个反向 WebSocket 连接，将在文档后半讲述用法。</p></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>配置时可以查看 <code>selfId</code>，并根据 <code>selfId</code> 进行不同的配置（例如注册不同的事件处理器）。</p></div><h2 id="鉴权认证" tabindex="-1"><a class="header-anchor" href="#鉴权认证" aria-hidden="true">#</a> 鉴权认证</h2><p>WudiLib 支持对反向 WebSocket 连接进行认证，并内置了通过 Access Token 和/或 Self ID（即机器人 QQ 号）进行认证。</p><p>要进行鉴权认证，只需要在配置方法中添加 Access Token 和 Self ID 两个参数即可。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> reverseWSServer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ReverseWebSocketServer</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:9191&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nreverseWSServer<span class="token punctuation">.</span><span class="token function">SetListenerAuthenticationAndConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">(</span>listener<span class="token punctuation">,</span> selfId<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// Configuration code.</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;your-access-token&quot;</span><span class="token punctuation">,</span> <span class="token number">123456789</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nreverseWSServer<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>当按此鉴权时，只接受 QQ 为 123456789，并且 Access Token 配置为“your-access-token”的机器人连接。其中两个参数可以分别设置为 <code>null</code>，表示跳过这一项，例如只验证 QQ 号或者 Access Token。</p><h2 id="高级鉴权及配置" tabindex="-1"><a class="header-anchor" href="#高级鉴权及配置" aria-hidden="true">#</a> 高级鉴权及配置</h2><p>WudiLib 的强大之处在于，你可以自定义鉴权过程，并且根据不同的鉴权结果进行不同的配置。例如：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Net</span><span class="token punctuation">;</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> reverseWSServer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ReverseWebSocketServer</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:9191&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">HttpApiClient</span> onebotApi <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\nreverseWSServer<span class="token punctuation">.</span><span class="token function">SetListenerAuthenticationAndConfiguration</span><span class="token punctuation">(</span><span class="token keyword">async</span> request <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">IPAddress<span class="token punctuation">[</span><span class="token punctuation">]</span></span> allowedIPAddress <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">GetAllowedIPAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>allowedIPAddress<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>RemoteEndPoint<span class="token punctuation">.</span>Address<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// allow</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>listener<span class="token punctuation">,</span> selfId<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n        <span class="token punctuation">{</span>\n            <span class="token comment">// Configuration code.</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">else</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// deny</span>\n        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token comment">// Or you can return another configuration.</span>\n        <span class="token comment">//return (listener, selfId) =&gt;</span>\n        <span class="token comment">//{</span>\n        <span class="token comment">//    // Configure for only basic functions.</span>\n        <span class="token comment">//};</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nreverseWSServer<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>运行这段代码，WudiLib 会在收到连接时执行验证。如果连接的 IP 在允许列表中，就允许连接并进行配置；否则就拒绝连接（也可以进行另一种配置）。高级鉴权可以和简单鉴权结合使用，此时 WudiLib 会先验证 Access Token 和 Self ID 是否吻合，然后再执行自定义的认证和配置。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>进行自定义鉴证应传入一个异步委托，这是为了便于从数据库等地方读取认证信息。</p></div>',23),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);