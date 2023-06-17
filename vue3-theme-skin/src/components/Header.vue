<script setup>
import { useThemeStore } from "../stores/theme.js";

const theme = useThemeStore();
const { colors } = theme;
</script>

<template>
  <div class="block" id="Header">
    <h1>Header</h1>
    <h1>{{ theme.templateId }} - {{ theme.skin }}</h1>
    <div>Debitis, aperiam rerum? Reprehenderit quos, similique fugit nemo consequatur velit</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium pariatur aspernatur recusandae expedita! Maxime recusandae cumque aut quas saepe maiores!</div>
    <div>Debitis, aperiam rerum? Reprehenderit quos, similique fugit nemo consequatur velit</div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  color: v-bind("colors.primary.main");
  background-color: v-bind("colors.primary.light");
}
</style>
