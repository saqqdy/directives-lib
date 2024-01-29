import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

app.directive('focus', {
	// 在绑定元素的 attribute 前
	// 或事件监听器应用前调用
	created(el, binding, vnode, prevVnode) {
		// 下面会介绍各个参数的细节
	},
	// 在元素被插入到 DOM 前调用
	beforeMount(el, binding, vnode, prevVnode) {},
	// 在绑定元素的父组件
	// 及他自己的所有子节点都挂载完成后调用
	mounted(el, binding, vnode, prevVnode) {
		el.focus()
	},
	// 绑定元素的父组件更新前调用
	beforeUpdate(el, binding, vnode, prevVnode) {},
	// 在绑定元素的父组件
	// 及他自己的所有子节点都更新后调用
	updated(el, binding, vnode, prevVnode) {},
	// 绑定元素的父组件卸载前调用
	beforeUnmount(el, binding, vnode, prevVnode) {},
	// 绑定元素的父组件卸载后调用
	unmounted(el, binding, vnode, prevVnode) {}
})

app.mount('#app')
