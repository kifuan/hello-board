<script setup lang="ts">
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
    site: 'https://kifuan.me',
  },
  {
    id: 2,
    name: 'Username2',
    content: 'Hello world2',
    reply: -1,
    avatar: '/avatar.jpg',
    date: Date.now(),
  },
  {
    id: 3,
    name: 'Username3',
    content: 'Hello world 3',
    reply: 1,
    avatar: '/avatar.jpg',
    date: Date.now(),
  },
  {
    id: 4,
    name: 'Username4',
    content: 'Hello world 4',
    reply: 3,
    avatar: '/avatar.jpg',
    date: Date.now(),
  },
])
</script>

<template>
  <BoardHeader :count="10" />
  <MessageList />
</template>
