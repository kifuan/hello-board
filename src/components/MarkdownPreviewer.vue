<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { computed } from 'vue'

const { content } = defineProps<{
  content: string
}>()

const md = MarkdownIt()

const html = computed(() => md.render(content))
</script>

<template>
  <div v-html="html" />
</template>
