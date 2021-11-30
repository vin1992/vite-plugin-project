<script setup>
import { computed } from 'vue'
import { useStates } from '@/store/helper'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  position: {
    type: String,
    default: 'center',
  },
})

const { dialogConfig } = useStates('app')

const isShow = computed(() => dialogConfig.value.isShow && dialogConfig.value.name === props.name)
</script>

<template>
  <teleport to=".app-modal">
    <transition :name="`s-${position}`">
      <div v-if="isShow" class="base-dialog" :class="`s-${position}`" @touchmove.prevent>
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.base-dialog {
  position: absolute;
  width: 100%;
  pointer-events: auto;
}

.s-top {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.s-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.s-bottom {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.s-top-enter-active {
  animation: top-in 0.3s both;
}

.s-top-leave-active {
  animation: top-in 0.3s reverse both;
}

.s-center-enter-active {
  animation: center-in 0.3s both;
}

.s-center-leave-active {
  animation: center-in 0.3s reverse both;
}

.s-bottom-enter-active {
  animation: bottom-in 0.3s both;
}

.s-bottom-leave-active {
  animation: bottom-in 0.3s reverse both;
}

@keyframes top-in {
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, 0%);
  }
}

@keyframes center-in {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes bottom-in {
  0% {
    transform: translate(-50%, 100%);
  }
  100% {
    transform: translate(-50%, 0%);
  }
}
</style>
