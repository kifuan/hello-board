import { defineStore } from 'pinia'
import { createDiscreteApi } from 'naive-ui'
import { pinia } from '.'

export const useProviderStore = defineStore('provider', () => {
  const { message, notification, dialog, loadingBar, app } = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
  )

  app.use(pinia)

  return { message, notification, dialog, loadingBar }
})
