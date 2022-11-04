<script setup lang="ts">
import type { MessageFetch } from '../api'
import { useMessageStore } from '../stores/message'
import BoardHeader from './BoardHeader.vue'
import MessageList from './MessageList.vue'

useMessageStore().setMessages([
  {
    id: 1,
    name: 'Username',
    content: 'Hello world',
    reply: -1,
    avatar: '/avatar.jpg',
    date: Date.now(),
  },
  {
    id: 2,
    name: 'Username2',
    content: 'Hello world 2',
    reply: 1,
    avatar: '/avatar.jpg',
    date: Date.now(),
  },
])
</script>

<template>
  <BoardHeader :count="10" />
  <MessageList />
</template>
