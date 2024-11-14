import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref("");
    const setToken = (newToken) => {
      token.value = newToken;
    };
    const userName = ref("");
    const setUserName = (name) => {
      userName.value = name;
    };
    const orders = ref([]);
    const setOrders = (newOrders) => {
      orders.value = newOrders;
    };
    return {
      token,
      setToken,
      userName,
      setUserName,
      orders,
      setOrders,
    };
  },
  {
    persist: true,
  }
);
