import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const editStatusUser = async (id:string, input:any) => {
  return await httpAdmin.put(`${API_ENDPOINT.EDIT_STATUS_USER}/${id}`, input);
};

export { editStatusUser };