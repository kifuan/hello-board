<script setup lang="ts">
import { ref } from 'vue'
import { api } from '../api'
import type { MessageFetch } from '../api'
import { useMessageStore } from '../stores/message'
import BoardHeader from './BoardHeader.vue'
import MessageList from './MessageList.vue'

const store = useMessageStore()
const loading = ref(true)
store.fetchMessages().then(() => {
  loading.value = false
})
</script>

<template>
  <BoardHeader />
  <MessageList :loading="loading" />
</template>
