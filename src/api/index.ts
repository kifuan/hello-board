import axios from 'axios'
import { useProviderStore } from '../stores/provider'

export interface PageInfo {
  /**
   * Page size.
   */
  pageSize: number

  /**
   * Total messages count.
   */
  totalCount: number

  /**
   * Root messages count, used for pagination.
   */
  rootCount: number
}

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

  /**
   * Whether the person is owner.
   * It will only be undefined or true.
   */
  owner?: true
}

export type MessageUpload = Omit<Message, 'id' | 'avatar' | 'date' | 'owner'>

export type MessageFetch = Omit<Message, 'email' | 'mailNotice'>

export const api = axios.create({
  baseURL: '/api/',
})

api.interceptors.response.use(res => res, async (err) => {
  const provider = useProviderStore()
  if (axios.isAxiosError(err) && err.response !== undefined) {
    const message = err.response.data?.message as string | undefined
    provider.message.error(message ?? err.response.statusText)
    throw err
  }
})
