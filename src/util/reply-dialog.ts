import type { DialogApi, MessageApi } from 'naive-ui'
import { h } from 'vue'
import type { MessageFetch } from '../api'
import { api } from '../api'
import ReplyForm from '../components/ReplyForm.vue'
import { useMessageStore } from '../stores/message'
import { useReplyStore } from '../stores/reply'

export function createReplyDialog(reply: number, title: string, message: MessageApi, dialog: DialogApi) {
  const replyStore = useReplyStore()
  const messageStore = useMessageStore()

  dialog.create({
    title,
    content: () => h(ReplyForm, { reply }),
    maskClosable: false,
    positiveText: 'Submit',
    onPositiveClick: async () => {
      if (!replyStore.validateAll()) {
        message.error('Validation failed.')
        return false
      }
      const res = await api.post<MessageFetch>('messages', replyStore.message)
      messageStore.setMessages([res.data, ...messageStore.messages])
    },
  })
}
