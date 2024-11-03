<script setup>
import Layout from '@/components/Layout.vue'
import { ref, onMounted, computed, watch } from 'vue'
import HotCard from '@/components/HotCard.vue'
import DescribePage from '@/components/describePage.vue';
import { useRouter } from 'vue-router'
import { useHouseStore } from '@/store/house.js'

const router = useRouter()
const houseStore = useHouseStore()
const houses = computed(() => houseStore.houses)
const hotHouses = computed(() => houseStore.hotHouses)
const filterHouses = ref(houseStore.houses)

const activeCity = ref('全部')
const cities = ['全部', '台北', '新北','新竹', '台中', '桃園', '雲林', '彰化', '高雄', '花蓮', '屏東']
const handleChangeCity = (city) => {
  if (city === '全部') {
    filterHouses.value = houses.value
    return
  }
  activeCity.value = city
  filterHouses.value = houses.value.filter(item => item.city.includes(city))
}

const searchValue = ref('')
const search = (e) => {
  if (e.keyCode === 13) {
    filterHouses.value = houses.value.filter(item => item.title.includes(searchValue.value))
  }
}

const sortOptions = ref([
  {
    value: 'sort',
    name: '排序'
  },
  {
    value: 'asc',
    name: '價格由低到高'
  },
  {
    value: 'desc',
    name: '價格由高到低'
  }
])
const sortMethod = {
  SORT: 'sort',
  ASC: 'asc',
  DESC: 'desc'
}
const sortHouses = (e) => {
  const sort = e.target.value
  const sortHouse = [...houses.value]
  switch(sort) {
    case sortMethod.ASC:
      sortHouse.sort((a, b) => a.price - b.price)
      break
    case sortMethod.DESC:
      sortHouse.sort((a, b) => b.price - a.price)
      break
    default:
      return
  }
  filterHouses.value = sortHouse
}
const goToHouse = (id, category) => {
  const categoryQuery = category ? `?category=${category}` : ''
  router.push(`/house/${id}${categoryQuery}`)
}
watch(houses, (newValue) => {
  filterHouses.value = newValue
})
</script>

<template>
  <div class="flex pt-3">
    <main class="flex-1 md:pr-3">
      <div class="flex justify-between">
        <input @keypress="search" v-model="searchValue" class="border border-primaryGray border-solid w-[280px] h-10 rounded-[32px] focus:outline-0 pl-4 mb-3"
          type="text" placeholder="請搜尋地區">
        <select @change="sortHouses"
          class="focus:outline-0 border border-primaryGray border-solid h-10 rounded-[32px] pl-4">
          <option v-for="option in sortOptions" :key="option.value" :value="option.value">{{ option.name }}</option>
        </select>
      </div>
      <div class="flex flex-wrap mb-3">
        <div v-for="city in cities" :key="city"
          class="border border-primaryGray border-solid py-1 px-3 rounded-[18px] mr-2 last:mr-0 mb-2 cursor-pointer text-sm"
          :class="{ 'bg-themeColor border-themeColor text-white': activeCity === city }"
          @click="handleChangeCity(city)">
          <p>{{ city }}</p>
        </div>
      </div>
      <section class="mb-9">
        <div v-if="filterHouses.length" class="flex flex-col">
          <div v-for="(item, idx) in filterHouses" :key="idx" class="mb-5 last:mb-0">
            <describe-page :image="item.images[0]" :title="item.title" :feature="item.feature" :slogan="item.slogan"
              :city="item.city" :owner="item.owner" :price="item.price" @click="goToHouse(item.id)" />
          </div>
        </div>
        <div v-else>
          沒有你要的房子
        </div>
      </section>
    </main>
    <nav class="w-[200px] md:block hidden">
      <div>
        <h1 class="font-bold text-xl mb-3">熱門物件</h1>
        <div v-for="(item, idx) in hotHouses" :key="idx" class="w-full mb-3">
          <hot-card :image="item.images[0]" :city="item.city" :rate="item.rate" :owner="item.owner" :price="item.price"
            @click="goToHouse(item.id, 'hot')" />
        </div>
      </div>
    </nav>
  </div>
</template>


<style scoped>

</style>
