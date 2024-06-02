import { API_ENDPOINT } from "@/utils/api-endpoint";
import http from "@/utils/http";


const createSeleksi = async (input:any) => {
  return await http.post(`${API_ENDPOINT.CREATE_SELEKSI}`, input);
};

export { createSeleksi };