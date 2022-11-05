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
const compStore = useMessageCompStore()
const { loadingMessage } = storeToRefs(compStore)
const messages = computed(() => store.getReplies(reply))

const AsyncMessage = defineAsyncComponent(() => import('./Message.vue'))

onMounted(() => {
  compStore.finishLoadingList()
})
</script>

<template>
  <NList v-show="loading || loadingMessage" :show-divider="false">
    <NListItem v-for="i in 5" :key="i">
      <MessageSkeleton />
    </NListItem>
  </NList>

  <NList v-show="!loading && !loadingMessage" :show-divider="false">
    <NListItem
      v-for="m in messages"
      :key="m.id"
    >
      <AsyncMessage :message="m" />
    </NListItem>
  </NList>
</template>
