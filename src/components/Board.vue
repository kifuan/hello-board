<script setup lang="ts">
import { useMessageStore } from '../stores/message'

const store = useMessageStore()

const { page, pageInfo, initialized } = storeToRefs(store)
</script>

<template>
  <NCard :segmented="{ content: 'soft' }" hoverable size="huge" content-style="padding-top: -100px">
    <template #header>
      <NA style="text-decoration: none" href="https://github.com/kifuan/hello-board">
        <NH1>
          Hello!
        </NH1>
      </NA>
      <NH3 style="margin-bottom: 0">
        Feel free to say something here :)
      </NH3>
    </template>

    <BoardHeader />
    <MessageList />

    <template #footer>
      <NSpace justify="center">
        <NPagination
          v-if="initialized"
          v-model:page="page"
          :item-count="pageInfo.rootCount"
          :page-size="pageInfo.pageSize"
        />
      </NSpace>
    </template>
  </NCard>
</template>
