import axios from "axios";

export const homeApi = {
  getHouses: async () => {
    const { data } = await axios.get("/mock/houses");
    return data;
  },
  getHotHouses: async () => {
    const { data } = await axios.get("/mock/hotHouses");
    return data;
  },
};
