import { useMutation } from "@tanstack/react-query";
import httpAdmin from "@/utils/http-admin";
import { API_ENDPOINT } from "@/utils/api-endpoint";


const deleteProgram = async (id: string) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DELETE_PROGRAM}/${id}`);
    return response;
  } catch (error) {
    return null;
  }
};

const usedeleteProgram = () => {
  return useMutation(deleteProgram);
};

export { deleteProgram, usedeleteProgram };