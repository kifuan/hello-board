import MarkdownIt from 'markdown-it'
import { EMOJI_SIZE_PX, emojis } from './emoji'

export function createMarkdownIt(): MarkdownIt {
  const md = MarkdownIt()
  const emojiUrls = emojis.map(e => e.url)

  const rawImage = md.renderer.rules.image!
  md.renderer.rules.image = (tokens, idx, options, env, slf) => rawImage(
    tokens.map((t) => {
      const src = t.attrGet('src') ?? ''
      if (emojiUrls.includes(src)) {
        t.attrSet('width', `${EMOJI_SIZE_PX}px`)
        t.attrSet('height', `${EMOJI_SIZE_PX}px`)
        t.attrSet('style', 'padding: 0 2px;vertical-align:bottom')
      }
      return t
    }), idx, options, env, slf,
  )

  return md
}
