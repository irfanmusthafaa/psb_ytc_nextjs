import { useMutation } from "@tanstack/react-query";
import httpAdmin from "@/utils/http-admin";
import { API_ENDPOINT } from "@/utils/api-endpoint";


const DeleteQuestion = async (id: string) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DELETE_QUESTION}/${id}`);
    return response;
  } catch (error) {
    return null;
  }
};

const useDeleteQuestion = () => {
  return useMutation(DeleteQuestion);
};

export { DeleteQuestion, useDeleteQuestion };