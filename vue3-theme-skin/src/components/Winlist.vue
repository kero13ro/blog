<script setup>
import { ref, onBeforeMount, nextTick } from "vue";

const isInside = ref(false);
onBeforeMount(() => {
  nextTick(() => (isInside.value = true));
});

// 電腦版時，傳送到 RankDT 內部
const isMobile = window.screen.width < 768;
</script>

<template>
  <Teleport to="#RankDT" v-if="isInside" :disabled="isMobile">
    <div  id="Winlist" class="block">
      <h3>Winlist</h3>
      <div>101</div>
      <div>102</div>
      <div>103</div>
      <div>104</div>
      <div>105</div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
#Winlist {
  // background-color: greenyellow;
}
</style>
