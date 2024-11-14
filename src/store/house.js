import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { message } from "ant-design-vue";

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
    const favorite = ref({
      hot: [],
      house: [],
    });
    const setFavorite = (id, category = "house") => {
      const isFavorite = favorite.value[category].some(
        (item) => item.id === id
      );

      if (isFavorite) {
        const newFavorite = favorite.value[category].filter(
          (item) => item.id !== id
        );
        favorite.value = {
          ...favorite.value,
          [category]: newFavorite,
        };
        message.success("移除收藏！");
      } else {
        let product = {};
        if (category === "house") {
          product = houses.value.find((item) => item.id === id);
        } else {
          product = hotHouses.value.find((item) => item.id === id);
        }
        favorite.value = {
          ...favorite.value,
          [category]: [...favorite.value[category], product],
        };
        message.success("加入收藏！");
      }
    };
    return {
      hotHouses,
      houses,
      setHotHouses,
      setHouses,
      favorite,
      setFavorite,
    };
  },
  {
    persist: true,
  }
);
