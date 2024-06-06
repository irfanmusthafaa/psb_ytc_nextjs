import { useMutation } from "@tanstack/react-query";
import httpAdmin from "@/utils/http-admin";
import { API_ENDPOINT } from "@/utils/api-endpoint";


const deleteBank = async (id: string) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DELETE_BANK}/${id}`);
    return response;
  } catch (error) {
    return null;
  }
};

const usedeleteBank = () => {
  return useMutation(deleteBank);
};

export { deleteBank, usedeleteBank };