<script setup>
import { useThemeStore } from "@/stores/theme.js";
import { useColorMode } from "@vueuse/core";
import { ref, nextTick, watch, defineAsyncComponent } from "vue";
import useUpdateTheme from "@/hook/useUpdateTheme.js";

const theme = useThemeStore();

// 載入 顏色變數檔、客製化CSS
const { importModule, importCSS } = useUpdateTheme();

const themeMap = {
  s11: ["blue", "red"],
  s12: ["gold", "green"],
  s13: ["black", "water"],
};

// ex. <html theme="gold">
const mode = useColorMode({
  attribute: "theme",
  emitAuto: true,
});

watch(
  () => theme.templateId,
  () => {
    theme.skin = themeMap[theme.templateId][0];
  },
  { immediate: true }
);

watch(
  () => theme.skin,
  (val) => {
    mode.value = val;
    importModule((colors) => theme.$patch({ colors }));
    importCSS();
  },
  { immediate: true }
);
</script>

<template>
  <div id="Dashboard">
    <el-radio-group
      class="mb8"
      :model-value="theme.templateId"
      @update:modelValue="(temp) => (theme.templateId = temp)"
    >
      <el-radio-button label="s11" />
      <el-radio-button label="s12" />
      <el-radio-button label="s13" />
    </el-radio-group>
    <br />
    <el-radio-group
      :model-value="theme.skin"
      @update:modelValue="(skin) => (theme.skin = skin)"
      size="large"
    >
      <template v-for="skin in themeMap[theme.templateId]">
        <el-radio-button :label="skin" />
      </template>
    </el-radio-group>
  </div>
</template>

<style lang="scss">
#Dashboard {
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(#000000, 0.2);
  z-index: 1;
}
</style>
