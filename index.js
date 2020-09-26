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
  unmounted () {
    // Unregister onScroll event
    if (this.$options.onScroll) {
      window.removeEventListener('scroll', this.$options.onScroll)
    }
  }
}
const VueScrollHook = {
  install (app) {
    if (!app.version.startsWith('3')) {
      VueScrollHookMixin.destroyed = VueScrollHookMixin.unmounted
      delete VueScrollHookMixin.unmounted
    }
    app.mixin(VueScrollHookMixin)
  }
}
export default VueScrollHook
