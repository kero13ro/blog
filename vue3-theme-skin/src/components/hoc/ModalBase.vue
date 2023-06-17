<script setup>
import { ref, onBeforeMount, nextTick } from "vue";

const props = defineProps(["fetchData"])
const base = ref("base");
</script>

<template>
<div id="ModalBase" class="block">
  <h1>ModalBase</h1>
  <div>fetchData: {{fetchData}}</div>
  <div>base: {{base}}</div>

</div>
</template>

<style lang="scss" scoped>
#ModalBase {

}
</style>
