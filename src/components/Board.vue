<script setup lang="ts">
import { useMessageStore } from '../stores/message'

const store = useMessageStore()
const loading = ref(true)
store.init().then(() => {
  loading.value = false
})

const { page, pageInfo } = storeToRefs(store)
</script>

<template>
  <NCard :segmented="{ content: 'soft' }" hoverable size="huge" content-style="padding-top: -100px">
    <template #header>
      <NH1>Hello!</NH1>
      <NH3 style="margin-bottom: 0">
        Feel free to say something here :)
      </NH3>
    </template>

    <BoardHeader />
    <MessageList :loading="loading" />

    <template #footer>
      <NSpace justify="center">
        <NPagination
          v-model:page="page"
          :item-count="pageInfo.rootCount"
          :page-size="pageInfo.pageSize"
        />
      </NSpace>
    </template>
  </NCard>
</template>
