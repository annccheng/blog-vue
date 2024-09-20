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
    <header class="flex justify-center items-center bg-themeColor h-[100px]">
      <a href="#!">
        <h1 @click="changePage('/home')"><i class="fa-solid fa-house"></i>
        </h1>
      </a>
    </header>
    <ul class="flex justify-center sticky top-0  bg-white">
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
    <footer></footer>
  </div>
</template>