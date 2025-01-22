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

const config = defineConfig({
    ...shared,
    locales: {
        root: { label: 'English', ...en },
        jp: { label: '日语', ...jp },
        zh: { label: '简体中文', ...zh }
    }
})
export default config
