const requestAnimationFrame = window.requestAnimationFrame || (fn => window.setTimeout(fn, 16))
export default VueScrollHook = {
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
