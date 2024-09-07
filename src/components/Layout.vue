<script setup>
import Logo from '@/assets/image/logo.jpg'
</script>


<template>
<div class="flex flex-col min-h-screen">
<header class="flex justify-center items-center bg-themeColor h-[100px]">
  <a href="#!">
    <h1><i class="fa-regular fa-house"></i>
    </h1>
  </a>
</header>
<ul class="flex justify-center sticky top-0 bg-white">
  <li class="px-5 py-4">
    <a href="#">標題一</a>
  </li>
  <li class="px-5 py-4">
    <a href="#">標題一</a>
  </li>
  <li class="px-5 py-4">
    <a href="#">標題一</a>
  </li>
  <li class="px-5 py-4">
    <a href="#">標題一</a>
  </li>
  <li class="px-5 py-4">
    <a href="#">標題一</a>
  </li>
</ul>
  <div class="container mx-auto flex-1">
    <slot/>
  </div>
  <footer class="bg-blue-400">頁尾</footer>
</div>
</template>