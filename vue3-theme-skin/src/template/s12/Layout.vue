<script setup>
import WithCount from "@/components/hoc/WithCount.js";
import ModalBase from "@/components/hoc/ModalBase.vue";

// 使用 hoc 方式，模擬額外加載狀態
const WithCountModal = WithCount(ModalBase);
</script>

<template>
  <div>
    <div class="block">
      <h1>fishing block</h1>
    </div>
    <slot></slot>

    <WithCountModal />
  </div>
</template>

<style lang="scss" scoped>
.block {
  grid-column: 3 span;
}
</style>
