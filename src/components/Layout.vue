<script setup>
import Logo from '@/assets/image/logo.jpg'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const changePage = (url) => (
  router.push(url)
)
</script>


<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-white">
      <div class="container mx-auto h-[60px] flex items-center justify-between">
        <h1 @click="changePage('/home')" class="text-themeColor cursor-pointer">
          <i class="fa-solid fa-house text-xl mr-2"></i>
          <span class="font-roboto">Rent me</span>
        </h1>
        <ul class="flex text-xl">
          <li>
            <i class="fa-solid fa-globe mr-4"></i>
          </li>
          <li>
            <i class="fa-regular fa-moon mr-4"></i>
          </li>
          <li>
            <i class="fa-solid fa-user"></i>
          </li>
        </ul>
      </div>
    </header>
    <ul class="flex justify-center sticky top-0  bg-white shadow">
      <li class="px-5 py-4">
        <a href="#">整層住家</a>
      </li>
      <li class="px-5 py-4">
        <a href="#">精緻套房</a>
      </li>
      <li class="px-5 py-4">
        <a href="#">豪華別墅</a>
      </li>
      <li class="px-5 py-4">
        <a href="#">樓中樓</a>
      </li>
      <li class="px-5 py-4">
        <a href="#">絕美雅房</a>
      </li>
    </ul>
    <div class="container mx-auto flex-1">
      <slot />
    </div>
    <footer class="py-2 bg-[#eee]">
      <p class="text-center">2024 My Website. All rights reserved.</p>
    </footer>
  </div>
</template>