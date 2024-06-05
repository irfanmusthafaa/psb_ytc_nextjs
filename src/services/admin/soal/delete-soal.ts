import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const deleteSoalSeleksti = async (id:string, input:any) => {
  return await httpAdmin.delete(`${API_ENDPOINT.DELETE_SOAL_SELEKSI}/${id}`, input);
};

export { deleteSoalSeleksti };