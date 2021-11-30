<script setup></script>

<template>
  <base-scroll class="base-page">
    <template #default>
      <slot name="default"></slot>
    </template>
    <template #fixed>
      <slot name="fixed"></slot>
    </template>
  </base-scroll>
</template>

<style scoped>
.base-page {
  position: relative;
  background: #f5f5f5;
  overflow: hidden;
}

.base-page:deep(> .s-content) {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
