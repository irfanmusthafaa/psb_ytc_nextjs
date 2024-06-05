import { useMutation } from "@tanstack/react-query";
import httpAdmin from "@/utils/http-admin";
import { API_ENDPOINT } from "@/utils/api-endpoint";


const deleteSyaratPendaftaran = async (id: string) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DELETE_SYARAT_PENDAFTARAN}/${id}`);
    return response;
  } catch (error) {
    return null;
  }
};

const usedeleteSyaratPendaftaran = () => {
  return useMutation(deleteSyaratPendaftaran);
};

export { deleteSyaratPendaftaran, usedeleteSyaratPendaftaran };