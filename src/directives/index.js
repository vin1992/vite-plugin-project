const directives = (app) => {
  // 注册全局指令
  const files = import.meta.globEager('./*.js')
  Object.keys(files).forEach((key) => {
    if (key === './index.js' || !files[key].default) return

    app.directive(key.replace(/(\.\/|\/|\.js)/g, ''), files[key].default)
  })
}

export default directives
