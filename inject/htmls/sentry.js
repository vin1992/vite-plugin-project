const SENTRY_KEY = ''.replace('@music-sentry.hz.netease.com', '@sentry.music.163.com') // sentry错误监控配置的key, 留空则不添加sentry

const template = `<script src="https://static.ws.126.net/163/frontend/libs/raven-netease-1.0.0.min.js" crossorigin="anonymous"></script>
<script>
  window.Raven.config('$sentry:key$', {
    ignoreErrors: [],
  }).install()

  window.addEventListener('DOMContentLoaded', function () {
    if (window.app && window.app.config) {
      //覆盖errorHandler方法重新抛出错误让sentry捕获
      window.app.config.errorHandler = function (e) {
        setTimeout(function () {
          throw e
        })
      }
    }
  })
</script>`

let html = ''
if (SENTRY_KEY && process.env.NODE_ENV === 'production') {
  html = template.replace('$sentry:key$', SENTRY_KEY)
}

export default html
