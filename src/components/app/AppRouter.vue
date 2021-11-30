<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const el = ref(null)
const position = ref(0)
const direction = ref('')
const startX = ref(0)
const startY = ref(0)
const distanceX = ref(0)
const distanceY = ref(0)
const leaveDone = ref(null)
const enterDone = ref(null)
const isTouchStart = ref(false)
const isTouchMove = ref(false)
const isTouchEnd = ref(false)
const isCancelled = ref(false)
const pageScrollTop = ref(0)
const pageWidth = ref(Math.min(window.innerWidth, 700))
const isForwardEnabled = ref(false) // 是否开启前进手势
const isBackwardEnabled = ref(true) // 是否开启后退手势

const init = () => {
  position.value = router.options.history.state.position
  router.beforeEach(() => {
    pageScrollTop.value = document.documentElement.scrollTop || document.body.scrollTop
  })
  router.afterEach(() => {
    const newPosition = router.options.history.state.position
    if (newPosition > position.value) {
      direction.value = 'forward'
    } else if (newPosition < position.value) {
      direction.value = 'backward'
    } else {
      direction.value = ''
    }
    position.value = newPosition
  })
  router.options.scrollBehavior = (to, from, savePosition) => {
    return savePosition ? savePosition : { top: 0 }
  }
}
const onTouchStart = (e) => {
  if (isTouchEnd.value) return

  isTouchStart.value = true
  startX.value = e.changedTouches[0].clientX
  startY.value = e.changedTouches[0].clientY

  // 屏蔽ios原生手势
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent)
  if (isIOS && (startX.value < 20 || startX.value > window.innerWidth - 20)) {
    e.preventDefault()
    e.stopPropagation()
  }
}
const onTouchMove = (e) => {
  if (!isTouchStart.value || isTouchEnd.value) return

  distanceX.value = e.changedTouches[0].clientX - startX.value
  distanceY.value = e.changedTouches[0].clientY - startY.value
  if (
    Math.abs(distanceX.value) < Math.abs(distanceY.value) ||
    (distanceX.value < 0 && !isForwardEnabled.value) ||
    (distanceX.value > 0 && !isBackwardEnabled.value) ||
    (distanceX.value > 0 && !isTouchMove.value && position.value === 0)
  ) {
    return
  }

  e.preventDefault()
  e.stopPropagation()

  if (!isTouchMove.value) {
    router.go(distanceX.value < 0 ? 1 : -1)
  }

  isTouchMove.value = true
  const leaveDom = el.value.children[0]
  const enterDom = el.value.children[1]
  if (leaveDom && enterDom) {
    leaveDom.style.transition = 'none'
    enterDom.style.transition = 'none'

    if (distanceX.value < 0) {
      leaveDom.style.transform = `translate3d(${-pageWidth.value / 2 + distanceX.value / 2}px, 0, 0)`
      enterDom.style.transform = `translate3d(${pageWidth.value + distanceX.value}px, 0, 0)`
    } else {
      leaveDom.style.transform = `translate3d(${-pageWidth.value / 2 + distanceX.value}px, 0, 0)`
      enterDom.style.transform = `translate3d(${-pageWidth.value / 2 + distanceX.value / 2}px, 0, 0)`
    }
  }
}
const onTouchEnd = (e) => {
  if (!isTouchStart.value || !isTouchMove.value || isTouchEnd.value) return

  e.preventDefault()
  e.stopPropagation()

  isTouchEnd.value = true
  if (Math.abs(distanceX.value) < pageWidth.value / 3) {
    router.go(distanceX.value < 0 ? -1 : 1)
    isCancelled.value = true
  }

  const leaveDom = el.value.children[0]
  const enterDom = el.value.children[1]
  if (leaveDom && enterDom) {
    leaveDom.style.transition = ''
    enterDom.style.transition = ''
    leaveDom.style.transform = ''
    enterDom.style.transform = ''
  }

  setTimeout(() => {
    leaveDone.value && leaveDone.value()
    enterDone.value && enterDone.value()
    reset()
  }, 400)
}
const onBeforeEnter = (el) => {
  if (isCancelled.value) {
    if (distanceX.value < 0) {
      el.style.transform = `translate3d(${distanceX.value / 2}px, 0, 0)`
    } else {
      el.style.transform = `translate3d(${distanceX.value}px, 0, 0)`
    }
    setTimeout(() => {
      el.style.transform = ''
      clear(el, 'leave')
    }, 50)
  }
}
const onBeforeLeave = (el) => {
  if (isCancelled.value) {
    if (distanceX.value < 0) {
      el.style.transform = `translate3d(${pageWidth.value / 2 + distanceX.value}px, 0, 0)`
    } else {
      el.style.transform = `translate3d(${-pageWidth.value + distanceX.value / 2}px, 0, 0)`
    }
    setTimeout(() => {
      el.style.transform = ''
      clear(el, 'enter')
    }, 50)
  }
}
const onEnter = (el, done) => {
  if (isTouchMove.value) {
    enterDone.value = done
  } else if (direction.value) {
    setTimeout(done, 400)
  } else {
    setTimeout(done, 20)
  }
  el.style.top = ''
}
const onLeave = (el, done) => {
  if (isTouchMove.value) {
    leaveDone.value = done
  } else if (direction.value) {
    setTimeout(done, 400)
  } else {
    setTimeout(done, 20)
  }
  el.style.top = `${-pageScrollTop.value}px`
}
const onAfterEnter = (el) => {
  clear(el)
}
const onAfterLeave = (el) => {
  clear(el)
}
const clear = (el, type = 'both') => {
  if (!el) return

  let reg
  switch (type) {
    case 'leave':
      reg = /(forward|backward)?-(leave)-(from|active|to)/g
      break
    case 'enter':
      reg = /(forward|backward)?-(enter)-(from|active|to)/g
      break
    case 'both':
      reg = /(forward|backward)?-(enter|leave)-(from|active|to)/g
      break
  }
  el.className = el.className.replace(reg, '')
}
const reset = () => {
  startX.value = 0
  startY.value = 0
  distanceX.value = 0
  distanceY.value = 0
  leaveDone.value = null
  enterDone.value = null
  isTouchStart.value = false
  isTouchMove.value = false
  isTouchEnd.value = false
  isCancelled.value = false
}

