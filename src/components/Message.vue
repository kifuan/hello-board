<script setup lang="ts">
import { NAvatar, NButton, NP, NSpace, NTag, NThing, NTime } from 'naive-ui'
import type { MessageFetch } from '../api'
import { createReplyDialog } from '../util/reply-dialog'
import MarkdownPreviewer from './MarkdownPreviewer.vue'
import MessageList from './MessageList.vue'

const { message } = defineProps<{
  message: MessageFetch
}>()

const GRAVATAR_URL = 'https://seccdn.libravatar.org/avatar/'
</script>

<template>
  <NThing content-indented>
    <template #avatar>
      <NAvatar
        :src="GRAVATAR_URL + message.avatar"
        :size="48"
        round
      />
    </template>

    <template #header>
      <NSpace :size="0" vertical>
        <NSpace align="end" size="small">
          <NButton text :href="message.site" style="font-weight: 600; font-size: medium">
            {{ message.name }}
          </NButton>

          <NP :depth="3">
            #{{ message.id }}
          </NP>

          <NTag v-if="message.owner" round :bordered="false" type="success" size="small">
            Owner
          </NTag>
        </NSpace>

        <NP :depth="3">
          <NTime :time="message.date" type="datetime" />
        </NP>
      </NSpace>
    </template>

    <template #header-extra>
      <NButton text size="small" @click="createReplyDialog(message.id, `Reply to #${message.id}`)">
        Reply
      </NButton>
    </template>

    <template #action>
      <!-- When Message component is rendered, it should have been loaded already. -->
      <MessageList :reply="message.id" :loading="false" />
    </template>

    <MarkdownPreviewer :content="message.content" />
  </NThing>
</template>
