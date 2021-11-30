<script setup>
import { computed } from 'vue'
import { useStates } from '@/store/helper'

const { toastConfig } = useStates('app')

const isShow = computed(() => toastConfig.value.isShow)
const content = computed(() => toastConfig.value.content)
</script>

<template>
  <transition name="app-toast">
    <div v-if="isShow" class="app-toast">{{ content }}</div>
  </transition>
</template>

<style scoped>
.app-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  max-width: 80%;
  padding: 15px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  white-space: pre-wrap;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.75);
  transform: translate(-50%, -75%);
  animation: toast 0.3s both;
}

@media screen and (min-width: 1024px) {
  .app-toast {
    max-width: 600px;
  }
}

.app-toast-enter-from,
.app-toast-leave-to {
  opacity: 0;
}

.app-toast-enter-active,
.app-toast-leave-active {
  transition-duration: 0.3s;
}

.app-toast-enter-to,
.app-toast-leave-from {
  opacity: 1;
}

@keyframes toast {
  0% {
    transform: translate(-50%, -75%) scale(0.6);
  }
  100% {
    transform: translate(-50%, -75%) scale(1);
  }
}
</style>
