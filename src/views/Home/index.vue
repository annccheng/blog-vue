<script setup>
import Layout from '@/components/Layout.vue'
import { ref } from 'vue'
import HotCard from '@/components/HotCard.vue'
import DescribePage from '@/components/describePage.vue';

const houseData = [
  {
    image: 'https://img2.591.com.tw/house/2024/08/02/172259070595347108.jpg!400x300.jpg',
    city: '台灣台北',
    rate: '4.0',
    owner: 'Day',
    price: '6.838'
  },
  {
    image: 'https://img2.591.com.tw/house/2024/08/24/172446989621201803.jpg!400x300.jpg',
    city: '台灣台中',
    rate: '4.6',
    owner: 'Jenny',
    price: '7.389'
  },
  {
    image: 'https://img2.591.com.tw/house/2024/09/12/172613199508395401.jpg!400x300.jpg',
    city: '台灣桃園',
    rate: '4.9',
    owner: 'Amy',
    price: '7.581'
  },
  {
    image: 'https://img2.591.com.tw/house/2024/08/24/172449873065961401.jpg!400x300.jpg',
    city: '台灣新竹',
    rate: '4.0',
    owner: 'Molly',
    price: '8.964'
  }
]

const cities = ['台北', '新竹', '台中', '桃園', '雲林', '彰化', '高雄', '花蓮', '屏東']

const describeData = [
  {
    image: 'https://img2.591.com.tw/house/2024/09/06/172563718632442802.jpg!400x300.jpg',
    title: '高樓有景兩房',
    pointOne: '近捷運',
    pointTwo: '裝潢設計佳',
    pointThree: '光線充足',
    pointFour: '家具品質優',
    slogan: '公園綠地',
    city: '台灣新北',
    owner: 'Ginny',
    price: '8.547',
  },
  {
    image: 'https://img1.591.com.tw/house/2024/09/06/172560315325430502.jpg!400x300.jpg',
    title: '精品兩房小豪宅',
    pointOne: '社區非常安靜',
    pointTwo: '附近有便利商店',
    pointThree: '廚房設備齊全',
    pointFour: '陽台風景絕佳',
    slogan: '豪華小宅',
    city: '台灣桃園',
    owner: 'Sally',
    price: 7.658
  },
  {
    image: 'https://img1.591.com.tw/house/2024/06/30/171974166578496302.jpg!400x300.jpg',
    title: '邊間鋼骨電梯四房',
    pointOne: '隔音效果很好',
    pointTwo: '儲物空間充足',
    pointThree: '通風佳',
    pointFour: '房屋結構堅固',
    slogan: '歐風建築',
    city: '台灣宜蘭',
    owner: 'Anna',
    price: '9.687',
  },
  {
    image: 'https://img1.591.com.tw/house/2024/09/10/172595498207813003.jpg!400x300.jpg',
    title: '日系質感露臺2房車',
    pointOne: '鄰居和善',
    pointTwo: '價格合理',
    pointThree: '安全措施完善',
    pointFour: '水壓和熱水供應穩定',
    slogan: '採光佳',
    city: '台灣高雄',
    owner: 'Jason',
    price: '8.154',
  },
  {
    image: 'https://img1.591.com.tw/house/2024/09/04/172541290653272908.jpg!400x300.jpg',
    title: '陽光101景觀邸',
    pointOne: '公共設施完備',
    pointTwo: '儲物空間充裕',
    pointThree: '附近有公園',
    pointFour: '學區非常好',
    slogan: '交通便利',
    city: '台灣台北',
    owner: 'Yvonne',
    price: '7.852',
  },
]
</script>



<template>
  <div class="flex">
    <main class="flex-1 md:pr-3 border border-solid border-primaryGray">
      <section>
        <h1 class="font-bold text-xl mb-2">熱門物件</h1>
        <div class="flex flex-wrap -mx-2 mb-5">
          <div v-for="(item, idx) in houseData" :key="idx" class="lg:w-1/4 md:w-1/2 w-full px-2 lg:mb-0 mb-3">
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
        <div class="flex border-b border-solid border-primaryGray pb-9 mb-9">
          <div v-for="(item, idx) in describeData" :key="idx">
            <describe-page
              :image="item.image"
              :title="item.title" 
              :pointOne="item.pointOne" 
              :pointTwo="item.pointTwo"
              :pointThree="item.pointThree"
              :pointFour="item.pointFour"
              :slogan="item.slogan"
              :city="item.city" :owner="item.owner" :price="item.price" />
          </div>
        </div>
      </section>
    </main>
    <nav class="bg-yellow-200 w-[180px] border border-solid border-pink md:block hidden">
      <h1 class="font-bold text-xl mb-2">搶手物件</h1>
      <div class="overflow-hidden rounded-lg shadow-md">
        <img class="w-full h-[180px] object-cover" src="@/assets/image/pic 4.jpg" alt="">
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
    </nav>
  </div>

  <div>
    <footer class="footer">
      <p>2024 My Website. All rights reserved.</p>
    </footer>
  </div>
</template>


<style scoped>

</style>
