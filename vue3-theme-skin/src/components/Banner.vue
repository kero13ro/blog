<script setup>
// 動態載入圖片
import { useThemeStore } from "../stores/theme.js";
import { ref } from "vue";
const theme = useThemeStore();
// const imageUrl = new URL(`@/template/${theme.templateId || 's11'}/${theme.skin || 'blue'}/bg.jpg`, import.meta.url).href
// const imageUrl = new URL(`@/template/s11/blue/bg.jpg`, import.meta.url).href

</script>

<template>
<div class="block" id="Banner">
  <h1>Banner</h1>
  <img :src="`src/template/${theme.templateId}/${theme.skin}/bg.jpg`" alt="">
</div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  max-width: 300px;
}
</style>
