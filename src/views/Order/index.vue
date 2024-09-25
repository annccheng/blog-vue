<script setup></script>

<template>
  <div class="border border-solid border-primaryGray mt-6 text-lg item-center p-3 rounded-md h-[230px] mb-2">
    <h3 class="font-bold">訂單資料</h3>
    <hr class="text-primaryGray">
    <div class="flex flex-col mt-3">
      <label for="date">日期</label>
      <input id="date" type="text" class="border-primaryGray border border-solid rounded-md p-2 focus:outline-none">
    </div>
    <div class="flex mt-3">
      <p class="mr-3">金額/晚</p>
      <span>$5476</span>
    </div>
    <div class="flex mt-3">
      <p class="mr-3">總價</p>
      <span>$10952</span>
    </div>
  </div>
  <div class="border border-solid border-primaryGray mt-6 text-lg item-center p-3 rounded-md h-[330px] mb-2">
    <h3 class="font-bold">訂購人資訊</h3>
    <hr class="text-primaryGray">
    <div class="flex flex-col mt-3">
      <label for="date">手機</label>
      <input id="date" type="text" class="border-primaryGray border border-solid rounded-md p-2 focus:outline-none">
    </div>
    <div class="flex flex-col mt-3">
      <label for="date">Email</label>
      <input id="date" type="text" class="border-primaryGray border border-solid rounded-md p-2 focus:outline-none">
    </div>
    <div class="flex flex-col mt-3">
      <label for="date">支款方式</label>
      <input id="date" type="text" class="border-primaryGray border border-solid rounded-md p-2 focus:outline-none">
    </div>
  </div>
  <button class="bg-themeColor px-3 py-3 rounded-lg w-full text-[#fff] mt-5">結帳</button>
</template>

<style scoped>

</style>
