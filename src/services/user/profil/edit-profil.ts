import { API_ENDPOINT } from "@/utils/api-endpoint";
import http from "@/utils/http";


const UpdateProfile = async (input:any) => {
  return await http.put(`${API_ENDPOINT.PROFILE}`, input);
};

export { UpdateProfile };