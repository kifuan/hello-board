import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { MessageFetch } from '../api'
import { api } from '../api'

export const useMessageStore = defineStore('message', () => {
  // Raw messages got from backend.
  const messages = ref<MessageFetch[]>([])

  /**
   * Sets the messages.
   * @param m the messages.
   */
  async function fetchMessages() {
    const res = await api.get<MessageFetch[]>('messages')
    messages.value = res.data
  }

  // Inserts after posting to server
  // to avoid get the same message array twice.
  function insertCachedMessage(m: MessageFetch) {
    messages.value.unshift(m)
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

  return { messages, insertCachedMessage, fetchMessages, getReplies }
})
