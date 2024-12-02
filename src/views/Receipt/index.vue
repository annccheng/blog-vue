<script setup>
import { computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from "@/store/user.js";

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
const routeId = Number(route.params.id)
const order = computed(() => {
  return userStore.orders.find(item => item.id === routeId)
})
</script>

<template>
  <div class="flex overflow-hidden shadow-lg mt-6 text-lg item-center rounded-md mb-8">
    <img class="w-[550px] h-[180px] object-cover" :src="order.house.images[0]" alt="">
    <div class="pl-4">
      <div class="flex justify-between items-center">
        <h3 class="font-bold">{{ order.house.city }}</h3>
        <div class="flex items-center">
          <i class="fa-solid fa-star"></i>
          <span class="ml-1">5.0</span>
        </div>
      </div>
      <div class="mt-3">
        <span v-for="item in order.house.feature" :key="item"
          class="bg-themeColor border-themeColor text-white rounded-sm mr-2">{{ item }}</span>
      </div>
      <p class="text-primaryGray mt-3">房東 {{ order.house.owner }}</p>
      <span class="mt-3">${{ order.house.price }} TWD晚</span>
    </div>
  </div>
  <div class="flex -mx-2 mb-5">
    <div class="w-1/2 px-2">
      <div class="border border-solid border-primaryGray text-lg item-center rounded-md h-[330px] p-3">
        <h3 class="font-bold">訂單資料</h3>
        <hr class="text-primaryGray">
        <div class="flex flex-col mt-3">
          <p>入住日期</p>
          <p>{{ order.rentDate }}</p>
          <p>退住日期</p>
          <p>{{ order.checkoutDate }}</p>
          <p>人數</p>
          <p>{{ order.people }}</p>
        </div>
        <div class="flex mt-3">
          <p class="mr-3">金額/晚(人)</p>
          <span>${{ order.house.price }}</span>
        </div>
        <div class="flex mt-3">
          <p class="mr-3">總價</p>
          <span>${{ order.totalPrice }}</span>
        </div>
      </div>
    </div>
    <div class="w-1/2 px-2">
      <div class="border border-solid border-primaryGray text-lg item-center rounded-md h-[330px] p-3">
        <h3 class="font-bold">訂購人資訊</h3>
        <hr class="text-primaryGray">
        <div class="flex flex-col mt-3">
          <label for="date">手機</label>
          <span>{{ order.phone }}</span>
        </div>
        <div class="flex flex-col mt-3">
          <label for="date">Email</label>
          <span>{{ order.email }}</span>
        </div>
        <div class="flex flex-col mt-3">
          <label for="date">支款方式</label>
          <span>{{ order.payMethod }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
