import { API_ENDPOINT } from "@/utils/api-endpoint";
import http from "@/utils/http";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";


const GetSoalSeleksi = async ({ queryKey }: QueryFunctionContext) => {
    const [_key, _params] = queryKey as [string, any]
    try {
        const { data } = await http.get(_key, { params: _params });
        return data.data ;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
};

const useGetSoalSeleksi = (options?: any) => {
  return useQuery([API_ENDPOINT.GET_SOAL_SELEKSI, options], GetSoalSeleksi);
};

export { GetSoalSeleksi, useGetSoalSeleksi };
