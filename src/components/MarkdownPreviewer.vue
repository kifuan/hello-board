<script setup lang="ts">
import { marked } from 'marked'
import DOMPurify from 'dompurify'

const { content } = defineProps<{
  content: string
}>()

const html = computed(() => DOMPurify.sanitize(marked.parse(content), {
  USE_PROFILES: {
    html: true,
  },
}))
</script>

<template>
  <div v-html="html" />
</template>
