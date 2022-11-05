import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { MessageFetch } from '../api'

export const useMessageStore = defineStore('message', () => {
  // Raw messages got from backend.
  const messages = ref<MessageFetch[]>([])

  /**
   * Sets the messages.
   * @param m the messages.
   */
  function setMessages(m: MessageFetch[]) {
    messages.value = m
  }

  /**
   * An object that maps the ids of root messages with those who replies to it.
   */
  const replies = computed<Record<number, MessageFetch[]>>(() => {
    return messages.value.reduce((result, message) => {
      const prevReplies = Reflect.get(result, message.reply) ?? []
      Reflect.set(result, message.reply, [...prevReplies, message])
      return result
    }, {})
  })

  /**
   * Gets replies for specified message.
   * @param id specified message id.
   * @returns the replies of it.
   */
  function getReplies(id: number): MessageFetch[] {
    return replies.value[id] ?? []
  }

  return { messages, setMessages, getReplies }
})
