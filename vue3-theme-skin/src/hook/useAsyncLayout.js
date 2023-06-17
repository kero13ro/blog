import { ref, nextTick, watch, defineAsyncComponent, shallowRef } from 'vue'
import { useThemeStore } from "@/stores/theme.js";

export default function () {
  const theme = useThemeStore();
  const AsyncLayout = shallowRef()
  const env = import.meta.env
  // console.log({...env})
  // console.log(import.meta.env.VITE_SOME_KEY)

  // 通過動態導入實現 懶加載，並會在打包時時分離為獨立的chunk
  // https://cn.vitejs.dev/guide/features.html#glob-import
  const Layouts = import.meta.glob("../template/*/Layout.vue");

  watch(
    () => theme.templateId,
    () => {
      AsyncLayout.value = defineAsyncComponent(Layouts[`../template/${theme.templateId}/Layout.vue`])
    },
    { immediate: true }
  );

  return {
    AsyncLayout,
  }
}