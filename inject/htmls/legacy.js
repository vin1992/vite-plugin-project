// 不支持Proxy的低版本系统提示
const html = `<script>
  !(function () {
    if (!window.Proxy) {
      document.write('<style>.update-notice{position:fixed;top:0;right:0;bottom:0;left:0;z-index:100000;display:-webkit-flex;display:flex;justify-content:center;-webkit-justify-content:center;-webkit-box-pack:center;align-items:center;-webkit-align-items:center;-webkit-box-align:center;background:#fff;font-size:16px;color:#666;text-align:center}</style><div class="update-notice">系统版本过低<br>请升级您的版本</div>')
    }
  })()
</script>
`

export default html
