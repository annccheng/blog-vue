<script setup>
import Layout from '@/components/Layout.vue';
import { ref, onMounted } from 'vue';
import { homeApi } from '@/api/home.js';
import { useHouseStore} from '@/store/house.js';

const houseStore = useHouseStore()

const getHouses = async() => {
  const { data } = await homeApi.getHouses()
  houseStore.setHouses(data)
}

const getHotHouses = async () => {
  const { data } = await homeApi.getHotHouses()
  houseStore.setHotHouses(data)
}

onMounted(() => {
  getHouses()
  getHotHouses()
})
</script>

<template>
  <layout>
    <router-view/>
  </layout>
</template>

<style scoped></style>
