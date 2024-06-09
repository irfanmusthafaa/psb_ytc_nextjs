import { API_ENDPOINT } from "@/utils/api-endpoint";
import http from "@/utils/http";


const EditInfaq = async (id:string,input:any) => {
    return await http.put(`${API_ENDPOINT.EDIT_INFAQ}/${id}`, input);
};

export { EditInfaq };