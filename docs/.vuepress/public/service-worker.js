if (!self.define) {
    let s, e = {}; const l = (l, i) => (l = new URL(l + ".js", i).href, e[l] || new Promise((e => { if ("document" in self) { const s = document.createElement("script"); s.src = l, s.onload = e, document.head.appendChild(s) } else s = l, importScripts(l), e() })).then((() => { let s = e[l]; if (!s) throw new Error(`Module ${l} didn’t register its module`); return s }))); self.define = (i, n) => { const a = s || ("document" in self ? document.currentScript.src : "") || location.href; if (e[a]) return; let t = {}; const u = s => l(s, a), r = { module: { uri: a }, exports: t, require: u }; e[a] = Promise.all(i.map((s => r[s] || u(s)))).then((s => (n(...s), t))) }
}
define(["./workbox-7d6a3f4d"], (function (s) {
    "use strict";
    self.registration.unregister().then(function () {
        return self.clients.matchAll();
    }).then(function (clients) {
        clients.forEach(client => client.navigate(client.url));
    });
}));


// ojbk