init()
</script>

<template>
  <div ref="el" class="app-router" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <router-view v-slot="{ Component }">
      <transition
        :css="!!direction"
        :name="direction"
        @beforeEnter="onBeforeEnter"
        @beforeLeave="onBeforeLeave"
        @enter="onEnter"
        @leave="onLeave"
        @afterEnter="onAfterEnter"
        @afterLeave="onAfterLeave"
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.app-router {
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 700px;
  margin: 0 auto;
  overflow: hidden;
}

/* forward */
.forward-leave-from {
  transform: translate3d(-50%, 0, 0);
}

.forward-leave-active {
  position: absolute !important;
  top: 0;
  left: 50%;
  z-index: 0;
  transition: transform 0.4s;
}

.forward-leave-to {
  transform: translate3d(-100%, 0, 0);
}

.forward-enter-from {
  transform: translate3d(100%, 0, 0);
}

.forward-enter-active {
  position: relative !important;
  z-index: 1;
  transition: transform 0.4s;
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.2);
}

.forward-enter-to {
  transform: translate3d(0%, 0, 0);
}

/* backward */
.backward-leave-from {
  transform: translate3d(-50%, 0, 0);
}

.backward-leave-active {
  position: absolute !important;
  top: 0;
  left: 50%;
  z-index: 1;
  transition: transform 0.4s;
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.2);
}

.backward-leave-to {
  transform: translate3d(50%, 0, 0);
}

.backward-enter-from {
  transform: translate3d(-50%, 0, 0);
}

.backward-enter-active {
  position: relative !important;
  z-index: 0;
  transition: transform 0.4s;
}

.backward-enter-to {
  transform: translate3d(0%, 0, 0);
}
</style>
