import { ref, nextTick } from 'vue'

export default function() {
  const isShow = ref(true);

  const render = async () => {
    isShow.value = false;
    nextTick(() => isShow.value = true);
  };

  return {
    isShow,
    render,
  }
}