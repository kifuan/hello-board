<script setup lang="ts">
import { NAvatar, NButton, NP, NSpace, NThing, NTime } from 'naive-ui'
import type { MessageFetch } from '../api'
import { createReplyDialog } from '../util/reply-dialog'
import MarkdownPreviewer from './MarkdownPreviewer.vue'
import MessageList from './MessageList.vue'

const { message } = defineProps<{
  message: MessageFetch
}>()
</script>

<template>
  <NThing content-indented>
    <template #avatar>
      <NAvatar
        :src="message.avatar"
        :size="48"
        round
      />
    </template>

    <template #header>
      <NSpace :size="0" vertical>
        <NSpace align="end">
          <NButton text :href="message.site" style="font-weight: 600; font-size: medium">
            {{ message.name }}
          </NButton>

          <NP :depth="3">
            #{{ message.id }}
            <template v-if="message.reply !== -1">
              -> #{{ message.reply }}
            </template>
          </NP>
        </NSpace>

        <NP :depth="3">
          <NTime :time="message.date" type="date" />
        </NP>
      </NSpace>
    </template>

    <template #header-extra>
      <NButton text size="small" @click="createReplyDialog(message.id, `Reply to #${message.id}`)">
        Reply
      </NButton>
    </template>

    <template #action>
      <MessageList :reply="message.id" />
    </template>

    <MarkdownPreviewer :content="message.content" />
  </NThing>
</template>
