<script setup>
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String
  },
  title: {
    type: String
  },
  feature: {
    type: Array
  },
  slogan: {
    type: String
  },
  city: {
    type: String,
    default: '0.0'
  },
  owner: {
    type: String
  },
  price: {
    type: String
  }
})
</script>

<template>
  <div class="flex shadow">
    <img class="w-[200px] h-[200px] object-cover rounded-md" :src="image" alt="">
    <div class="flex-1 flex flex-col h-[200px] px-3 pb-3">
      <div class="flex justify-between items-center mb-2 h-full">
        <div class="flex flex-col h-full">
          <div>
            <h1 class="text-2xl font-bold mb-2">
              <span class="mr-2">{{ title }}</span>
              <i class="fa-regular fa-heart text-2xl"></i>
            </h1>
            <div class="mb-5">
              <span v-for="item in feature" :key="item" class="p-1 bg-themeColor text-[#fff] mr-2 rounded-sm">{{ item }}</span>
            </div>
          </div>
          <div>
            <div class="flex items-center">
              <div class="w-5 text-center mr-1">
                <i class="fa-solid fa-house"></i>
              </div>
              <span>{{ slogan }}</span>
            </div>
            <div class="flex items-center">
              <div class="w-5 text-center mr-1">
                <i class="fa-solid fa-map-pin"></i>
              </div>
              <span>{{ city }}</span>
            </div>
            <p class="mb-1 text-[#6a6a6a]">房東：{{ owner }}</p>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-primaryRed text-2xl font-bold">$ {{ price }}<span>元/月</span></p>
        </div>
      </div>
    </div>
  </div>
</template>


