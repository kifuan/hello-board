<script setup lang="ts">
import { NSkeleton, NThing } from 'naive-ui'
</script>

<template>
  <NThing content-indented>
    <template #avatar>
      <NSkeleton circle size="large" />
    </template>

    <NSkeleton text style="width: 30%" />
    <NSkeleton :repeat="2" text />
    <NSkeleton text style="width: 70%" />
  </NThing>
</template>
