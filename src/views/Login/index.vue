<script setup>
import Layout from '@/components/Layout.vue'
import { reactive, onMounted } from 'vue'
import { userApi } from "@/api/user"
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue';
import { setToken, getToken } from '@/utils/localStorage'

// const formData = reactive({
//   username: '',
//   password: ''
// })

// const router = useRouter()
// const goToHome = () => {
//   router.push('/')
// }
// const token = ref(getToken())


// const submit = async(e) => {
//   e.preventDefault()
//   try {
//     const { data, code } = await userApi.login(formData.username, formData.password)
//     if (code === 200) {
//       const { token } = data
//       setToken(token)
//       message.success('登入成功')
//       goToHome()
//     }
//   } catch(err) {
//     message.error('使用者名稱或密碼錯誤')
//   }
// }

// onMounted(() => {
//   if (token.value) {
//     goToHome()
//   }
// })
</script>

<template>
  <form class="flex flex-col items-center justify-center mt-[300px] w-[400px] mx-auto">
    <div class="flex mb-4 items-center">
      <label class="w-[100px] block text-left mr-2" for="username">使用者名稱</label>
      <input type="text" id="username" class="px-2 py-1 w-56 rounded border border-solid border-primaryGray focus:outline-0" />
    </div>
    <div class="flex mb-4 items-center">
      <label class="w-[100px] block text-left mr-2" for="password">密碼</label>
      <input type="password" id="password" class="px-2 py-1 w-56 rounded border border-solid border-primaryGray focus:outline-0" />
    </div>
    <button
      class="px-5 py-1 bg-themeColor rounded-sm text-white disabled:bg-gray-200 disabled:text-gray-300 cursor-pointer"
      type="submit">登入</button>
  </form>
</template>

<style scoped>

</style>
