import { API_ENDPOINT } from "@/utils/api-endpoint";
import { CookiesKey, CookiesStorage } from "@/utils/cookies";
import http from "@/utils/http";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const RegisterUser = async (input: any) => {
  try {
    const result = await http.post(API_ENDPOINT.REGISTER, input);
    return result;
  } catch (error:any) {
    // if (error) {
    //   toast.error(error.response.data.data.message);
    // } 
    throw error;
  }
};


const useRegisterUser = () => {
  return useMutation(RegisterUser);
};

export { RegisterUser, useRegisterUser };