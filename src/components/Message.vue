<script setup lang="ts">
import { NAvatar, NP, NSpace, NThing, NTime } from 'naive-ui'
import type { MessageFetch } from '../api'
import MarkdownPreviewer from './MarkdownPreviewer.vue'

defineProps<{
  message: MessageFetch
}>()
</script>

<template>
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
      <NP :depth="3">
        <NTime :time="message.date" type="date" />
      </NP>
    </template>

    <template #header-extra>
      <NP :depth="3">
        #{{ message.id }}
      </NP>
    </template>

    <MarkdownPreviewer :content="message.content" />
  </NThing>
</template>
