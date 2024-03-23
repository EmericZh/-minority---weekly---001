import { defineConfig } from 'vitepress'
import { chineseSearchOptimize,pagefindPlugin } from "vitepress-plugin-pagefind";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 语言
  lang: 'zh-cn',
  // 网站标题
  title: "村雨遥的好物周刊",
  // 网站描述
  description: "村雨遥的好物周刊，记录每周看到的有价值的信息，主要针对计算机领域，每周五发布。主要包含项目、资料、插件、网站、软件方面的内容。",
  // 仓库名
  base: "/weekly/",
  // 源目录
  srcDir: "src",
  // head
  head: [
    ['link', { rel: 'icon', href: 'logo.png' }]
  ],
  // 公式
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },

  // 搜索
  vite: {
    plugins: [pagefindPlugin({
      customSearchQuery: chineseSearchOptimize
    })],
  },

  themeConfig: {
    logo: 'logo.png',

    // 大纲标题级别
    outline: {
      level: [2, 3]
    },

    // 本地搜索
    // search: {
    //   // provider: 'local',
    //   // options: {
    //   //   miniSearch: {
    //   //     /**
    //   //      * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
    //   //      */
    //   //     options: {
    //   //       /* ... */
    //   //     },
    //   //     /**
    //   //      * @type {import('minisearch').SearchOptions}
    //   //      * @default
    //   //      * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
    //   //      */
    //   //     searchOptions: {
    //   //       /* ... */
    //   //     }
    //   //   }
    //   // }

    //   provider: 'algolia',
    //   options: {
    //     appId: 'OJO63PZUXX',
    //     apiKey: '51d1b131546da9a32d736aacb82e5933',
    //     indexName: 'weekly',
    //     "placeholder": "请输入关键词",
    //     "buttonText": "搜索"
    //   }
    // },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/cunyu1943/weekly/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 上次更新
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // 页脚
    footer: {
      message: 'Released under the Apache License.',
      copyright: 'Copyright © 村雨遥'
    },

    // 导航栏
    nav: [
      { text: ' 主页', link: '/' },
      { text: ' 2024 年刊', link: '/2024/' },
      { text: '2023 年刊', link: '/2023/' }
    ],

    // 侧边栏
    sidebar: {
      '/2023/': [
        {
          text: '2023 年刊',
          items: [
            { text: '第 37 期', link: '/2023/1223-1229' },
            { text: '第 36 期', link: '/2023/1216-1222' },
            { text: '第 35 期', link: '/2023/1209-1215' },
            { text: '第 34 期', link: '/2023/1202-1208' },
            { text: '第 33 期', link: '/2023/1125-1201' },
            { text: '第 32 期', link: '/2023/1118-1124' },
            { text: '第 31 期', link: '/2023/1111-1117' },
            { text: '第 30 期', link: '/2023/1104-1110' },
            { text: '第 29 期', link: '/2023/1028-1103' },
            { text: '第 28 期', link: '/2023/1021-1027' },
            { text: '第 27 期', link: '/2023/1014-1020' },
            { text: '第 26 期', link: '/2023/1007-1013' },
            { text: '第 25 期', link: '/2023/0930-1006' },
            { text: '第 24 期', link: '/2023/0923-0929' },
            { text: '第 23 期', link: '/2023/0916-0922' },
            { text: '第 22 期', link: '/2023/0909-0915' },
            { text: '第 21 期', link: '/2023/0902-0908' },
            { text: '第 20 期', link: '/2023/0826-0901' },
            { text: '第 19 期', link: '/2023/0819-0825' },
            { text: '第 18 期', link: '/2023/0812-0818' },
            { text: '第 17 期', link: '/2023/0805-0811' },
            { text: '第 16 期', link: '/2023/0729-0804' },
            { text: '第 15 期', link: '/2023/0722-0728' },
            { text: '第 14 期', link: '/2023/0715-0721' },
            { text: '第 13 期', link: '/2023/0708-0714' },
            { text: '第 12 期', link: '/2023/0701-0707' },
            { text: '第 11 期', link: '/2023/0624-0630' },
            { text: '第 10 期', link: '/2023/0617-0623' },
            { text: '第 9 期', link: '/2023/0610-0616' },
            { text: '第 8 期', link: '/2023/0603-0609' },
            { text: '第 7 期', link: '/2023/0527-0602' },
            { text: '第 6 期', link: '/2023/0520-0526' },
            { text: '第 5 期', link: '/2023/0513-0519' },
            { text: '第 4 期', link: '/2023/0506-0512' },
            { text: '第 3 期', link: '/2023/0429-0505' },
            { text: '第 2 期', link: '/2023/0422-0428' },
            { text: '第 1 期', link: '/2023/0415-0421' }
          ]
        }
      ],
      '/2024/': [
        {
          text: '2024 年刊',
          items: [
            { text: '第 49 期', link: '/2024/0316-0322' },
            { text: '第 48 期', link: '/2024/0309-0315' },
            { text: '第 47 期', link: '/2024/0302-0308' },
            { text: '第 46 期', link: '/2024/0224-0301' },
            { text: '第 45 期', link: '/2024/0217-0223' },
            { text: '第 44 期', link: '/2024/0210-0216' },
            { text: '第 43 期', link: '/2024/0203-0209' },
            { text: '第 42 期', link: '/2024/0127-0202' },
            { text: '第 41 期', link: '/2024/0120-0126' },
            { text: '第 40 期', link: '/2024/0113-0119' },
            { text: '第 39 期', link: '/2024/0106-0112' },
            { text: '第 38 期', link: '/2024/0101-0105' }
          ]
        }
      ],
    },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cunyu1943' }
    ]
  }
})
