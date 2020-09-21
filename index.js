const requestAnimationFrame = window.requestAnimationFrame || (fn => window.setTimeout(fn, 16))
const VueScrollHookMixin = {
  mounted () {
    // Register onScroll event
    if (!this.$options.onScroll) return
    requestAnimationFrame(() => { // Ignore scrolling on route change
      if (this._isDestroyed) return
      window.addEventListener('scroll', this.$options.onScroll)
    })
  },
  destroyed () {
    // Unregister onScroll event
    if (this.$options.onScroll) {
      window.removeEventListener('scroll', this.$options.onScroll)
    }
  }
}
const VueScrollHook = {
  install (app) {
    app.mixin(VueScrollHookMixin)
  }
}
export default VueScrollHook
