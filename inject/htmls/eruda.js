// 移动端页面console工具,需要调试时在url的添加参数eruda=true
const html = `<script>
  !(function () {
    var src = '//static.ws.126.net/163/frontend/libs/eruda.js'
    if (!/eruda=true/.test(window.location)) return
    document.write('<scr' + 'ipt src="' + src + '" crossorigin="anonymous"></scr' + 'ipt>');
    document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
  })()
</script>
`

export default html
