import { API_ENDPOINT } from "@/utils/api-endpoint";
import { CookiesKey, CookiesStorage } from "@/utils/cookies";
import http from "@/utils/http";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const LoginUser = async (input: any) => {
  try {
    const result = await http.post(API_ENDPOINT.LOGIN_USER, input);
    console.log(result, "result");
    CookiesStorage.set(CookiesKey.AuthToken, result.data.token);
    CookiesStorage.set(CookiesKey.User, decodeURIComponent(result.data.data.email));
    return result;
  } catch (error:any) {
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred while logging in.");
    }
    throw error; // Jangan lupa untuk melempar kembali kesalahan agar dapat ditangani di tempat lain jika perlu.
  }
};


const useLoginUser = () => {
  return useMutation(LoginUser);
};

export { LoginUser, useLoginUser };