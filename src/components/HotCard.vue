<script setup>
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String
  },
  city: {
    type: String
  },
  rate: {
    type: Number,
    default: 0
  },
  owner: {
    type: String
  },
  price: {
    type: Number
  }
})
</script>
<template>
  <div class=" shadow rounded-md">
    <img class="w-full h-[100px] object-cover rounded-lg mb-2" :src="image" alt="">
    <div class="p-2">
      <div class="flex items-center">
        <h3 class="font-bold mb-2">{{ city }}</h3>
        <div class="flex items-center">
          <i class="fa-solid fa-star"></i>
          <span class="ml-1 mb-2">{{ rate }}</span>
        </div>
      </div>
      <p class="text-primaryGray mb-2">房東：{{ owner }}</p>
      <span>${{ price }} TWD晚</span>
    </div>
  </div>
</template>