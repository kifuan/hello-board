import type { MessageUpload } from '../api'

// The message type which will be stored in localStorage.
type MessageStorage = Omit<MessageUpload, 'reply' | 'content'>
const omittedKeys = ['reply', 'content']

export const useReplyStore = defineStore('reply', () => {
  const defaultMessage = () => ({
    mailNotice: false,
    name: '',
    email: '',
    content: '',
    site: '',
    reply: -1,
  } as MessageUpload)

  // Converts MessageUpload or MessageStorage to pure MessageStore, removing extra properties.
  function toMessageStorage(m: MessageUpload | MessageStorage): MessageStorage {
    return Object.fromEntries(
      Object.entries(m).filter(
        ([k]) => !omittedKeys.includes(k),
      ),
    ) as MessageStorage
  }

  const storage = useLocalStorage<MessageStorage>('reply', toMessageStorage(defaultMessage()))

  // Initializes the message with storage.
  const message = ref<MessageUpload>(Object.assign(
    defaultMessage(), storage.value,
  ))

  // Saves the storage whenever the message updates.
  watch(message.value, v => storage.value = toMessageStorage(v))

  function validateEmail(email: string): boolean {
    return /.+@.+\..+/.test(email)
  }

  function validateAll(): boolean {
    return validateEmail(message.value.email) && message.value.name !== '' && message.value.content !== ''
  }

  return { message, validateEmail, validateAll }
})
