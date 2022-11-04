<script setup lang="ts">
import { NAvatar, NButton, NDivider, NListItem, NP, NSpace, NThing, NTime } from 'naive-ui'
import type { MessageFetch } from '../api'
import MarkdownPreviewer from './MarkdownPreviewer.vue'
import MessageList from './MessageList.vue'

const { message } = defineProps<{
  message: MessageFetch
}>()
</script>

<template>
  <NListItem>
    <NThing content-indented>
      <template #avatar>
        <NAvatar
          :src="message.avatar"
          :size="64"
          round
        />
      </template>

      <template #header>
        <NButton text size="large" tag="a" :href="message.site" style="font-weight: 400">
          {{ message.name }}
        </NButton>
      </template>

      <template #footer>
        <NSpace :size="0">
          <NP :depth="3">
            <NTime :time="message.date" type="date" />
          </NP>
          <NDivider vertical />
          <NButton text size="small">
            <NP :depth="3">
              Reply
            </NP>
          </NButton>
        </NSpace>
      </template>

      <template #header-extra>
        <NP :depth="3">
          #{{ message.id }}
          <template v-if="message.reply !== -1">
            -> #{{ message.reply }}
          </template>
        </NP>
      </template>

      <template #action>
        <MessageList :reply="message.id" />
      </template>

      <MarkdownPreviewer :content="message.content" />
    </NThing>
  </NListItem>
</template>
