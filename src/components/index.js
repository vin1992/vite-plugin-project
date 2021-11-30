const components = (app) => {
  // 注册全局组件
  const files = import.meta.globEager('./**/*.vue')
  Object.keys(files).forEach((key) => {
    if (key === './index.js' || !files[key].default) return

    app.component(key.replace(/(.*\/)*([^.]+).*/gi, '$2'), files[key].default)
  })

  // 注册第三方全局组件
}

export default components
