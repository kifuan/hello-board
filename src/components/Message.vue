<script setup lang="ts">
import { NAvatar, NButton, NListItem, NP, NSpace, NThing, NTime, useDialog } from 'naive-ui'
import { computed, h } from 'vue'
import type { MessageFetch } from '../api'
import { useMessageStore } from '../stores/message'
import MarkdownPreviewer from './MarkdownPreviewer.vue'
import MessageList from './MessageList.vue'

const { message } = defineProps<{
  message: MessageFetch
}>()

const store = useMessageStore()
const dialog = useDialog()

const repliesCount = computed(() => store.getReplies(message.id).length)

function showReplies() {
  const count = repliesCount.value
  if (count === 0)
    return

  dialog.create({
    title: `Replies to #${message.id}`,
    content: () => h(MessageList, { reply: message.id }),
  })
}
</script>

<template>
  <NListItem @click="showReplies">
    <NThing content-indented>
      <template #avatar>
        <NAvatar
          :src="message.avatar"
          :size="64"
          round
        />
      </template>

      <template #header>
        {{ message.name }}
      </template>

      <template #footer>
        <NSpace justify="space-between">
          <NP :depth="3">
            <NTime :time="message.date" type="date" />
          </NP>
          <NButton text size="small">
            <NP :depth="3">
              {{ repliesCount }} Replies
            </NP>
          </NButton>
        </NSpace>
      </template>

      <template #header-extra>
        <NP :depth="3">
          #{{ message.id }}
        </NP>
      </template>

      <MarkdownPreviewer :content="message.content" />
    </NThing>
  </NListItem>
</template>
