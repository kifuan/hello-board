<script setup lang="ts">
import { NButton, NH2, NSpace, useDialog, useMessage } from 'naive-ui'
import { useMessageStore } from '../stores/message'
import { createReplyDialog } from '../util/reply-dialog'

const messageStore = useMessageStore()
</script>

<template>
  <NSpace justify="space-between">
    <NH2>
      {{ messageStore.messages.length }} Messages
    </NH2>
    <NButton ghost @click="createReplyDialog(-1, 'Add a message')">
      Add
    </NButton>
  </NSpace>
</template>
