import axios from "axios" // 引入 axios

export const userApi = {
  login: async() => {
    const { data, status } = await axios.post('https://dummyjson.com/auth/login', { username, password })
    return { data: data, code: status }
  },
}