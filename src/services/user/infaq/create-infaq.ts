import { API_ENDPOINT } from "@/utils/api-endpoint";
import http from "@/utils/http";


const createInfaq = async (input:any) => {
  return await http.post(`${API_ENDPOINT.CREATE_INFAQ}`, input);
};

export { createInfaq };