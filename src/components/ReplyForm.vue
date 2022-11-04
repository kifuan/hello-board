<script setup lang="ts">
import type { FormItemRule, FormRules } from 'naive-ui'
import { NForm, NFormItem, NInput, NSwitch } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { useReplyStore } from '../stores/reply'

const { reply } = defineProps<{
  reply: number
}>()

const store = useReplyStore()
store.clearMessage()
store.message.reply = reply
const { message } = storeToRefs(store)

const rules: FormRules = {
  name: {
    required: true,
    message: 'Please input your name.',
    trigger: 'blur',
  },
  email: {
    required: true,
    trigger: 'blur',
    validator: (_: FormItemRule, value: string) => {
      if (value === '')
        return new Error('Please input your email.')
      if (!store.validateEmail(value))
        return new Error('Invalid email.')
      return true
    },
  },
  mailNotice: {
    // Shows a red "*" with the label.
    required: true,
  },
  content: {
    required: true,
    message: 'Please input your content.',
    trigger: 'blur',
  },
}
</script>

<template>
  <NForm :model="message" class="form" :rules="rules">
    <NFormItem path="email" label="Email(won't be displayed, only for Gravatar)">
      <NInput v-model:value="message.email" type="text" show-count maxlength="64" clearable @keydown.enter.prevent />
    </NFormItem>
    <NFormItem path="name" label="Name">
      <NInput v-model:value="message.name" type="text" show-count maxlength="64" clearable @keydown.enter.prevent />
    </NFormItem>
    <NFormItem path="mailNotice" label="Mail notice">
      <NSwitch v-model:value="message.mailNotice" />
    </NFormItem>
    <NFormItem path="content" label="Content(Markdown)">
      <NInput v-model:value="message.content" type="textarea" show-count maxlength="256" clearable @keydown.enter.prevent />
    </NFormItem>
  </NForm>
</template>

<style scoped>
.form {
  padding-top: 1rem;
}
</style>
