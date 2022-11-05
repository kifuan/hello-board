<script setup lang="ts">
import { useMessageStore } from '../stores/message'
import { useMessageCompStore } from '../stores/message-comp'

const store = useMessageStore()
const compStore = useMessageCompStore()
const loading = ref(true)

const { page, pageInfo } = storeToRefs(store)
const { loadingList } = storeToRefs(compStore)

const AsyncMessageList = defineAsyncComponent(() => import('./MessageList.vue'))

onMounted(async () => {
  await store.init()
  loading.value = false
})
</script>

<template>
  <NCard :segmented="{ content: 'soft' }" hoverable size="huge" content-style="padding-top: -100px">
    <template #header>
      <NA href="https://github.com/kifuan/hello-board">
        <NH1>
          Hello!
        </NH1>
      </NA>
      <NH3 style="margin-bottom: 0">
        Feel free to say something here :)
      </NH3>
    </template>

    <BoardHeader />
    <AsyncMessageList :loading="loading" />

    <template #footer>
      <NSpace justify="center">
        <NPagination
          v-if="!loading && !loadingList"
          v-model:page="page"
          :item-count="pageInfo.rootCount"
          :page-size="pageInfo.pageSize"
        />
      </NSpace>
    </template>
  </NCard>
</template>
