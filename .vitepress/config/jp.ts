import { defineConfig } from 'vitepress'
import { getPosts } from '../theme/serverUtils'

//每页的文章数量
const pageSize = 10

export default defineConfig({
    lang: 'ja',
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
    title: 'Think in everything',
    base: '/',
    cacheDir: './node_modules/vitepress_cache',
    description: 'vitepress,blog,blog-theme',
    ignoreDeadLinks: true,
    themeConfig: {
        posts: await getPosts('jp', pageSize),
        // 评论的仓库地址
        nav: [
            { text: 'Hōmu', link: '/jp' },
            { text: 'Kategorī', link: '/jp/pages/category' },
            { text: 'Ākaibu', link: '/jp/pages/archives' },
            { text: 'Tagu', link: '/jp/pages/tags' },
            { text: 'Abauto', link: '/jp/pages/about' }
            // { text: 'Airene', link: 'http://airene.net' }  -- External link test
        ],
        search: {
            provider: 'local'
        },
        //outline:[2,3],
        outline: {
            label: 'Summary'
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
