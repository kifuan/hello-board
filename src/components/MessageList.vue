<script setup lang="ts">
import { NList, NListItem } from 'naive-ui'
import type { MessageFetch } from '../api'
import Message from './Message.vue'

defineProps<{
  messages: MessageFetch[]
}>()
</script>

<template>
  <NList clickable hoverable>
    <NListItem
      v-for="m in messages"
      :key="m.id"
    >
      <Message :message="m" />
    </NListItem>
  </NList>
</template>
