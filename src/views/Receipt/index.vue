<script setup>
import { computed, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useHouseStore } from '@/store/house.js';
import { useUserStore } from '@/store/user.js';

const houseStore = useHouseStore();
const userStore = useUserStore();
const route = useRoute();
const router = useRouter();


const payInfo = reactive({
  rentDate: rentDate.value,
  checkoutDate: checkoutDate.value,
  people: people.value,
  totalPrice: totalPrice.value,
  payMethod: payMethods.value,
  phone: phone.value,
  email: email.value,
});

const checkout = () => {

userStore.setReceipts([
  {
    rentDate: payInfo.rentDate,
    checkoutDate: payInfo.checkoutDate,
    people: payInfo.people,
    totalPrice: payInfo.totalPrice,
    payMethod: payInfo.payMethod,
    phone: payInfo.phone,
    email: payInfo.email,
    createdAt: Math.floor(Date.now() / 1000)
  },
  ...userStore.receipt
])
}

</script>

<template>
    <div class="flex overflow-hidden shadow-lg mt-6 text-lg item-center rounded-md mb-8">
    <img class="w-[550px] h-[180px] object-cover" :src="orderHouse.images[0]" alt="">
    <div class="pl-4">
      <div class="flex justify-between items-center">
        <h3 class="font-bold">{{ orderHouse.city }}</h3>
        <div class="flex items-center">
          <i class="fa-solid fa-star"></i>
          <span class="ml-1">5.0</span>
        </div>
      </div>
      <div class="mt-3">
        <span v-for="item in orderHouse.feature" :key="item"
          class="bg-themeColor border-themeColor text-white rounded-sm mr-2">{{ item }}</span>
      </div>
      <p class="text-primaryGray mt-3">房東：Winter</p>
      <span class="mt-3">${{ orderHouse.price }} TWD晚</span>
    </div>
  </div>
  <div class="flex -mx-2 mb-5">
    <div class="w-1/2 px-2">
      <div class="border border-solid border-primaryGray text-lg item-center rounded-md h-[330px] p-3">
        <h3 class="font-bold">訂單資料</h3>
        <hr class="text-primaryGray">
        <div class="flex flex-col mt-3">
          <p>入住日期</p>
          <p>{{ rentDate }}</p>
          <p>退住日期</p>
          <p>{{ checkoutDate }}</p>
          <p>人數</p>
          <p>{{ people }}</p>
        </div>
        <div class="flex mt-3">
          <p class="mr-3">金額/晚(人)</p>
          <span>${{ orderHouse.price }}</span>
        </div>
        <div class="flex mt-3">
          <p class="mr-3">總價</p>
          <span>${{ totalPrice }}</span>
        </div>
      </div>
    </div>
    <div class="w-1/2 px-2">
      <div class="border border-solid border-primaryGray text-lg item-center rounded-md h-[330px] p-3">
        <h3 class="font-bold">訂購人資訊</h3>
        <hr class="text-primaryGray">
        <div class="flex flex-col mt-3">
          <p>手機</p>
          <p>{{}}</p>
        </div>
        <div class="flex flex-col mt-3">
          <label for="date">Email</label>
          <input v-model="payInfo.email" type="email"
            class="border-primaryGray border border-solid rounded-md p-2 focus:outline-none" required>
        </div>
        <div class="flex flex-col mt-3">
          <label for="date">支款方式</label>
          <select class="border-primaryGray border border-solid rounded-md p-2 focus:outline-none"
            v-model="payInfo.payMethod" name="" id="">
            <option v-for="item in payMethods" :key="item" :value="item">{{ item }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

