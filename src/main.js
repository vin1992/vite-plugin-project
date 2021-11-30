import { createApp } from 'vue'
import App from '@/App.vue'
import components from '@/components'
import directives from '@/directives'
import router from '@/router'
import store from '@/store'

// 创建实例
const app = createApp(App)
components(app)
directives(app)
app.use(router)
app.use(store)
app.mount('#app')

// 共享实例
window.app = app
