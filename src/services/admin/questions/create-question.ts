import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const CreateQuestion = async (input:any) => {
  return await httpAdmin.post(API_ENDPOINT.CREATE_QUESTION, input);
};

export { CreateQuestion };