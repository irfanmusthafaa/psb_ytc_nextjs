import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const createSyaratPendaftaran = async (input:any) => {
  return await httpAdmin.post(API_ENDPOINT.CREATE_SYARAT_PENDAFTARAN, input);
};

export { createSyaratPendaftaran };