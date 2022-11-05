export const useMessageCompStore = defineStore('message-comp', () => {
  const loading = ref(true)

  function finishLoading() {
    loading.value = false
  }

  return { loading, finishLoading }
})
