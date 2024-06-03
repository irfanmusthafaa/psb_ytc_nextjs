import { API_ENDPOINT } from "@/utils/api-endpoint";
import http from "@/utils/http";


const createDocument = async (input:any) => {
  return await http.post(`${API_ENDPOINT.CREATE_DOCUMENT}`, input);
};

export { createDocument };