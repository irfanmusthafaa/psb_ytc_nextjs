import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const createAlurPendaftaran = async (input:any) => {
  return await httpAdmin.post(API_ENDPOINT.CREATE_ALUR_PENDAFTARAN, input);
};

export { createAlurPendaftaran };