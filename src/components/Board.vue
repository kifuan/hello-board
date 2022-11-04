<script setup lang="ts">
import type { MessageFetch } from '../api'
import BoardHeader from './BoardHeader.vue'
import MessageList from './MessageList.vue'

const messages: MessageFetch[] = [
  {
    id: 1,
    name: 'Username',
    content: 'Hello world',
    reply: -1,
    avatar: '/avatar.jpg',
    date: Date.now(),
  },
]
</script>

<template>
  <BoardHeader :count="10" />
  <MessageList :messages="messages" />
</template>
