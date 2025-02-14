import { defineConfig } from 'vitepress'
import shared from './shared'
import en from './en'
import jp from './jp'
import zh from './zh'
// import { zh } from './zh'
// import { pt } from './pt'
// import { ru } from './ru'
// import { es } from './es'
// import { ko } from './ko'
// import { fa } from './fa'
import Images from 'vite-plugin-vue-images'

const config = defineConfig({
    vite: {
        assetsInclude: ['**/*.jpg'],
        plugins: [Images()]
    },
    ...shared,
    locales: {
        root: { label: 'English', ...en, link: '/#/' },
        jp: { label: '日语', ...jp, link: '/jp/#/' },
        zh: { label: '简体中文', ...zh, link: '/zh/#/' }
    }
})
export default config
