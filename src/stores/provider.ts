import { defineStore } from 'pinia'
import { createDiscreteApi } from 'naive-ui'

export const useProviderStore = defineStore('provider', () => {
  const { message, notification, dialog, loadingBar } = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
  )

  return { message, notification, dialog, loadingBar }
})
