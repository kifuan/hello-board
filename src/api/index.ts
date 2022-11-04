import axios from 'axios'
import { useProviderStore } from '../stores/provider'

export interface Message {
  /**
   * The message id.
   */
  id: number

  /**
   * The date it was sent.
   */
  date: number

  /**
   * The avatar(md5).
   * Should be joined with gravatar url.
   */
  avatar: string

  /**
   * The email.
   */
  email: string

  /**
   * Display name.
   */
  name: string

  /**
   * Content in markdown.
   */
  content: string

  /**
   * Personal site.
   */
  site: string

  /**
   * Which message it replies to.
   * If it doesn't reply to any message, it will be -1.
   */
  reply: number

  /**
   * Whether the person wants to be noticed.
   */
  mailNotice: boolean
}

export type MessageUpload = Omit<Message, 'id' | 'avatar' | 'date'>

export type MessageFetch = Omit<Message, 'email' | 'mailNotice'>

export const api = axios.create({
  baseURL: '/api/',
  timeout: 5000,
})

api.interceptors.request.use((req) => {
  useProviderStore().loadingBar.start()
  return req
})

api.interceptors.response.use((res) => {
  useProviderStore().loadingBar.finish()
  return res
}, async (err) => {
  const provider = useProviderStore()
  provider.loadingBar.error()
  if (axios.isAxiosError(err) && err.response !== undefined) {
    provider.message.error(err.response.statusText)
    throw err
  }
})
