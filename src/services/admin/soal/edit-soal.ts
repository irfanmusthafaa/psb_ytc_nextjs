import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const editSoalSeleksi = async (id:string, input:any) => {
  return await httpAdmin.put(`${API_ENDPOINT.EDIT_SOAL_SELEKSI}/${id}`, input);
};

export { editSoalSeleksi };