import axios from 'axios'

export interface MessageUpload {
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

export type MessageFetch = Omit<MessageUpload, 'email' | 'mailNotice'> & {
  /**
   * The id.
   */
  id: number

  /**
   * The avatar url.
   */
  avatar: string

  /**
   * The date in timestamp.
   */
  date: number
}

export const api = axios.create({
  baseURL: '/api/',
  timeout: 5000,
})
