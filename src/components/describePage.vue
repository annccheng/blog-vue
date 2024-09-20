<script setup>
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String
  },
  title: {
    type: String
  },
  pointOne: {
    type: String
  },
  pointTwo: {
    type: String
  },
  pointThree: {
    type: String
  },
  pointFour: {
    type: String
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
  <div class="flex">
    <img class="w-[200px] h-[200px] object-cover rounded-3xl mr-3" :src="image" alt="">
    <div class="flex-1 flex flex-col h-[200px]">
      <div class="flex justify-between items-center mb-2 h-full">
        <div class="flex flex-col h-full">
          <div>
            <h1 class="text-2xl font-bold mb-1 p-2">
              <span>{{ title }}</span>
              <i class="fa-regular fa-heart text-2xl"></i>
            </h1>
            <div class="mb-1 p-2">
              <span class="p-1 bg-themeColor text-[#fff] mr-2 rounded-sm">{{ pointOne }}</span>
              <span class="p-1 bg-themeColor text-[#fff] mr-2 rounded-sm">{{ pointTwo }}</span>
              <span class="p-1 bg-themeColor text-[#fff] mr-2 rounded-sm">{{ pointThree }}</span>
              <span class="p-1 bg-themeColor text-[#fff] rounded-sm">{{ pointFour }}</span>
            </div>
          </div>
          <div>
            <p>
              <i class="fa-solid fa-house"></i>
              <span class="mb-1 p-2">{{ slogan }}</span>
            </p>
            <p>
              <i class="fa-solid fa-map-pin"></i>
              <span class="mb-1 p-2">{{ city }}</span>
            </p>
            <p class="mb-1 p-2">房東：{{ owner }}</p>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-red text-2xl font-bold">$ {{ price }}<span>元/月</span></p>
        </div>
      </div>
    </div>
  </div>
</template>


