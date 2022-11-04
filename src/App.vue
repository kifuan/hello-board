<script setup lang="ts">
import { NGrid, NGridItem } from 'naive-ui'
import Board from './components/Board.vue'
</script>

<template>
  <NGrid cols="11" x-gap="8" item-responsive>
    <NGridItem offset="1 600:2 900:3" span="9 600:7 900:5">
      <Board />
    </NGridItem>
  </NGrid>
</template>
