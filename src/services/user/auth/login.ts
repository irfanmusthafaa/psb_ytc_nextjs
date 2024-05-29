import { API_ENDPOINT } from "@/utils/api-endpoint";
import { CookiesKey, CookiesStorage } from "@/utils/cookies";
import http from "@/utils/http";
import { useMutation } from "@tanstack/react-query";


const LoginUser = async (input: any) => {
  return await http.post(API_ENDPOINT.LOGIN_USER, input).then((result) => {
    console.log(result, "result")
    CookiesStorage.set(CookiesKey.AuthToken, result.data.data);
    // CookiesStorage.set(CookiesKey.User, decodeURIComponent(result.data.data));
    return result;
  });
};

const useLoginUser = () => {
  return useMutation(LoginUser);
};

export { LoginUser, useLoginUser };