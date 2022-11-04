import type { DialogApi, MessageApi } from 'naive-ui'
import { h } from 'vue'
import ReplyForm from '../components/ReplyForm.vue'
import { useReplyStore } from '../stores/reply'

export function createReplyDialog(reply: number, title: string, message: MessageApi, dialog: DialogApi) {
  const store = useReplyStore()

  dialog.create({
    title,
    content: () => h(ReplyForm, { reply }),
    maskClosable: false,
    positiveText: 'Submit',
    onPositiveClick: async () => {
      if (!store.validateAll()) {
        message.error('Validation failed.')
        return false
      }
      // TODO post data here.
      await 1
    },
  })
}
