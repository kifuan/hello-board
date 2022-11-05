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

onMounted(async () => {
  compStore.finishLoadingList()
  await store.init()
})
</script>

<template>
  <NList v-show="!initialized || loadingMessage" :show-divider="false">
    <NListItem v-for="i in 5" :key="i">
      <MessageSkeleton />
    </NListItem>
  </NList>

  <NList v-show="initialized && !loadingMessage" :show-divider="false">
    <NListItem
      v-for="m in messages"
      :key="m.id"
    >
      <AsyncMessage :message="m" />
    </NListItem>
  </NList>
</template>
