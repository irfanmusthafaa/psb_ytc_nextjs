
import { API_ENDPOINT } from "@/utils/api-endpoint";
import http from "@/utils/http";
import { useMutation } from "@tanstack/react-query";

const SubmitQuiz = async (input: any) => {
  try {
    const result = await http.post(API_ENDPOINT.SUBMIT_QUIZ, input);
    console.log(result, "result");
    return result;
  } catch (error:any) {
    throw error;
  }
};


const useSubmitQuiz = () => {
  return useMutation(SubmitQuiz);
};

export { SubmitQuiz, useSubmitQuiz };