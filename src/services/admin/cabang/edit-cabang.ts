import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const editCabang = async (id:string, input:any) => {
  return await httpAdmin.put(`${API_ENDPOINT.EDIT_CABANG}/${id}`, input);
};

export { editCabang };