import type { marked } from 'marked'
import { useProviderStore } from '../stores/provider'
import { EMOJI_SIZE_PX, getEmoji } from './emoji'

export const emojiRenderer: marked.RendererObject = {
  image(href, _, text) {
    if (text !== '@')
      return false

    const id = parseInt(href ?? '')
    const emoji = getEmoji(id)
    if (emoji === undefined) {
      // We don't need it to be responsive.
      const { message } = useProviderStore()
      message.warning(`Detected emoji pattern, but id ${id} is invalid.`)
      return false
    }

    return `<img alt=${emoji.name} src=${emoji.url} style="width: ${EMOJI_SIZE_PX}px; height: ${EMOJI_SIZE_PX}px;vertical-align: bottom; padding: 0 2px;">`
  },
}
