import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api } from '../api'
import type { MessageFetch, PageInfo } from '../api'

export const useMessageStore = defineStore('message', () => {
  // Raw messages got from backend.
  const messages = ref<MessageFetch[]>([])

  // Whether the store is initialized.
  const initialized = ref(false)

  // Note that it starts from 1.
  const _page = ref(1)
  const page = computed({
    get: () => _page.value,
    set: setPage,
  })

  const pageInfo = ref<PageInfo>({
    pageSize: 0,
    totalCount: 0,
    rootCount: 0,
  })

  async function setPage(p: number) {
    _page.value = p
    const res = await api.get(`messages?page=${p - 1}`)
    messages.value = res.data
  }

  async function init() {
    await setPage(1)
    const res = await api.get<PageInfo>('messages/page_info')
    pageInfo.value = res.data
    initialized.value = true
  }

  // Inserts after posting to server
  // to avoid get the same message array twice.
  function insertCachedMessage(m: MessageFetch) {
    // Only insert if it is the first page.
    if (_page.value !== 1)
      return

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

  return { messages, initialized, page, pageInfo, insertCachedMessage, init, getReplies }
})
