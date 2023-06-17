import { useSlots, useAttrs, defineComponent, ref, onMounted } from 'vue'
import { h } from "@vue/runtime-core"

function WithAttr(WrapperComponent) {
  return defineComponent({
    setup() {
      const attr = useAttrs()

      const fetchData = ref(99)

      // onMounted(() => {
      //   fetchData.value = 101;
      // })

      return () => h(WrapperComponent, {
        ...attr,
        fetchData: fetchData.value
      })
    }
  })

}

export default WithAttr;