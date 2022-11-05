export const useMessageCompStore = defineStore('message-comp', () => {
  const loadingList = ref(true)
  const loadingMessage = ref(true)

  function finishLoadingList() {
    loadingList.value = false
  }

  function finishLoadingMessage() {
    loadingMessage.value = false
  }

  return { loadingMessage, loadingList, finishLoadingMessage, finishLoadingList }
})
