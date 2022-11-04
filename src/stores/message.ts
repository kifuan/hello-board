import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { MessageFetch } from '../api'

export const useMessageStore = defineStore('message', () => {
  const messages = ref<MessageFetch[]>([])
  const replies = computed<Record<number, MessageFetch[]>>(() => {
    return messages.value.reduce((result, message) => {
      const prevReplies = Reflect.get(result, message.reply) ?? []
      Reflect.set(result, message.reply, [...prevReplies, message])
      return result
    }, {})
  })

  function setMessages(m: MessageFetch[]) {
    messages.value = m
  }

  function getReplies(id: number): MessageFetch[] {
    return replies.value[id] ?? []
  }

  return { messages, setMessages, getReplies }
})
