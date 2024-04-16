import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: "https://api.github.com/users/Rian-O-A",
  // outras configurações do axios
});



api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    
    return Promise.reject(error);
  }
);

export default api;
