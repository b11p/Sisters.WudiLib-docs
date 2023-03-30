import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Sisters.WudiLib',
    description: '.NET 平台 OneBot 通信框架',

    theme: defaultTheme({
        navbar: [
            { text: '主页', link: '/' },
            { text: '指南', children: ['/zhinan/kuaisushangshou.md', '/zhinan/jinjie-wudilib.md'] },
            {
                text: '通信方式',
                children: [
                    {
                        text: "概述",
                        link: '/tongxinfangshi/README.md',
                        activeMatch: "^/tongxinfangshi/$",
                    },
                    '/tongxinfangshi/http.md',
                    '/tongxinfangshi/zhengxiang-websocket.md',
                    '/tongxinfangshi/fanxiang-websocket.md',
                ]
            },
            {
                text: '扩展 WudiLib',
                children: [
                    {
                        text: "概述",
                        link: '/kuozhan/README.md',
                        activeMatch: "^/kuozhan/$",
                    },
                    '/kuozhan/API.md',
                    '/kuozhan/CQ-ma.md',
                    '/kuozhan/tongxinfangshi.md',
                    '/kuozhan/shijian.md',
                ]
            },
            { text: '未来', children: ['/luxiantu.md', '/lantu.md', '/gei-sdk-kaifazhedejianyi.md'] },
        ],
        sidebar:
        {
            "/tongxinfangshi/": [
                '/tongxinfangshi/',
                '/tongxinfangshi/http.md',
                '/tongxinfangshi/zhengxiang-websocket.md',
                '/tongxinfangshi/fanxiang-websocket.md',
            ],
            "/kuozhan/": [
                '/kuozhan/README.md',
                '/kuozhan/API.md',
                '/kuozhan/CQ-ma.md',
                '/kuozhan/tongxinfangshi.md',
                '/kuozhan/shijian.md',
            ]
        },
        repo: 'int-and-his-friends/Sisters.WudiLib',
        editLink: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: true,
        contributors: false,
        docsRepo: 'b11p/Sisters.WudiLib-docs',
        docsBranch: 'main',
        docsDir: 'docs',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
            '这里什么都没有。',
            '我们怎么到这儿来了？',
            '这是一个四〇四页面。',
            '我们好像进入了错误的链接。',
        ],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
    }),

    bundler: viteBundler(),

    plugins: [
    ],
})
