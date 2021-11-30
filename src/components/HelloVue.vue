<script setup></script>

<template>
  <div class="hello-vue">
    <div class="title">Hello Vue</div>
    <div class="logo"></div>
  </div>
</template>

<style scoped>
.hello-vue {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.title {
  margin-bottom: 100px;
  font-size: 50px;
  font-weight: bold;
}

.logo {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  background: url('../assets/logo.dark.png');
  background-size: 100% 100%;
}
</style>
