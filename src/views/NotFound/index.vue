<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goToHome = () => {
  router.push('/')
}
</script>

<template>
  <a-result status="404" title="404" sub-title="抱歉！沒有這個頁面">
    <template #extra>
      <a-button @click="goToHome" type="primary" class="bg-themeColor">回到首頁</a-button>
    </template>
  </a-result>
</template>

<style scoped>

</style>

