import type { App } from 'vue-demi'
import loading from './main'

const install = function (app: App) {
	app.directive(loading.name, loading)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install
}
