<template>
  <div style="padding-top: 5rem">
    <NResult
      status="404"
      title="404 Not Found"
      description="I haven't even added another page. What do you want?"
      size="huge"
    >
      <template #footer>
        <NButton size="large" @click="$router.push('/')">
          Back home
        </NButton>
      </template>
    </NResult>
  </div>
</template>
