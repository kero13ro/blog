<template>
  <div class="block" @click="changeBackgroundColor" id="GameBlock">
    <!-- SCSS 變數函式，改用 JS 控制，可在 vue 組件內通用 -->
    <!-- 可以實作 設計師儀表板 https://www.primefaces.org/designer-vue/#/ -->
    <h1>GameBlock</h1>
    <p>{{ `hsl(${this.HUE}, 36%, ${this.LIGHTNESS}%)` }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      HUE: 70,
      LIGHTNESS: 40,
    };
  },
  computed: {
    txtColor() {
      return `hsl(${this.HUE}, 36%, ${this.LIGHTNESS}%)`;
    },
    bgColor() {
      return `hsl(${this.HUE}, 36%, ${this.LIGHTNESS + 50}%)`;
    },
  },
  methods: {
    changeBackgroundColor() {
      this.HUE += 30;
      console.log("HUE:", this.HUE);
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  user-select: none;
  background-color: v-bind("bgColor");
  color: v-bind("txtColor");
}
</style>
