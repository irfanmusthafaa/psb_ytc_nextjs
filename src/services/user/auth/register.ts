import { API_ENDPOINT } from "@/utils/api-endpoint";
import http from "@/utils/http";


const createRegister = async (input:any) => {
  return await http.post(`${API_ENDPOINT.REGISTER}`, input);
};

export { createRegister };