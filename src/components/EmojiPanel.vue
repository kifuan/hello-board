<script setup lang="ts">
import type { Emoji } from '../util/emoji'
import { EMOJI_SIZE_PX, emojis } from '../util/emoji'

import { useProviderStore } from '../stores/provider'

const clipboard = useClipboard()
const provider = useProviderStore()

function handleClick(emoji: Emoji) {
  clipboard.copy(`![${emoji.name}](${emoji.url})`)
  provider.message.success('Copied!')
}
</script>

<template>
  <NCard size="small" :bordered="false" title="Click to copy">
    <NGrid cols="6" x-gap="8">
      <NGridItem v-for="(emoji, index) in emojis" :key="index">
        <NTooltip trigger="hover">
          <template #trigger>
            <NImage
              preview-disabled
              :src="emoji.url"
              :width="EMOJI_SIZE_PX"
              :height="EMOJI_SIZE_PX"
              @click="handleClick(emoji)"
            />
          </template>
          {{ emoji.name }}
        </NTooltip>
      </NGridItem>
    </NGrid>
  </NCard>
</template>
