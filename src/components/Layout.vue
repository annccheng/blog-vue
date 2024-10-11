<script setup>
import Logo from '@/assets/image/logo.jpg'
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
import { setLanguage } from "@/utils/localStorage";

const { t, locale } = useI18n()

const languageList = {
  zh: 'zh_TW',
  en: 'en_US'
}
const changeLanguage = () => {
  const newLanguage = locale.value === languageList.zh ? languageList.en : languageList.zh
  setLanguage(newLanguage)
  locale.value = newLanguage
}

const router = useRouter()
const changePage = (url) => (
  router.push(url)
)
</script>


<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-white">
      <div class="container mx-auto h-[60px] flex items-center justify-between">
        <h1 @click="changePage('/home')" class="text-themeColor cursor-pointer">
          <i class="fa-solid fa-house text-xl mr-2"></i>
          <span class="font-roboto">Rent me</span>
        </h1>
        <ul class="flex text-xl">
          <li @click="changeLanguage">
            <i class="fa-solid fa-globe mr-4"></i>
          </li>
          <li>
            <i class="fa-regular fa-moon mr-4"></i>
          </li>
          <li @click="changePage('/login')">
            <i class="fa-solid fa-user cursor-pointer"></i>
          </li>
        </ul>
      </div>
    </header>
    <ul class="flex justify-center sticky top-0  bg-white shadow">
      <li class="px-5 py-4">
        <a href="#">{{ t('fullFloor') }}</a>
      </li>
      <li class="px-5 py-4">
        <a href="#">{{ t('deluxeSuite') }}</a>
      </li>
      <li class="px-5 py-4">
        <a href="#">{{ t('luxuryVilla') }}</a>
      </li>
      <li class="px-5 py-4">
        <a href="#">{{ t('duplexHouse') }}</a>
      </li>
      <li class="px-5 py-4">
        <a href="#">{{ t('room') }}</a>
      </li>
    </ul>
    <div class="container mx-auto flex-1">
      <slot />
    </div>
    <footer class="py-2 bg-[#eee]">
      <p class="text-center">2024 My Website. All rights reserved.</p>
    </footer>
  </div>
</template>