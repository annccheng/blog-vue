<script setup>
import Layout from '@/components/Layout.vue'
</script>

<template>
  <div class="flex justify-between">
    <div class="w-full h-[200px]">
      <img :src="selectedImage" alt="">
      <div>
        <image v-for="(image, index) in house.images" :key="index" />
      </div>
    </div>
    <div class="w-full h-auto">
      <h1>{{ house.name }}</h1>
      <p class="price">{{ house.price }}</p>
      <p class="description">{{ house.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: '',
      house: {
        name: 'Sample Product',
        description: 'This is a detailed description of the product.',
        price: 99.99,
        images: [
          'https://via.placeholder.com/400x300?text=Product+Image+1',
          'https://via.placeholder.com/400x300?text=Product+Image+2',
          'https://via.placeholder.com/400x300?text=Product+Image+3'
        ]
      }
    }
  },
}
</script>

<style scoped>

</style>


