import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useHouseStore = defineStore(
  "house",
  () => {
    const hotHouses = ref([]);
    const setHotHouses = (newHotHouses) => {
      hotHouses.value = newHotHouses;
    };
    const houses = ref([]);
    const setHouses = (newHouses) => {
      houses.value = newHouses;
    };
    return {
      hotHouses,
      houses,
      setHotHouses,
      setHouses,
    };
  },
  {
    persist: true,
  }
);
