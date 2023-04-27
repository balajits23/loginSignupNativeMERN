import axios from "axios";
import { ActivityIndicator } from "react-native";

const axiosInstance = axios.create({
  baseURL: "http://10.10.21.165:9000/",
});

axiosInstance.interceptors.request.use(async (config) => {
  <ActivityIndicator size="large" />;
  config.headers = {
    "Content-Type": "application/json",
    ...config.headers,
  };
  return config;
});

axiosInstance.interceptors.response.use(
  async (response) => {
    <ActivityIndicator size="large" />;
    return response;
  },
  async (err) => {
    return Promise.reject(err);
  }
);

export { axiosInstance };
