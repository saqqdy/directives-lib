<template>
	<div>
		<button type="button" @click="doRequestUnique">Do Request (cancel similar request)</button>
		<input v-focus />
		<div v-expandClick="(10, 10, 10, 10)" class="loading" @click="handleClick">
			<el-icon :size="20"><Loading /></el-icon>
		</div>
		<el-button type="primary">Primary</el-button>
	</div>
</template>

<!-- 
<script setup>
import { ref } from 'vue'
import { waiting } from 'js-cool'
// import directives from 'directives-lib'

const vFocus = {
  mounted: (el) => el.focus()
}

defineExpose({
	//
})<el-icon><Loading /></el-icon>
</script>
 -->
<script>
export default {
	directives: {
		expandClick: {
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
				const s = document.styleSheets[document.styleSheets.length - 1]
				const DEFAULT = -10 // 默认向外扩展10px
				const [top, right, bottom, left] =
					(binding.expression && binding.expression.split(',')) || []
				const ruleStr = `content:"";position:absolute;top:-${top || DEFAULT}px;bottom:-${bottom || DEFAULT}px;right:-${right || DEFAULT}px;left:-${left || DEFAULT}px;`
				const classNameList = el.className.split(' ')
				el.className = classNameList.includes('expand_click_range')
					? classNameList.join(' ')
					: [...classNameList, 'expand_click_range'].join(' ')
				el.style.position = el.style.position || 'relative'
				if (s.insertRule) {
					s.insertRule(
						'.expand_click_range::before' + '{' + ruleStr + '}',
						s.cssRules.length
					)
				} else {
					/* IE */
					s.addRule('.expand_click_range::before', ruleStr, -1)
				}
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
		}
	},
	setup() {
		const handleClick = () => {
			console.log(11)
		}

		return {
			handleClick
		}
	},
}
</script>
<style lang="less">
body {
	background: #666;
}
.loading {
	width: 500px;
	height: 300px;
	border: 1px solid #ddd;
}
</style>
