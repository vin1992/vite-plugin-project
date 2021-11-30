// 自动获取moudles
const files = import.meta.globEager('./*.js')
const modules = {}

Object.keys(files).forEach((key) => {
  if (key === './index.js' || !files[key].default) return

  modules[key.replace(/(\.\/|\.js)/g, '')] = files[key].default
})

export default modules
