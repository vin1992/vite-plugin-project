const html = `<script>
  !(function () {
    if (window.top !== window) return

    var theme = ''
    function getTheme() {
      if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          theme = 'dark'
        }
      }

      var settings = {}
      var matches = navigator.userAgent.match(/NewsApp\\/[\\d.]+\\s\\((.+?)\\)/)
      if (matches) {
        var featuresString = matches[1]
        featuresString.replace(/([^:;\\s]+)(:([^;]*))?/g, function ($0, $1, $2, $3) {
          settings[$1] = $3 || ''
        })
        theme = settings.theme
      } else if (typeof window.__getStaticNativeSettings === 'function') {
        settings = window.__getStaticNativeSettings() || {}
        theme = settings.theme
      }
    }

    function setTheme() {
      var classList = document.documentElement.classList
      theme === 'dark' ? classList.add('theme-dark') : classList.remove('theme-dark')
      theme === 'night' ? classList.add('theme-night') : classList.remove('theme-night')
    }

    function listenTheme() {
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
          theme = e.matches ? 'dark' : ''
          setTheme()
        })
      }

      var handleMessage = function (msg) {
        if (msg.name === 'changeTheme') {
          theme = msg.params && msg.params.theme
          setTheme()
        }
      }
      if (window.handleMessageFromNative) {
        var fn = window.handleMessageFromNative
        window.handleMessageFromNative = function (msg) {
          try {
            fn()
          } finally {
            handleMessage(msg)
          }
        }
      } else {
        window.handleMessageFromNative = handleMessage
      }
    }

    getTheme()
    setTheme()
    listenTheme()
  })()
</script>
`

export default html
