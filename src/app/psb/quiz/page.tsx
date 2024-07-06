"use client";

import React, { useEffect, useState } from "react";
import { RadioChangeEvent, Radio, Modal, Button } from "antd";
import { useGetAllQuestions } from "@/services/admin/questions/get-all-questions";
import { QuestionTypes } from "@/services/data-types";
import { useRouter } from "next/navigation";
import { useSubmitQuiz } from "@/services/user/quiz/submit-quiz";
import { toast } from "react-toastify";
import { CheckOutlined } from "@ant-design/icons";
import Image from "next/image";

interface Answer {
  questionId: string;
  answer: boolean;
}

interface ErrorResponse {
  response?: {
    data?: {
      message?: string;
      data?: {
        message?: string;
      };
    };
  };
  message?: string;
}

const QuizPage: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: string]: boolean }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [question, setQuestion] = useState<QuestionTypes[] | null>(null);

  const router = useRouter();

  const {
    data: dataQuestion,
    isLoading: isLoadingQuestion,
    isError: isErrorQuestion,
  } = useGetAllQuestions();

  const {
    mutate: dataSubmitQuiz,
    status: statusQuiz,
    isSuccess: isSuccessSubmitQuiz,
    isError: isErrorSubmitQuiz,
    error,
  } = useSubmitQuiz();

  useEffect(() => {
    if (!isLoadingQuestion && !isErrorQuestion) {
      setQuestion(dataQuestion || []);
    }
  }, [dataQuestion, isLoadingQuestion, isErrorQuestion]);

  useEffect(() => {
    if (isSuccessSubmitQuiz) {
      // toast.success("Submit Quiz Berhasil");
      setIsSubmitted(true);
    }

    if (isErrorSubmitQuiz) {
      const err = error as ErrorResponse;
      const errorMessage = err.response?.data?.message || "Terjadi kesalahan";
      toast.error(errorMessage);
      console.log(err, "error ada");
    }
  }, [statusQuiz, isSuccessSubmitQuiz, isErrorSubmitQuiz, error]);

  console.log(question, "question");

  const onChange = (questionId: string, value: boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === question?.length) {
      const data = {
        answers: Object.entries(answers).map(([questionId, answer]) => ({
          questionId: questionId,
          answer,
        })),
      };
      console.log(data);
      dataSubmitQuiz(data, {
        onSuccess: (response) => {
          setScore(response.data.score);
        },
      });
    } else {
      toast.warning("Please answer all questions.");
    }
  };

  const handleOk = () => {
    router.push("/psb/seleksi");
  };

  const successModal = (
    <Modal
      open={isSubmitted}
      centered
      onOk={handleOk}
      // okText="Kembali ke Halaman Test Seleksi"
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      closable={false}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/icons/check.png"}
          width={100}
          height={100}
          alt="icon check"
        />
        <p>Quiz berhasil diselesaikan!</p>
        <p>
          Nilai Anda: <span className="font-bold">{score}</span>
        </p>
        <button
          type="button"
          className="mt-5 text-white  bg-[#273b83] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={() => router.push("/psb/test-seleksi")}
        >
          Selesai
        </button>
      </div>
    </Modal>
  );

  return (
    <>
      <div className="bg-gray-200 w-full min-h-screen flex justify-center">
        <div className="bg-white px-7 w-1/2 h-16 mt-10 min-h-screen rounded-xl">
          <div className="text-gray-800 mt-10 text-center">
            <h3 className="text-xl font-semibold">Quiz Pilihan Ganda</h3>
            <h3 className="text-base font-semibold mt-2">
              Untuk Seleksi Calon Santri Young Tahfizh Center
            </h3>
            <p className="text-xs mt-7">
              Jawablah soal - soal berikut dengan cermat dan teliti
            </p>
          </div>

          {question?.map((q) => (
            <div
              key={q._id}
              className="px-4 py-3 rounded-lg border border-gray-200 text-gray-800 mt-5"
            >
              <p className="text-sm">{q.question}</p>
              <Radio.Group
                onChange={(e: RadioChangeEvent) =>
                  onChange(q._id, e.target.value === "true")
                }
                value={answers[q._id]?.toString()}
                className="flex justify-start items-center gap-3 mt-2"
              >
                <Radio value="true">Benar</Radio>
                <Radio value="false">Salah</Radio>
              </Radio.Group>
            </div>
          ))}

          <div className="mt-5 flex justify-end">
            <button
              type="button"
              className="w-full text-white  bg-[#273b83] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleSubmit}
            >
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
      {isSubmitted && successModal}
    </>
  );
};

export default QuizPage;
