"use client"

import { API_ENDPOINT } from "@/utils/api-endpoint";
import httpAdmin from "@/utils/http-admin";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";


const GetDetailUser = async ({ queryKey }: QueryFunctionContext) => {
    const [_key, _params] = queryKey as [string, any]
    try {
        const { data } = await httpAdmin.get(_key, { params: _params });
        return data ;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
};

const useGetDetailUser = (options?: any) => {
    const params = useParams();
    const {slug} = params
  return useQuery([`${API_ENDPOINT.GET_DETAIL_USER}/${slug}`, options], GetDetailUser);
};

export { GetDetailUser, useGetDetailUser };
