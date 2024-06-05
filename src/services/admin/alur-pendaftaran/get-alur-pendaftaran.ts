import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";


const GetAlurPendaftaran = async ({ queryKey }: QueryFunctionContext) => {
    const [_key, _params] = queryKey as [string, any]
    try {
        const { data } = await httpAdmin.get(_key, { params: _params });
        return data.data ;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
};

const useGetAlurPendaftaran = (options?: any) => {
  return useQuery([API_ENDPOINT.GET_ALUR_PENDAFTARAN, options], GetAlurPendaftaran);
};

export { GetAlurPendaftaran, useGetAlurPendaftaran };
