<script setup lang="ts">
import { NDialogProvider, NGrid, NGridItem, NMessageProvider } from 'naive-ui'
import Board from './components/Board.vue'
</script>

<template>
  <NDialogProvider>
    <NMessageProvider>
      <NGrid cols="11" x-gap="8" item-responsive>
        <NGridItem offset="1 600:2 900:3" span="9 600:7 900:5">
          <Board />
        </NGridItem>
      </NGrid>
    </NMessageProvider>
  </NDialogProvider>
</template>
