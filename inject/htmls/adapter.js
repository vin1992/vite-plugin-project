const MODE = 'px' // 页面适配模式, 可选值为px、rem和fixed

const template = {
  /*
   * px适配模式
   * 若屏幕宽度小于设计稿宽度值(标准像素), 则设定viewport的宽度为设计稿宽度值(标准像素)，并根据屏幕宽度和设计稿宽度值(标准像素)计算并设置viewport的缩放比例；
   * 若屏幕宽度大于等于设计稿宽度值(标准像素)，设定viewport的宽度为device-width，并将缩放比例固定设置为1
   * 实际开发在css中任何长度尺寸均使用px单位，大小设置为设计稿中原始尺寸值；
   */
  px: `<script>
    !(function () {
      var designWidth = 360 // 设计稿宽度值(标准像素)

      function updateViewport() {
        var metaEl = document.querySelector('meta[name="viewport"]')
        var screenWidth = window.screen.width
        var width, scale

        if (screenWidth < designWidth) {
          width = designWidth
          scale = screenWidth / width
        } else {
          width = 'device-width'
          scale = 1
        }

        metaEl.setAttribute(
          'content',
          'width=' + width + ',initial-scale=' + scale + ',user-scalable=no,viewport-fit=cover'
        )
      }

      var timer
      window.addEventListener('resize', function () {
        clearTimeout(timer)
        timer = setTimeout(updateViewport, 300)
      })
      updateViewport()
    })()
  </script>`,
  /*
   * rem适配模式
   * 设定viewport的宽度为device-width，并根据屏幕宽度和设计稿宽度值计算缩放比例，然后在html标签中设置font-size属性值；
   * 实际开发在css中任何长度尺寸均使用px单位，大小设置为设计稿中原始尺寸值；
   */
  rem: `<script>
    !(function () {
      var designWidth = 750 // 设计稿宽度
      var designHeight = 1206 // 设计稿高度
      var designRem = 100 // 设计rem对应px的比例
      var defaultRem = parseInt(window.getComputedStyle(document.documentElement).fontSize) // 浏览器默认rem对应px的比例
      var isScaleByHeight = false  // 是否基于屏幕高度进一步缩放rem值

      function updateRem() {
        var clientWidth = window.innerWidth
        var clientHeight = window.innerHeight
        var isLandscape = clientWidth > clientHeight
        if (/android/i.test(navigator.userAgent) && (window.orientation === 0 || window.orientation === 180)) {
          isLandscape = false
        }

        var scale
        if (isLandscape) {
          scale = (clientHeight * (designWidth / designHeight)) / designWidth
        } else {
          scale = clientWidth / designWidth

          if (clientHeight < designHeight * scale && isScaleByHeight) {
            scale = scale * (clientHeight / (designHeight * scale))
          }
        }

        document.documentElement.style.fontSize = ((scale * designRem) / defaultRem) * 100 + '%'
      }

      var timer
      window.addEventListener('resize', function () {
        clearTimeout(timer)
        timer = setTimeout(updateRem, 300)
      })
      updateRem()
    })()
  </script>`,
  /*
   * fixed适配模式
   * 设定viewport的宽度为设计稿宽度值，并根据屏幕宽度和设计稿宽度值计算并设置viewport的缩放比例；
   * 实际开发在css中任何长度尺寸均使用px单位，大小设置为设计稿中原始尺寸值；
   */
  fixed: `<script>
    !(function () {
      var designWidth = 750 // 设计稿宽度

      function updateViewport() {
        var metaEl = document.querySelector('meta[name="viewport"]')
        var screenWidth = window.screen.width
        var width, scale

        width = designWidth
        scale = screenWidth / width

        metaEl.setAttribute(
          'content',
          'width=' + width + ',initial-scale=' + scale + ',user-scalable=no,viewport-fit=cover'
        )
      }

      var timer
      window.addEventListener('resize', function () {
        clearTimeout(timer)
        timer = setTimeout(updateViewport, 300)
      })
      updateViewport()
    })()
  </script>`,
}

const html = template[MODE] || ''

export default html
