<script setup>

</script>

<template>
  <div class="flex overflow-hidden shadow-lg mt-6 text-lg item-center rounded-md mb-8">
    <img class="w-[550px] h-[180px] object-cover" src="@/assets/image/pic 2.jpg" alt="">
    <div class="pl-4">
      <div class="flex justify-between items-center">
        <h3 class="font-bold">台灣南投</h3>
        <div class="flex items-center">
          <i class="fa-solid fa-star"></i>
          <span class="ml-1">5.0</span>
        </div>
      </div>
      <div class="mt-3">
        <span class="bg-themeColor border-themeColor text-white rounded-sm mr-2">裝潢設計佳</span>
        <span class="bg-themeColor border-themeColor text-white rounded-sm mr-2">光線充足</span>
        <span class="bg-themeColor border-themeColor text-white rounded-sm mr-2">家具品質優</span>
        <span class="bg-themeColor border-themeColor text-white rounded-sm">通風佳</span>
      </div>
      <p class="text-primaryGray mt-3">房東：Winter</p>
      <span class="mt-3">$8.500 TWD晚</span>
    </div>
  </div>
  <div class="flex -mx-2 mb-5">
    <div class="w-1/2 px-2">
      <div class="border border-solid border-primaryGray text-lg item-center rounded-md h-[330px] p-3">
        <h3 class="font-bold">訂單資料</h3>
        <hr class="text-primaryGray">
        <div class="flex flex-col mt-3">
          <label for="date">日期</label>
          <span>10月14日至10月16日</span>
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
    </div>
    <div class="w-1/2 px-2">
      <div class="border border-solid border-primaryGray text-lg item-center rounded-md h-[330px] p-3">
        <h3 class="font-bold">訂購人資訊</h3>
        <hr class="text-primaryGray">
        <div class="flex flex-col mt-3">
          <label for="date">手機</label>
          <span>0975265789</span>
        </div>
        <div class="flex flex-col mt-3">
          <label for="date">Email</label>
          <span>123abc@gmail.com</span>
        </div>
        <div class="flex flex-col mt-3">
          <label for="date">支款方式</label>
          <span>信用卡</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
