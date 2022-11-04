import { defineStore } from 'pinia'
import { createDiscreteApi } from 'naive-ui'
import { pinia } from '.'

export const useProviderStore = defineStore('provider', () => {
  const api = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
  )

  const { message, notification, dialog, loadingBar } = api

  api.app.use(pinia)

  return { message, notification, dialog, loadingBar }
})
