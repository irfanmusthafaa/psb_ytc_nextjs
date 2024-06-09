import { API_ENDPOINT } from "@/utils/api-endpoint";
import http from "@/utils/http";


const EditDocument = async (id:string,input:any) => {
    return await http.put(`${API_ENDPOINT.EDIT_DOCUMENT}/${id}`, input);
};

export { EditDocument };