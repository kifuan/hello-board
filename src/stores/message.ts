import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { MessageFetch } from '../api'

export const useMessageStore = defineStore('message', () => {
  // Raw messages got from backend.
  const messages = ref<MessageFetch[]>([])

  /**
   * An object that maps id to messages(not raw).
   */
  const idMessages = computed<Record<number, MessageFetch>>(() => {
    return messages.value.reduce((result, message) => {
      Reflect.set(result, message.id, message)
      return result
    }, {})
  })

  function setMessages(m: MessageFetch[]) {
    messages.value = m
  }

  /**
   * Gets the root message that the specified message replied to.
   * @param message the message to get.
   * @param firstCall whether the first time to call this function, you should not modify this.
   * @returns the root message id it replies to.
   */
  function getRootReplyId(message: MessageFetch, firstCall = true): number {
    if (message.reply === -1)
      return firstCall ? -1 : message.id

    return getRootReplyId(idMessages.value[message.reply], false)
  }

  /**
   * An object that maps the ids of root messages with those who replied to it,
   * including indirect replies.
   */
  const replies = computed<Record<number, MessageFetch[]>>(() => {
    return messages.value.reduce((result, message) => {
      const rootReply = getRootReplyId(message)
      const prevReplies = Reflect.get(result, rootReply) ?? []
      Reflect.set(result, rootReply, [...prevReplies, message])
      return result
    }, {})
  })

  /**
   * Gets replies for a root message, which
   * means that its `reply` property must be `-1`.
   * @param id the id of specified message.
   * @returns the replies to this message.
   */
  function getRootReplies(id: number): MessageFetch[] {
    return replies.value[id] ?? []
  }

  return { messages, setMessages, getRootReplies }
})
