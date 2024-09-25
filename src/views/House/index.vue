<script setup>
import Layout from '@/components/Layout.vue'
</script>

<template>
  <div class="mt-3">
    <div class="flex mb-3">
      <div class="w-2/3 h-[600px] mr-3">
        <img class="w-full h-full object-cover"
          src="https://img1.591.com.tw/house/2024/09/15/172637678008847807.jpg!1000x.water2.jpg" alt="">
      </div>
      <div class="w-1/3">
        <img class="w-full h-[200px] pb-3"
          src="https://img1.591.com.tw/house/2024/03/29/171167258653420205.jpg!1000x.water2.jpg" alt="">
        <img class="w-full h-[200px] pb-3"
          src="https://img2.591.com.tw/house/2024/09/15/172637682086996601.jpg!1000x.water2.jpg" alt="">
        <img class="w-full h-[200px]"
          src="https://img2.591.com.tw/house/2024/09/15/172637682086996601.jpg!1000x.water2.jpg" alt="">
      </div>
    </div>
    <div class="flex">
      <div class="w-2/3 mr-3">
        <div class="flex justify-between">
          <div>
            <h3 class="font-bold text-2xl">台灣新北 24H管理高樓2房</h3>
            <span class="text-lg">4人 . 2間臥室 . 2張床 . 一間衛浴</span>
          </div>
          <div class="font-bold text-2xl">
            <i class="fa-solid fa-star"></i>
            <span class="ml-1 text-lg">5.0</span>
          </div>
        </div>
        <div class="my-2 flex border-solid border-b border-[#000] pb-3">
          <span class="p-1 bg-themeColor text-[#fff] mr-2 rounded-sm">近捷運</span>
          <span class="p-1 bg-themeColor text-[#fff] mr-2 rounded-sm">學區房</span>
          <span class="p-1 bg-themeColor text-[#fff] mr-2 rounded-sm">有管理室</span>
          <span class="p-1 bg-themeColor text-[#fff] mr-2 rounded-sm">附近有公園</span>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-bold"> 房屋介紹</h3>
          <p>
            這間位於台灣的房屋擁有許多優點，無論是地點還是生活機能都十分優越。首先，它距離捷運站僅需步行幾分鐘，交通非常方便，適合通勤族或經常外出的家庭。其次，房屋屬於優質學區，附近有知名學校，為家中有學齡兒童的家庭提供了理想的教育環境。
            房屋社區內設有專業管理室，提供24小時安保與管理服務，保障住戶的安全與生活品質。此區域的居住環境相當寧靜，附近有公園，不僅讓您能享受休閒散步的時光，還提供了運動和親子活動的好去處。這些條件讓這間房屋成為一個兼具生活便利與高品質環境的理想選擇。
          </p>
        </div>
      </div>
      <div class="w-1/3">
        <div class="shadow-lg rounded-lg p-3">
          <p class="font-bold text-2xl text-center">$4,007 TWD晚</p>
          <button class=" bg-themeColor px-3 py-3 rounded-lg w-full text-[#fff] mt-3">預定</button>
          <input class="border border-primaryGray border-solid w-full h-14 rounded-[16px] focus:outline-0 mt-3"
          type="text" placeholder="入住日期">
          <input class="border border-primaryGray border-solid w-full h-14 rounded-[16px] focus:outline-0 mt-3"
          type="text" placeholder="退住日期">
          <input class="border border-primaryGray border-solid w-full h-14 rounded-[16px] focus:outline-0 mt-3"
          type="text" placeholder="人數">
        </div>
      </div>
    </div>
    <div>
      <div class="shadow p-2 mb-3">
          <div class="flex">
            <div class="mr-4">
              <i class="fa-solid fa-user mr-1"></i>
              <span>Chole</span>
            </div>
            <div class="mb-4">
              <i class="fa-solid fa-star"></i>
              <span class="ml-1">5.0</span>
            </div>
          </div>
          <p>
            這家住宿環境整潔，房間空間寬敞，且設施齊全。床鋪舒適，能保證一夜好眠。地理位置優越，周邊交通便利，距離主要景點或捷運站非常近，適合觀光客或商務旅客入住。服務人員非常友善且樂於助人，無論是入住手續、提供資訊或解決問題都非常有效率。
          </p>
      </div>
      <div class="shadow p-2 mb-3">
          <div class="flex">
            <div class="mr-4">
              <i class="fa-solid fa-user mr-1"></i>
              <span>Ken</span>
            </div>
            <div class="mb-4">
              <i class="fa-solid fa-star"></i>
              <span class="ml-1">4.0</span>
            </div>
          </div>
          <p>
            公共空間也設計得很溫馨，提供舒適的休息區域。附近有許多餐廳與便利商店，讓用餐和購物都非常方便。唯一可能的小缺點是房間隔音稍差，對於需要絕對安靜的人來說，可能需要攜帶耳塞。不過整體來說，這家住宿的性價比高，無論是短期或長期停留，都是一個不錯的選擇。
          </p>
      </div>
      <div class="shadow p-2 mb-3">
          <div class="flex">
            <div class="mr-4">
              <i class="fa-solid fa-user mr-1"></i>
              <span>Connie</span>
            </div>
            <div class="mb-4">
              <i class="fa-solid fa-star"></i>
              <span class="ml-1">4.5</span>
            </div>
          </div>
          <p>
            這家住宿整體來說非常令人滿意。房間設計時尚簡約，保持著極高的清潔度，讓人感到舒適和放鬆。床鋪軟硬適中，枕頭也很舒適，能保證一夜好眠。浴室設施現代且水壓穩定，提供熱水的時間充足，讓洗澡成為一種享受。
          </p>
      </div>
      <div class="shadow p-2 mb-3">
          <div class="flex">
            <div class="mr-4">
              <i class="fa-solid fa-user mr-1"></i>
              <span>Sam</span>
            </div>
            <div class="mb-4">
              <i class="fa-solid fa-star"></i>
              <span class="ml-1">5.0</span>
            </div>
          </div>
          <p>
            住宿位置相當便利，靠近市區，步行可達多個景點和餐飲場所，交通也非常方便。即使沒有車，也能輕鬆探索周邊環境。酒店服務人員態度親切，入住和退房手續都處理得非常迅速且專業，特別是在提供旅遊建議和協助時，表現出色。
          </p>
      </div>
      <div class="flex mb-6">
          <p>685</p>
          <span>人留言</span>
      </div>
    </div>

    <h2 class="text-lg font-bold">住宅地圖</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3614.3603709992462!2d121.6115845753771!3d25.0557720778023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzIwLjgiTiAxMjHCsDM2JzUxLjAiRQ!5e0!3m2!1szh-TW!2stw!4v1726770186723!5m2!1szh-TW!2stw"
      class="w-full h-[600px]" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>


<style scoped>

</style>


