<script setup lang="ts">
import { ref } from 'vue'
import { NCard, NH1, NH3, NPagination, NSpace } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { useMessageStore } from '../stores/message'
import BoardHeader from './BoardHeader.vue'
import MessageList from './MessageList.vue'

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
          :item-count="pageInfo.total"
          :page-size="pageInfo.size"
        />
      </NSpace>
    </template>
  </NCard>
</template>
