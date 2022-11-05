<script setup lang="ts">
import { NList, NListItem } from 'naive-ui'
import { computed, ref } from 'vue'
import type { MessageFetch } from '../api'
import { api } from '../api'
import { useMessageStore } from '../stores/message'
import Message from './Message.vue'
import MessageSkeleton from './MessageSkeleton.vue'

const { reply } = withDefaults(defineProps<{
  reply?: number
}>(), {
  reply: -1,
})

const store = useMessageStore()
const messages = computed(() => store.getRootReplies(reply))
const loading = ref(true)

api.get<MessageFetch[]>('messages').then((m) => {
  store.setMessages(m.data)
  loading.value = false
})
</script>

<template>
  <NList :show-divider="false">
    <template v-if="loading">
      <NListItem v-for="i in 5" :key="i">
        <MessageSkeleton />
      </NListItem>
    </template>

    <template v-else>
      <NListItem
        v-for="m in messages"
        :key="m.id"
      >
        <Message :message="m" />
      </NListItem>
    </template>
  </NList>
</template>
