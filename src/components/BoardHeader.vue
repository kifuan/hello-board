<script setup lang="ts">
import { NButton, NH2, NSpace, useDialog, useMessage } from 'naive-ui'
import { h } from 'vue'
import { useMessageStore } from '../stores/message'
import { useReplyStore } from '../stores/reply'
import ReplyForm from './ReplyForm.vue'

const messageStore = useMessageStore()
const replyStore = useReplyStore()
const dialog = useDialog()
const message = useMessage()

function handleAdd() {
  dialog.create({
    title: 'Add a message',
    content: () => h(ReplyForm, { reply: -1 }),
    maskClosable: false,
    positiveText: 'Submit',
    onPositiveClick: async () => {
      if (!replyStore.validateAll()) {
        message.error('Validation failed.')
        return false
      }
      // TODO post data here.
      await 1
    },
  })
}
</script>

<template>
  <NSpace justify="space-between">
    <NH2>
      {{ messageStore.messages.length }} Messages
    </NH2>
    <NButton ghost @click="handleAdd">
      Add
    </NButton>
  </NSpace>
</template>
