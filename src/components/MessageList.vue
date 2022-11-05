<script setup lang="ts">
import { NList, NListItem } from 'naive-ui'
import { computed } from 'vue'
import type { MessageFetch } from '../api'
import { api } from '../api'
import { useMessageStore } from '../stores/message'
import Message from './Message.vue'

const { reply } = withDefaults(defineProps<{
  reply?: number
}>(), {
  reply: -1,
})

const store = useMessageStore()
const messages = computed(() => store.getRootReplies(reply))

api.get<MessageFetch[]>('messages').then((m) => {
  store.setMessages(m.data)
})
</script>

<template>
  <NList v-if="messages" :show-divider="false">
    <NListItem
      v-for="m in messages"
      :key="m.id"
    >
      <Message :message="m" />
    </NListItem>
  </NList>
</template>
