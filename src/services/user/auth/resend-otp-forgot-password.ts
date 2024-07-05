import { API_ENDPOINT } from "@/utils/api-endpoint";
import { CookiesKey, CookiesStorage } from "@/utils/cookies";
import http from "@/utils/http";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const ResendOtpForgotPassword = async (input: any) => {
  try {
    const result = await http.post(API_ENDPOINT.RESEND_OTP_FORGOT_PASSWORD, input);
    console.log(result, "result");
    return result;
  } catch (error:any) {
    // if (error) {
    //   toast.error(error?.response?.data?.data?.message);
    // } else {
    //   toast.error("Resend OTP Failed");
    // }
    throw error; // Jangan lupa untuk melempar kembali kesalahan agar dapat ditangani di tempat lain jika perlu.
  }
};


const useResendOtpForgotPassword = () => {
  return useMutation(ResendOtpForgotPassword);
};

export { ResendOtpForgotPassword, useResendOtpForgotPassword };