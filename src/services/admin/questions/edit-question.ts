import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const EditQuestion = async (id:string, input:any) => {
  return await httpAdmin.put(`${API_ENDPOINT.EDIT_QUESTION}/${id}`, input);
};

export { EditQuestion };