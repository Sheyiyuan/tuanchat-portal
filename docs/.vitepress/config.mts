import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "团剧共创发布页",
  description: "共创者的社区",
  themeConfig: {
    logo: "/favicon.ico",
    i18nRouting: false,
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: '首页', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
