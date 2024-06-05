import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const createSoalSeleksi = async (input:any) => {
  return await httpAdmin.post(API_ENDPOINT.CREATE_SOAL_SELEKSI, input);
};

export { createSoalSeleksi };