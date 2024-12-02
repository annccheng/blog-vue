<script setup>
import Layout from '@/components/Layout.vue'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref,reactive } from 'vue'
import { useHouseStore } from '@/store/house.js'

const houseStore = useHouseStore()

const router = useRouter()
const route = useRoute()
const routeId = ref(Number(route.params.id))
const category = ref(route.query.category || '')

const house = computed(() => {
  if (category.value){
    return houseStore.hotHouses.find(item => item.id === routeId.value)
  }
    return houseStore.houses.find(item => item.id === routeId.value)
})

const houseInfo = reactive({
  rentDate: '',
  checkoutDate: '',
  people: 1,
  houseId: routeId.value,
  category: category.value
})

const confirm = () => {
  router.push(`/order?rentDate=${houseInfo.rentDate}&checkoutDate=${houseInfo.checkoutDate}&people=${houseInfo.people}&houseId=${houseInfo.houseId}&category=${houseInfo.category}`)
}

</script>

<template>
  <div class="mt-3">
    <div class="flex mb-3">
      <div class="w-2/3 h-[600px] mr-3">
        <img class="w-full h-full object-cover" :src="house.images[0]" alt="" />
      </div>
      <div class="w-1/3">
        <template v-for="(item, index) in house.images" :key="item">
          <img v-if="index > 0" class="w-full h-[200px] pb-3 last:pb-0" :src="item" alt="">
        </template>
      </div>
    </div>
    <div class="flex">
      <div class="w-2/3 mr-3">
        <div class="flex justify-between">
          <div>
            <h3 class="font-bold text-2xl">{{house.city}}{{house.title}}</h3>
          </div>
          <div class="font-bold text-2xl">
            <i class="fa-solid fa-star"></i>
            <span class="ml-1 text-lg">5.0</span>
          </div>
        </div>
        <div class="my-2 flex border-solid border-b border-[#000] pb-3">
          <span v-for="item in house.feature" :key="item"
            class="p-1 bg-themeColor text-[#fff] mr-2 rounded-sm">{{item}}</span>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-bold"> 房屋介紹</h3>
          <p>{{ house.introduction }}</p>
        </div>
      </div>
      <div class="w-1/3">
        <div class="shadow-lg rounded-lg p-3">
          <p class="font-bold text-2xl text-center">$4,007 TWD晚</p>
          <button @click="confirm" class=" bg-themeColor px-3 py-3 rounded-lg w-full text-[#fff] mt-3">預定</button>
          <label  class="mt-3" for="">入住日期</label>
          <input v-model="houseInfo.rentDate"
            class="border border-primaryGray border-solid w-full h-14 rounded-[16px] focus:outline-0 mt-3 pl-2" type="date"
            placeholder="入住日期">
          <label class="mt-3" for="">退住日期</label>
          <input v-model="houseInfo.checkoutDate"
            class="border border-primaryGray border-solid w-full h-14 rounded-[16px] focus:outline-0 mt-3 pl-2" type="date"
            placeholder="退住日期">
          <label class="mt-3" for="">人數</label>
          <select v-model="houseInfo.people"
            class="pl-2 border border-primaryGray border-solid w-full h-14 rounded-[16px] focus:outline-0 mt-3" name=""
            id="">
            <option v-for="item in 4" :key="item" :value="item">{{ item }}</option>
          </select>
        </div>
      </div>
    </div>
    <div>
      <div v-for="item in house.comments" :key="item.comment" class="shadow p-2 mb-3">
        <div class="flex">
          <div class="mr-4">
            <i class="fa-solid fa-user mr-1"></i>
            <span>{{ item.name }}</span>
          </div>
          <div class="mb-4">
            <i class="fa-solid fa-star"></i>
            <span class="ml-1">{{ item.rate }}</span>
          </div>
        </div>
        <p>{{ item.comment }}</p>
      </div>
      <div class="mb-6">
        <span>{{ house.comments.length}}</span>
        <span>人留言</span>
      </div>
    </div>
  </div>
  <h2 class="text-lg font-bold">住宅地圖</h2>
  <iframe v-for="item in house.map" :key="item" src="" class="w-full h-[600px]" style="border:0;" allowfullscreen=""
    loading="lazy" referrerpolicy="no-referrer-when-downgrade">{{ item.map }}</iframe>
</template>


<style scoped>

</style>


