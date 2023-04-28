import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import './style.less'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import { createPinia } from 'pinia'
import Editor from '@tinymce/tinymce-vue'
import icon from '@/components/icon.vue'
const app = createApp(App)
const pinia = createPinia()
// 注册element-plus icon
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
//   }

  
/**
 * 在引入 ElementPlus 时，可以传入一个包含 size 和 zIndex 属性的全局配置对象。 
 * size 用于设置表单组件的默认尺寸
 * zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000。
 */
app.use(ElementPlus
    // size: 'small',
    // zIndex: 3000
)
app.component('icon', icon)

app.use(router)
app.component('Editor', Editor)
app.use(VXETable)
app.use(pinia)
app.mount('#app')

