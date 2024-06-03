import axios from "axios";
import { CookiesKey, CookiesStorage } from "./cookies";

const httpAdmin = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY as string,
  timeout: 30000,
  headers: {
    Accept: "application/json",
  },
});

httpAdmin.interceptors.request.use((config: any) => {
  if (config.data instanceof FormData) {
    config.headers = {
      ...config.headers,
      "Content-Type": "multipart/form-data",
    };
  } else {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };
  }

  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${CookiesStorage.get(CookiesKey.TokenAdmin) ? CookiesStorage.get(CookiesKey.TokenAdmin) : ""}`,
  };
  return config;
});

export default httpAdmin;