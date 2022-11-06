<script setup lang="ts">
import { useMessageStore } from '../stores/message'
import { useMessageCompStore } from '../stores/message-comp'

const { reply } = withDefaults(defineProps<{
  reply?: number
}>(), {
  reply: -1,
})

const store = useMessageStore()
const { initialized } = storeToRefs(store)
const compStore = useMessageCompStore()
const { loadingMessage } = storeToRefs(compStore)
const messages = computed(() => store.getReplies(reply))

const AsyncMessage = defineAsyncComponent(() => import('./Message.vue'))

// I don't use a single complex boolean expression
// to make it easier to understand.
const showSkeleton = computed(() => {
  // Store is initialized and message component is loaded.
  if (initialized.value && !loadingMessage.value)
    return false

  // The store is initialized but the messages array is empty.
  // So the message component won't be loaded because there is no data.
  // At this moment, the skeleton should also not be shown.
  if (messages.value.length === 0 && store.initialized)
    return false

  return true
})

onMounted(() => {
  compStore.finishLoadingList()
})
</script>

<template>
  <NList v-show="showSkeleton" :show-divider="false">
    <NListItem v-for="i in 5" :key="i">
      <MessageSkeleton />
    </NListItem>
  </NList>

  <NList v-show="!showSkeleton" :show-divider="false">
    <NListItem
      v-for="m in messages"
      :key="m.id"
    >
      <AsyncMessage :message="m" />
    </NListItem>
  </NList>
</template>
