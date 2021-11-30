const PROJECT_ID = '' //  蚂蚁统计的projectId, 留空则不添加蚂蚁统计

const template = `<script>
  !(function (w, d, s, n) {
    var f = d.getElementsByTagName(s)[0],
      k = d.createElement(s)
    k.async = true
    k.src = '//static.ws.126.net/163/frontend/antnest/' + n + '.js'
    f.parentNode.insertBefore(k, f)
  })(window, document, 'script', '$project:id$')
</script>`

let html = ''
if (PROJECT_ID && process.env.NODE_ENV === 'production') {
  html = template.replace('$project:id$', PROJECT_ID)
}

export default html
