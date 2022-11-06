import MarkdownIt from 'markdown-it'
import { useProviderStore } from '../stores/provider'
import { EMOJI_SIZE_PX, getEmoji } from './emoji'

export function createMarkdownIt(): MarkdownIt {
  const md = MarkdownIt()
  const provider = useProviderStore()

  const rawImage = md.renderer.rules.image!
  md.renderer.rules.image = (tokens, idx, options, env, slf) => {
    tokens = tokens.map((t) => {
      if (t.tag !== 'img')
        return t

      const src = t.attrGet('src') ?? ''
      if (!src.startsWith('@'))
        return t

      const id = src.substring(1)
      const emoji = getEmoji(Number(id))
      if (emoji === undefined) {
        provider.message.warning(`Detected emoji pattern, but id ${id} is invalid.`)
        return t
      }

      t.attrSet('src', emoji.url)
      t.attrSet('alt', emoji.name)
      t.attrSet('style', 'vertical-align: bottom; padding: 0 2px;')
      t.attrSet('width', `${EMOJI_SIZE_PX}px`)
      t.attrSet('height', `${EMOJI_SIZE_PX}px`)
      return t
    })
    return rawImage(tokens, idx, options, env, slf)
  }

  return md
}
