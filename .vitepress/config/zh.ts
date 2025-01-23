import { defineConfig } from 'vitepress'
import { getPosts } from '../theme/serverUtils'

//每页的文章数量
const pageSize = 10

export default defineConfig({
    lang: 'zh-Hans',
    head: [
        [
            'script',
            {
                async: '',
                crossorigin: 'anonymous',
                src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1817374283725610'
            }
        ],
        ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-GKSL94MCFY' }],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GKSL94MCFY');`
        ]
    ],
    sitemap: {
        hostname: 'https://blog.itistom.com'
    },
    title: 'Think in everything',
    base: '/',
    cacheDir: './node_modules/vitepress_cache',
    description: 'vitepress,blog,blog-theme',
    ignoreDeadLinks: true,
    themeConfig: {
        posts: await getPosts('zh/', pageSize),
        website: '/', //copyright link
        // 评论的仓库地址
        // comment: {
        //     repo: 'airene/vitepress-blog-pure',
        //     themes: 'github-light',
        //     issueTerm: 'pathname'
        // },
        nav: [
            { text: '主页', link: '/zh' },
            { text: '分类', link: '/zh/pages/category' },
            { text: '归档', link: '/zh/pages/archives' },
            { text: '标签', link: '/zh/pages/tags' }
            // { text: '关于', link: '/zh/pages/about' }
            // { text: 'Airene', link: 'http://airene.net' }  -- External link test
        ],
        search: {
            provider: 'local'
        },
        //outline:[2,3],
        outline: {
            label: '摘要'
        }
        // socialLinks: [{ icon: 'github', link: 'https://github.com/airene/vitepress-blog-pure' }]
    } as any,
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

    vite: {
        //build: { minify: false }
        server: { port: 5000 }
    }
    /*
      optimizeDeps: {
          keepNames: true
      }
      */
})
