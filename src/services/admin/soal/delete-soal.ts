import { useMutation } from "@tanstack/react-query";
import httpAdmin from "@/utils/http-admin";
import { API_ENDPOINT } from "@/utils/api-endpoint";


const deleteSoalSeleksi = async (id: string) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DELETE_SOAL_SELEKSI}/${id}`);
    return response;
  } catch (error) {
    return null;
  }
};

const usedeleteSoalSeleksi = () => {
  return useMutation(deleteSoalSeleksi);
};

export { deleteSoalSeleksi, usedeleteSoalSeleksi };