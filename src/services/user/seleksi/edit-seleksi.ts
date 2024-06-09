import { API_ENDPOINT } from "@/utils/api-endpoint";
import http from "@/utils/http";


const EditSeleksi = async (id:string,input:any) => {
    return await http.put(`${API_ENDPOINT.EDIT_SELEKSI}/${id}`, input);
};

export { EditSeleksi };