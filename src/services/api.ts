import axios from "axios";
import { useAuthStore } from "../store/authStore";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/v1",
});

//Interceptor
API.interceptors.request.use((config) => {
  const { user } = useAuthStore.getState();
  if (user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default API;
