import { ref, nextTick } from 'vue'

import { useThemeStore } from "@/stores/theme.js";

export default function () {
  const theme = useThemeStore();

  async function importModule(update) {
    const importModule = await import(
      `../template/${theme.templateId}/${theme.skin}/config.js`
    );
    const { colors } = importModule.default;
    update(colors);
  }
  
  // 改用模塊、而非注入 https://cn.vitejs.dev/guide/features.html#css z
  async function importCSS() {
    const moduleCSS = await import(
      `../template/${theme.templateId}/${theme.skin}/custom.css?inline`
    )
  }
  

  return {
    importModule,
    importCSS,
  }
}