import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { MessageFetch } from '../api'

export const useMessageStore = defineStore('message', () => {
  const messages = ref<MessageFetch[]>([])

  const idMessages = computed<Record<number, MessageFetch>>(() => {
    return messages.value.reduce((result, message) => {
      Reflect.set(result, message.id, message)
      return result
    }, {})
  })

  function getRootReplyId(message: MessageFetch, firstCall = true): number {
    if (message.reply === -1)
      return firstCall ? -1 : message.id

    return getRootReplyId(idMessages.value[message.reply], false)
  }

  const replies = computed<Record<number, MessageFetch[]>>(() => {
    return messages.value.reduce((result, message) => {
      const rootReply = getRootReplyId(message)
      const prevReplies = Reflect.get(result, rootReply) ?? []
      Reflect.set(result, rootReply, [...prevReplies, message])
      return result
    }, {})
  })

  function setMessages(m: MessageFetch[]) {
    messages.value = m
  }

  function getRootReplies(id: number): MessageFetch[] {
    return replies.value[id] ?? []
  }

  return { messages, setMessages, getRootReplies }
})
