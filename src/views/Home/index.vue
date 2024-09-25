<script setup>
import Layout from '@/components/Layout.vue'
import { ref, onMounted } from 'vue'
import HotCard from '@/components/HotCard.vue'
import DescribePage from '@/components/describePage.vue';
import { homeApi } from '@/api/home.js'

const houses = ref({})
const hotHouses = ref({})

const getHouses = async() => {
  const { data } = await homeApi.getHouses()
  houses.value = data
}

const getHotHouses = async () =>{
  const { data } = await homeApi.getHotHouses()
  hotHouses.value = data
}

const cities = ['台北', '新竹', '台中', '桃園', '雲林', '彰化', '高雄', '花蓮', '屏東']
onMounted(() => {
  getHouses()
  getHotHouses()
})
</script>



<template>
  <div class="flex">
    <main class="flex-1 md:pr-3">
      <section>
        <h1 class="font-bold text-xl py-2">熱門物件</h1>
        <div class="flex flex-wrap -mx-2 mb-5">
          <div v-for="(item, idx) in hotHouses" :key="idx" class="lg:w-1/4 md:w-1/2 w-full px-2 lg:mb-0 mb-3">
            <hot-card :image="item.image" :city="item.city" :rate="item.rate" :owner="item.owner" :price="item.price" />
          </div>
        </div>
      </section>
      <section>
        <input class="border border-primaryGray border-solid w-[280px] h-16 rounded-[32px] focus:outline-0 pl-4"
          type="text" placeholder="請搜尋地區">
        <div class="p-4 rounded-[32px]">
          <div class="flex flex-wrap hidden">
            <div v-for="item in cities" :key="item"
              class="border border-primaryGray border-solid py-2 px-7 rounded-[20px] mr-2 last:mr-0 mb-2 cursor-pointer">
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col mb-9">
          <div v-for="(item, idx) in houses" :key="idx" class="mb-5 last:mb-0">
            <describe-page :image="item.image" :title="item.title"
            :feature="item.feature"
            :slogan="item.slogan" :city="item.city"
              :owner="item.owner" :price="item.price" />
          </div>
        </div>
      </section>
    </main>
    <nav class="w-[180px] md:block hidden">
      <div>
        <h1 class="font-bold text-xl py-2">搶手物件</h1>
        <div class="overflow-hidden rounded-lg shadow-md mb-3">
          <img class="w-full h-[180px] object-cover" src="@/assets/image/pic 4.jpg" alt="">
          <div class="p-1">
            <div class="flex justify-between items-center">
              <h3 class="font-bold">台灣南投</h3>
              <div class="flex items-center">
                <i class="fa-solid fa-star"></i>
                <span class="ml-1">5.0</span>
              </div>
            </div>
            <p class="text-primaryGray">房東：Winter</p>
            <span>$10.000 TWD晚</span>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg shadow-md mb-3">
          <img class="w-full h-[180px] object-cover" src="@/assets/image/pic 4.jpg" alt="">
          <div class="p-1">
            <div class="flex justify-between items-center">
              <h3 class="font-bold">台灣南投</h3>
              <div class="flex items-center">
                <i class="fa-solid fa-star"></i>
                <span class="ml-1">5.0</span>
              </div>
            </div>
            <p class="text-primaryGray">房東：Winter</p>
            <span>$10.000 TWD晚</span>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg shadow-md">
          <img class="w-full h-[180px] object-cover" src="@/assets/image/pic 4.jpg" alt="">
          <div class="p-1">
            <div class="flex justify-between items-center">
              <h3 class="font-bold">台灣南投</h3>
              <div class="flex items-center">
                <i class="fa-solid fa-star"></i>
                <span class="ml-1">5.0</span>
              </div>
            </div>
            <p class="text-primaryGray">房東：Winter</p>
            <span>$10.000 TWD晚</span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<style scoped>

</style>
