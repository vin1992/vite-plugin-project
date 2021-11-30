<script setup>
import { computed } from 'vue'
import { useStates, useActions } from '@/store/helper'

const { dialogConfig } = useStates('app')
const { closeDialog } = useActions('app')

const isShow = computed(() => dialogConfig.value.isShow)
const opacity = computed(() => dialogConfig.value.overlay?.opacity ?? 0.6)
const closeable = computed(() => dialogConfig.value.overlay?.closeable ?? true)

const onClick = () => {
  closeable.value && closeDialog()
}
</script>

<template>
  <div class="app-modal">
    <transition name="overlay">
      <div v-if="isShow" class="s-overlay" @touchmove.prevent @click="onClick"></div>
    </transition>
  </div>
</template>

<style scoped>
.app-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  max-width: 700px;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

.s-overlay {
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: v-bind(opacity);
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0 !important;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s;
  pointer-events: none;
}
</style>
