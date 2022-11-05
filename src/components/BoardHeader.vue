<script setup lang="ts">
import { NButton, NH3, NSpace } from 'naive-ui'
import { useMessageStore } from '../stores/message'
import { createReplyDialog } from '../util/reply-dialog'

const messageStore = useMessageStore()
</script>

<template>
  <NSpace justify="space-between">
    <NH3>
      {{ messageStore.messages.length }} Messages
    </NH3>
    <NButton ghost @click="createReplyDialog(-1, 'Add a message')">
      Add
    </NButton>
  </NSpace>
</template>
