<script setup lang="ts">
import { useMessageStore } from '../stores/message'
import MessageSkeleton from './MessageSkeleton.vue'

const { reply } = withDefaults(defineProps<{
  reply?: number
}>(), {
  reply: -1,
})

const store = useMessageStore()
const messages = computed(() => store.getReplies(reply))

const AsyncMessage = defineAsyncComponent({
  loader: () => import('./Message.vue'),
  loadingComponent: MessageSkeleton,
})
</script>

<template>
  <NList :show-divider="false">
    <NListItem
      v-for="m in messages"
      :key="m.id"
    >
      <AsyncMessage :message="m" />
    </NListItem>
  </NList>
</template>
