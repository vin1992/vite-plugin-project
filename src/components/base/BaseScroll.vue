<script>
import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'
import ObserveDOM from '@better-scroll/observe-dom'
import ScrollBar from '@better-scroll/scroll-bar'

BScroll.use(MouseWheel)
BScroll.use(ObserveDOM)
BScroll.use(ScrollBar)
</script>

<script setup>
import { ref, provide, onMounted } from 'vue'

const el = ref(null)
const bscroll = ref(null)
const bscrollOptions = ref({
  bounceTime: 500,
  swipeBounceTime: 300,
  eventPassthrough: 'horizontal',
  click: true,
  mouseWheel: true,
  observeDOM: true,
  scrollbar: true,
})

provide('bscroll', bscroll)
provide('bscrollOptions', bscrollOptions)

onMounted(() => {
  bscroll.value = new BScroll(el.value, bscrollOptions.value)
})
</script>

<template>
  <div ref="el" class="base-scroll">
    <div class="s-content">
      <slot></slot>
    </div>
    <slot name="fixed"></slot>
  </div>
</template>

<style scoped>
.base-scroll {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.base-scroll:deep(.bscroll-vertical-scrollbar) {
  width: 3px !important;
}

.base-scroll:deep(.bscroll-indicator) {
  border: none !important;
  background: rgba(51, 51, 51, 0.5) !important;
}

.s-content {
  position: relative;
  min-height: 100%;
  overflow: hidden;
}
</style>
