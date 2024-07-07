import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";


const CreateTimeQuiz = async (input:any) => {
  return await httpAdmin.post(API_ENDPOINT.GET_CONFIG_SUBMIT, input);
};

export { CreateTimeQuiz };