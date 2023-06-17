<script setup>
import { useSlots, useAttrs } from 'vue'

import ModalBase from "@/components/hoc/ModalBase.vue";
const slots = useSlots()
// console.log(slots.default())

</script>


<template>
  <div>
    <slot></slot>
    <ModalBase />
  </div>
</template>

<style lang="scss" scoped>
.block {
  // grid-column: 2 span;
}
</style>
