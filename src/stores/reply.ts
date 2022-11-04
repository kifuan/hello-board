import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { MessageUpload } from '../api'

export const useReplyStore = defineStore('reply', () => {
  const defaultMessage = () => ({
    mailNotice: false,
    name: '',
    email: '',
    content: '',
    site: '',
    reply: -1,
  } as MessageUpload)

  const message = reactive<MessageUpload>(defaultMessage())

  function setMessage(m: MessageUpload) {
    Object.assign(message, m)
  }

  function clearMessage() {
    setMessage(defaultMessage())
  }

  function validateEmail(email: string): boolean {
    return /.+@.+\..+/.test(email)
  }

  function validateAll(): boolean {
    return validateEmail(message.email) && message.name !== '' && message.content !== ''
  }

  return { message, setMessage, clearMessage, validateEmail, validateAll }
})
