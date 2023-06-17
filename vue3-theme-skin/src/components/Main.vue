<script setup>
import { ref, nextTick, watch, defineAsyncComponent } from "vue";
import { useThemeStore } from "@/stores/theme.js";

import Header from "@/components/Header.vue";
import Marquee from "@/components/Marquee.vue";
import GameBlock from "@/components/GameBlock.vue";
import Banner from "@/components/Banner.vue";
import RankDT from "@/components/RankDT.vue";
import Winlist from "@/components/Winlist.vue";
import Dashboard from "@/components/Dashboard.vue";
import useAsyncLayout from "@/hook/useAsyncLayout.js";

const theme = useThemeStore();
const { AsyncLayout } = useAsyncLayout();

</script>

<template>
  <div :class="theme.templateId">
    <Dashboard />
    
    <AsyncLayout class="container">
      <Header />
      <Marquee />
      <Banner />
      <RankDT />
      <Winlist />
      <GameBlock />
    </AsyncLayout>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}

#Header {
  grid-column: 2 span;
}
.s11 {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}
.s12 {
  #Marquee {
    grid-row: 2 span;
  }
  #GameBlock {
    grid-column: 3 span;
  }
}
.s13 #Header {
  grid-column: 3 span;
}
</style>
