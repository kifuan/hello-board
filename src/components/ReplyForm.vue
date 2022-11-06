<script setup lang="ts">
import type { FormItemRule, FormRules } from 'naive-ui'
import { useReplyStore } from '../stores/reply'

const { reply } = defineProps<{
  reply: number
}>()

const store = useReplyStore()
const { message } = storeToRefs(store)
message.value.reply = reply

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
      <NInput v-model:value="message.email" placeholder="name@example.com" type="text" show-count maxlength="64" clearable @keydown.enter.prevent />
    </NFormItem>
    <NFormItem path="name" label="Name">
      <NInput v-model:value="message.name" placeholder="Name" type="text" show-count maxlength="64" clearable @keydown.enter.prevent />
    </NFormItem>
    <NFormItem path="site" label="Your site">
      <NInput v-model:value="message.site" placeholder="https://example.com" type="text" show-count maxlength="64" clearable @keydown.enter.prevent />
    </NFormItem>
    <NFormItem path="mailNotice" label="Receive email notifications">
      <NSwitch v-model:value="message.mailNotice" />
    </NFormItem>
    <NFormItem path="content">
      <template #label>
        Content(Markdown)
        <EmojiDropdown />
      </template>
      <NInput v-model:value="message.content" placeholder="Hello, world!" type="textarea" show-count maxlength="233" clearable />
    </NFormItem>
  </NForm>
</template>

<style scoped>
.form {
  padding-top: 1rem;
}
</style>
