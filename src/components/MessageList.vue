<script setup lang="ts">
import { NList, NListItem, NPagination } from 'naive-ui'
import { computed } from 'vue'
import { useMessageStore } from '../stores/message'
import Message from './Message.vue'
import MessageSkeleton from './MessageSkeleton.vue'

const { reply } = withDefaults(defineProps<{
  reply?: number
  loading: boolean
}>(), {
  reply: -1,
})

const store = useMessageStore()
const messages = computed(() => store.getReplies(reply))
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
