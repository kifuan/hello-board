import axios from 'axios'

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
