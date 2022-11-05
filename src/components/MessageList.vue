<script setup lang="ts">
import { useMessageStore } from '../stores/message'

const { reply } = withDefaults(defineProps<{
  reply?: number
  loading: boolean
}>(), {
  reply: -1,
})

const store = useMessageStore()
const messages = computed(() => store.getReplies(reply))

const AsyncMessage = defineAsyncComponent(() => import('./Message.vue'))
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
        <AsyncMessage :message="m" />
      </NListItem>
    </template>
  </NList>
</template>
