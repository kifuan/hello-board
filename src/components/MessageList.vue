<script setup lang="ts">
import type { MessageFetch } from '../api'

defineProps<{
  messages: MessageFetch[]
}>()

function click() {
  alert('TEST')
}
</script>

<template>
  <div class="flex flex-row w-100 justify-between">
    <div class="text-xl">{{ messages.length }} MESSAGES</div>
    <a href="javascript:void(0)" @click="click" class="underline text-xl decoration-sky-300 hover:decoration-sky-400 active:decoration-sky-500">POST</a>
  </div>
</template>