import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const createCabang = async (input:any) => {
  return await httpAdmin.post(API_ENDPOINT.CREATE_CABANG, input);
};

export { createCabang };