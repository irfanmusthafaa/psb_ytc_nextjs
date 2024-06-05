import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const editSyaratPendaftaran = async (id:string, input:any) => {
  return await httpAdmin.put(`${API_ENDPOINT.EDIT_SYARAT_PENDAFTARAN}/${id}`, input);
};

export { editSyaratPendaftaran };