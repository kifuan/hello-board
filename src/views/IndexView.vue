<script setup lang="ts">
import { useMessageStore } from '../stores/message'

const store = useMessageStore()
onMounted(async () => {
  await store.init()
})
</script>

<template>
  <NGrid cols="11" x-gap="8" item-responsive>
    <NGridItem offset="0 600:2 900:3" span="11 600:7 900:5">
      <Board />
    </NGridItem>
  </NGrid>
</template>
