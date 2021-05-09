import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: 'Sisters.WudiLib',
    description: '.NET 平台 OneBot 通信框架',

    themeConfig: {
        navbar: [
            { text: '主页', link: '/' },
            { text: '扩展 WudiLib', children: ['/kuozhan/README.md', '/kuozhan/API.md', '/kuozhan/CQ-ma.md'] },
            { text: '未来', children: ['/luxiantu.md', '/lantu.md', '/gei-sdk-kaifazhedejianyi.md'] },
        ],
        repo: 'int-and-his-friends/Sisters.WudiLib',
        editLink: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: false,
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
    },
})
