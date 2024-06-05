import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const editFasilitas = async (id:string, input:any) => {
  return await httpAdmin.put(`${API_ENDPOINT.EDIT_FASILITAS}/${id}`, input);
};

export { editFasilitas };