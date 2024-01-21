<div style="text-align: center;" align="center">

# directives-lib

Collection of common directives that support vue2 and vue3

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![tree shaking][tree-shaking-image]][tree-shaking-url]
![typescript][typescript-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![gzip][gzip-image]][gzip-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

### **[Documentation](https://www.saqqdy.com/directives-lib)** • **[Change Log](./CHANGELOG.md)**

</div>

- [directivesLib](#directives-lib)
  - [Experience online](#experience-online)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Use in Vue >=3.0](#use-in-vue_3.0)
    - [Use in Vue 2.x](#use-in-vue_2.x)
  - [Using unpkg CDN](#using-unpkg-cdn)
  - [Support & Issues](#support--issues)
  - [License](#license)

## Experience online

Experience the directives-lib features online [Edit in CodeSandbox](https://codesandbox.io/p/sandbox/github/saqqdy/directives-lib/tree/master/examples)

## Installing

```bash
# use pnpm
$ pnpm install directives-lib

# use npm
$ npm install directives-lib --save
```

## Usage

### Use in Vue `>=3.0`

```vue
<!-- test.vue -->
<script setup>
import { createApp } from 'vue'
import directives from 'directives-lib'
import App from './App.vue'

const app = createApp(App)
app.use(directives)
app.mount('#app')
</script>
```

### Use in Vue `2.x`

```vue
<!-- test.vue -->
<script>
import Vue from 'vue'
import directives from 'directives-lib'
import App from './App.vue'

Vue.use(directives)

new Vue({
  render: h => h(App)
}).$mount('#app')
</script>
```

### Using unpkg CDN

```html
<script src="https://unpkg.com/directives-lib@1.0.0/dist/index.global.prod.js"></script>
```

## Support & Issues

Please open an issue [here](https://github.com/saqqdy/directives-lib/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/directives-lib.svg?style=flat-square
[npm-url]: https://npmjs.org/package/directives-lib
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/directives-lib/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/directives-lib&utm_campaign=Badge_Grade
[tree-shaking-image]: https://badgen.net/bundlephobia/tree-shaking/directives-lib
[tree-shaking-url]: https://bundlephobia.com/package/directives-lib
[typescript-url]: https://badgen.net/badge/icon/typescript?icon=typescript&label
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/directives-lib.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/directives-lib?branch=master
[download-image]: https://img.shields.io/npm/dm/directives-lib.svg?style=flat-square
[download-url]: https://npmjs.org/package/directives-lib
[gzip-image]: http://img.badgesize.io/https://unpkg.com/directives-lib/dist/index.global.prod.js?compression=gzip&label=gzip%20size:%20JS
[gzip-url]: http://img.badgesize.io/https://unpkg.com/directives-lib/dist/index.global.prod.js?compression=gzip&label=gzip%20size:%20JS
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_directives-lib
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_directives-lib
