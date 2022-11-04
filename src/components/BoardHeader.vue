<script setup lang="ts">
import { NButton, NH2, NSpace } from 'naive-ui'

defineProps<{
  count: number
}>()
</script>

<template>
  <NSpace justify="space-between">
    <NH2>
      {{ count }} MESSAGES
    </NH2>
    <NButton ghost>
      POST
    </NButton>
  </NSpace>
</template>
