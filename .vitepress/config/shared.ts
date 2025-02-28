import { defineConfig } from 'vitepress'
import { getPosts } from '../theme/serverUtils'

//每页的文章数量
const pageSize = 10

export default defineConfig({
    head: [
        [
            'script',
            {
                async: '',
                crossorigin: 'anonymous',
                src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1817374283725610'
            }
        ],
        [
            'script',
            {
                'custom-element': 'amp-auto-ads',
                async: '',
                crossorigin: 'anonymous',
                src: 'https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js'
            }
        ],
        ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-DQ97SX8SFG' }],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DQ97SX8SFG');`
        ]
    ],
    // rewrites: {
    //     'en/:page*': ':page*'
    // },

    lastUpdated: true,
    // cleanUrls: true,
    metaChunk: true,
    sitemap: {
        hostname: 'https://itisos.com',
        lastmodDateOnly: false
    },
    title: 'Think in everything',
    cacheDir: './node_modules/vitepress_cache',
    description: 'Think in everything',
    ignoreDeadLinks: true,
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
