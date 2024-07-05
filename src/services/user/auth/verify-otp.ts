import { API_ENDPOINT } from "@/utils/api-endpoint";
import { CookiesKey, CookiesStorage } from "@/utils/cookies";
import http from "@/utils/http";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const VerifyOtp = async (input: any) => {
  try {
    const result = await http.post(API_ENDPOINT.VERIFY_OTP, input);
    console.log(result, "result");
    return result;
  } catch (error:any) {
    if (error) {
        console.log(error, "error")
      toast.error(error.response.data.data.message);
    } else {
      toast.error("Register Failed");
    }
    throw error; // Jangan lupa untuk melempar kembali kesalahan agar dapat ditangani di tempat lain jika perlu.
  }
};


const useVerifyOtp = () => {
  return useMutation(VerifyOtp);
};

export { VerifyOtp, useVerifyOtp };