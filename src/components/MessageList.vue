<script setup lang="ts">
import { useMessageStore } from '../stores/message'
import { useMessageCompStore } from '../stores/message-comp'

const { reply } = withDefaults(defineProps<{
  reply?: number
  loading: boolean
}>(), {
  reply: -1,
})

const store = useMessageStore()
const { loading: compLoading } = storeToRefs(useMessageCompStore())
const messages = computed(() => store.getReplies(reply))

const AsyncMessage = defineAsyncComponent(() => import('./Message.vue'))
</script>

<template>
  <NList v-show="loading || compLoading" :show-divider="false">
    <NListItem v-for="i in 5" :key="i">
      <MessageSkeleton />
    </NListItem>
  </NList>

  <NList v-show="!loading && !compLoading" :show-divider="false">
    <NListItem
      v-for="m in messages"
      :key="m.id"
    >
      <AsyncMessage :message="m" />
    </NListItem>
  </NList>
</template>
