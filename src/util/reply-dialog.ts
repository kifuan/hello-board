import type { MessageFetch } from '../api'
import { api } from '../api'
import ReplyForm from '../components/ReplyForm.vue'
import { useMessageStore } from '../stores/message'
import { useProviderStore } from '../stores/provider'
import { useReplyStore } from '../stores/reply'
import { withLoadingBar } from './with-loading-bar'

export function createReplyDialog(reply: number, title: string) {
  const provider = useProviderStore()
  const replyStore = useReplyStore()
  const messageStore = useMessageStore()

  const dialog = provider.dialog.create({
    title,
    content: () => h(ReplyForm, { reply }),
    maskClosable: false,
    positiveText: 'Submit',
    onPositiveClick: async () => {
      if (!replyStore.validateAll()) {
        provider.message.error('Validation failed.')
        return false
      }
      dialog.loading = true
      try {
        messageStore.insertCachedMessage(await withLoadingBar(async () => {
          const res = await api.post<MessageFetch>('messages', replyStore.message)
          return res.data
        }))
      }
      finally {
        dialog.loading = false
      }
    },
  })
}
