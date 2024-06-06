import { useMutation } from "@tanstack/react-query";
import httpAdmin from "@/utils/http-admin";
import { API_ENDPOINT } from "@/utils/api-endpoint";


const deleteCabang = async (id: string) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DELETE_CABANG}/${id}`);
    return response;
  } catch (error) {
    return null;
  }
};

const usedeleteCabang = () => {
  return useMutation(deleteCabang);
};

export { deleteCabang, usedeleteCabang };