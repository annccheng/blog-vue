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
  <div>
    <img class="w-full h-[200px] object-cover rounded-lg mb-2" :src="image" alt="">
    <div class="flex justify-between items-center">
      <h3 class="font-bold">{{ city }}</h3>
      <div class="flex items-center">
        <i class="fa-solid fa-star"></i>
        <span class="ml-1">{{ rate }}</span>
      </div>
    </div>
    <p class="text-primaryGray">房東：{{ owner }}</p>
    <span>${{ price }} TWD晚</span>
  </div>
</template>