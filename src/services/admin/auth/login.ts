
import { API_ENDPOINT } from "@/utils/api-endpoint";
import { CookiesKey, CookiesStorage } from "@/utils/cookies";
import httpAdmin from "@/utils/http-admin";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const LoginAdmin = async (input: any) => {
  try {
    const result = await httpAdmin.post(API_ENDPOINT.LOGIN_ADMIN, input);
    console.log(result, "result");
    CookiesStorage.set(CookiesKey.TokenAdmin, result.data.data);
    return result;
  } catch (error:any) {
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred while logging in.");
    }
    throw error;
  }
};


const useLoginAdmin = () => {
  return useMutation(LoginAdmin);
};

export { LoginAdmin, useLoginAdmin };