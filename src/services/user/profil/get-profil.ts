import { API_ENDPOINT } from "@/utils/api-endpoint";
import http from "@/utils/http";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";


const GetProfileUser = async ({ queryKey }: QueryFunctionContext) => {
    const [_key, _params] = queryKey as [string, any]
    try {
        const { data } = await http.get(_key, { params: _params });
        return data.data ;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
};

const useGetProfileUser = (options?: any) => {
  return useQuery([API_ENDPOINT.PROFILE, options], GetProfileUser);
};

export { GetProfileUser, useGetProfileUser };
