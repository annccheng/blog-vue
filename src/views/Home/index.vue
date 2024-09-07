<script setup>
import Layout from '@/components/Layout.vue'
</script>

<template>
  <div class="flex">
    <main class="flex-1 bg-green-300">
      <h1>熱門物件</h1>
      <div class="flex">
        <div class="h-[200px] border border-solid border-black">
          <div class="house-one">
            <img class="overflow-hidden" src="@/assets/image/pic 1.jpg" alt="">
            <span>House owner:Amy</span>
            <span></span>
          </div>
        </div>
        <div class="h-[200px] border border-solid border-black">
          <div class="house-two">
            <img class="overflow-hidden" src="@/assets/image/pic 2.jpg" alt="">
            <span>House owner:Hellen</span>
            <span></span>
          </div>
        </div>
        <div class="h-[200px] border border-solid border-black">
          <div class="house-three">
            <img class="overflow-hidden" src="@/assets/image/pic 3.jpg" alt="">
            <span>House owner:Jenny</span>
            <span></span>
          </div>
        </div>
        <div class="h-[200px] border border-solid border-black">
          <div class="house-four">
            <img class="overflow-hidden" src="@/assets/image/pic 4.jpg"  alt="">
            <span>House owner:Jason</span>
            <span></span>
          </div>
        </div>
      </div>
    </main>
    <nav class="bg-yellow-200 w-[100px]">側邊</nav>
  </div>
</template>


<style scoped>

</style>
