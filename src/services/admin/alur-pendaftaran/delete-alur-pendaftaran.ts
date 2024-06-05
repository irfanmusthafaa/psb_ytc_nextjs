import { useMutation } from "@tanstack/react-query";
import httpAdmin from "@/utils/http-admin";
import { API_ENDPOINT } from "@/utils/api-endpoint";


const deleteAlurPendaftaran = async (id: string) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DELETE_ALUR_PENDAFTARAN}/${id}`);
    return response;
  } catch (error) {
    return null;
  }
};

const usedeleteAlurPendaftaran = () => {
  return useMutation(deleteAlurPendaftaran);
};

export { deleteAlurPendaftaran, usedeleteAlurPendaftaran };