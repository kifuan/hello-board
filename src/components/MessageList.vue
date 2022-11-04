<script setup lang="ts">
import { NList } from 'naive-ui'
import { computed } from 'vue'
import { useMessageStore } from '../stores/message'
import Message from './Message.vue'

const { reply } = withDefaults(defineProps<{
  reply?: number
}>(), {
  reply: -1,
})

const store = useMessageStore()
const messages = computed(() => store.getRootReplies(reply))
</script>

<template>
  <NList v-if="messages" :show-divider="false">
    <Message
      v-for="m in messages"
      :key="m.id"
      :message="m"
    />
  </NList>
</template>
