<script setup>
import Layout from '@/components/Layout.vue';
import { reactive, onMounted, ref } from 'vue';
import { userApi } from "@/api/user";
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { useI18n } from 'vue-i18n';
import { useUserStore } from '@/store/user.js'

const { t } = useI18n()
const userStore = useUserStore()

const formData = reactive({
  username: '',
  password: ''
})

const router = useRouter()
const goToHome = () => {
  router.push('/')
}

const token = ref(userStore.token)

const submit = async (e) => {
  e.preventDefault()
  try {
    const { data, code } = await userApi.login(formData.username, formData.password)
    if (code === 200) {
      const { accessToken, firstName } = data
      userStore.setToken(accessToken)
      userStore.setUserName(firstName)
      message.success(t('login_success'))
      goToHome()
    }
  } catch (err) {
    console.log(err);
    message.error(t('login_fail'))
  }
}

onMounted(() => {
  if (token.value) {
    goToHome()
  }
})
</script>

<template>
  <form class="flex flex-col items-center justify-center mt-[200px] w-[420px] mx-auto" @submit="submit">
    <div class="flex mb-4 items-center">
      <label class="w-[150px] block text-left mr-2" for="username">{{ t('username') }}</label>
      <input v-model="formData.username" type="text" id="username"
        class="px-2 py-1 w-56 rounded border border-solid border-primaryGray focus:outline-0"
        :placeholder="t('username_placeholder')" />
    </div>
    <div class="flex mb-4 items-center">
      <label class="w-[150px] block text-left mr-2" for="password">{{ t('password') }}</label>
      <input v-model="formData.password" type="password" id="password"
        class="px-2 py-1 w-56 rounded border border-solid border-primaryGray focus:outline-0"
        :placeholder="t('password')" />
    </div>
    <button
      class="px-5 py-1 bg-themeColor rounded-sm text-white disabled:bg-bgGray disabled:text-textGray cursor-pointer"
      type="submit" :disabled="!formData.username || !formData.password">{{ t('login') }}</button>
  </form>
</template>

<style scoped>

</style>
