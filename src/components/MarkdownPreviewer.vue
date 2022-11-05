<script setup lang="ts">
import { computed } from 'vue'
import { createMarkdownIt } from '../util/markdown'

const { content } = defineProps<{
  content: string
}>()

const md = createMarkdownIt()

const html = computed(() => md.render(content))
</script>

<template>
  <div v-html="html" />
</template>
