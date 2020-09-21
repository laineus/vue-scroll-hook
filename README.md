# Vue Scroll Hook

[![Vue 2.x](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/v2/guide/)
[![Vue 3.x](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/v2/guide/)
[![npm](https://img.shields.io/npm/v/vue-scroll-hook.svg)](https://www.npmjs.com/package/vue-scroll-hook)

A Vue plugin that makes a hook named `onScroll` that can be registered an event on window scrolling.

## Installation

``` bash
npm install --save vue-scroll-hook
```

``` js
import { createApp } from 'vue'
import VueScrollHook from 'vue-scroll-hook'

const app = createApp(...)
app.use(VueScrollHook)
```

## Usage

```js
export default {
  data () {
    return {
    }
  },
  created () {
  },
  onScroll (e) {
    console.log(e)
    // Do something you want to on window scrolling
  }
}
```
