import { useMutation } from "@tanstack/react-query";
import httpAdmin from "@/utils/http-admin";
import { API_ENDPOINT } from "@/utils/api-endpoint";


const deleteFasilitas = async (id: string) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DELETE_FASILITAS}/${id}`);
    return response;
  } catch (error) {
    return null;
  }
};

const usedeleteFasilitas = () => {
  return useMutation(deleteFasilitas);
};

export { deleteFasilitas, usedeleteFasilitas };