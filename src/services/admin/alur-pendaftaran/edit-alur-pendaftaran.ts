import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const editAlurPendaftaran = async (id:string, input:any) => {
  return await httpAdmin.put(`${API_ENDPOINT.EDIT_ALUR_PENDAFTARAN}/${id}`, input);
};

export { editAlurPendaftaran };