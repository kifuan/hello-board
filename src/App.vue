<script setup lang="ts">
import { NCard, NGrid, NGridItem, NH1, NH3 } from 'naive-ui'
import Board from './components/Board.vue'
</script>

<template>
  <NGrid cols="11" x-gap="8" item-responsive>
    <NGridItem offset="1 600:2 900:3" span="9 600:7 900:5">
      <NCard :segmented="{ content: 'soft' }" hoverable size="huge" content-style="padding-top: -100px">
        <template #header>
          <NH1>Hello!</NH1>
          <NH3 style="margin-bottom: 0">
            Feel free to say something here :)
          </NH3>
        </template>
        <Board />
      </NCard>
    </NGridItem>
  </NGrid>
</template>
