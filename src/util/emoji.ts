export interface Emoji {
  id: number
  name: string
  url: string
}

export const EMOJI_SIZE_PX = 35

export const emojis: Emoji[] = [
  {
    id: 1,
    name: '永雏塔菲_NO喵!',
    url: '/emojis/1.jpg',
  },
  {
    id: 2,
    name: '永雏塔菲_不理你了',
    url: '/emojis/2.jpg',
  },
  {
    id: 3,
    name: '永雏塔菲_亲嘴',
    url: '/emojis/3.jpg',
  },
  {
    id: 4,
    name: '永雏塔菲_令人兴奋',
    url: '/emojis/4.jpg',
  },
  {
    id: 5,
    name: '永雏塔菲_呼呼喵',
    url: '/emojis/5.jpg',
  },
  {
    id: 6,
    name: '永雏塔菲_哈哈哈',
    url: '/emojis/6.jpg',
  },
  {
    id: 7,
    name: '永雏塔菲_喵喵拳',
    url: '/emojis/7.jpg',
  },
  {
    id: 8,
    name: '永雏塔菲_嘤嘤嘤',
    url: '/emojis/8.jpg',
  },
  {
    id: 9,
    name: '永雏塔菲_嘲笑',
    url: '/emojis/9.jpg',
  },
  {
    id: 10,
    name: '永雏塔菲_嘻嘻喵',
    url: '/emojis/10.jpg',
  },
  {
    id: 11,
    name: '永雏塔菲_太好吃了',
    url: '/emojis/11.jpg',
  },
  {
    id: 12,
    name: '永雏塔菲_好热',
    url: '/emojis/12.jpg',
  },
  {
    id: 13,
    name: '永雏塔菲_对呀对呀',
    url: '/emojis/13.jpg',
  },
  {
    id: 14,
    name: '永雏塔菲_尴尬',
    url: '/emojis/14.jpg',
  },
  {
    id: 15,
    name: '永雏塔菲_开派对咯',
    url: '/emojis/15.jpg',
  },
  {
    id: 16,
    name: '永雏塔菲_我帅吗',
    url: '/emojis/16.jpg',
  },
  {
    id: 17,
    name: '永雏塔菲_摸头',
    url: '/emojis/17.jpg',
  },
  {
    id: 18,
    name: '永雏塔菲_星星眼',
    url: '/emojis/18.jpg',
  },
  {
    id: 19,
    name: '永雏塔菲_晕了',
    url: '/emojis/19.jpg',
  },
  {
    id: 20,
    name: '永雏塔菲_有鬼',
    url: '/emojis/20.jpg',
  },
  {
    id: 21,
    name: '永雏塔菲_生日快乐',
    url: '/emojis/21.jpg',
  },
  {
    id: 22,
    name: '永雏塔菲_疑惑',
    url: '/emojis/22.jpg',
  },
  {
    id: 23,
    name: '永雏塔菲_累',
    url: '/emojis/23.jpg',
  },
  {
    id: 24,
    name: '永雏塔菲_闪亮登场',
    url: '/emojis/24.jpg',
  },
  {
    id: 25,
    name: '永雏塔菲_震惊',
    url: '/emojis/25.jpg',
  },
]

const obj = emojis.reduce((result, emoji) => {
  Reflect.set(result, emoji.id, emoji)
  return result
}, {})

export function getEmoji(id: number): Emoji | undefined {
  return Reflect.get(obj, id)
}
