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
  const [time, setTime] = useState(10 * 60); // Set the time to 10 minutes in seconds

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
      setQuestion(dataQuestion?.data || []);
      setTime(dataQuestion?.time * 60); // Assuming dataQuestion.time is in minutes, convert to seconds
    }
  }, [dataQuestion, isLoadingQuestion, isErrorQuestion]);

  useEffect(() => {
    if (isSuccessSubmitQuiz) {
      setIsSubmitted(true);
    }

    if (isErrorSubmitQuiz) {
      const err = error as ErrorResponse;
      const errorMessage = err.response?.data?.message || "Terjadi kesalahan";
      toast.error(errorMessage);
      console.log(err, "error ada");
    }
  }, [statusQuiz, isSuccessSubmitQuiz, isErrorSubmitQuiz, error]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time === 0) {
      handleAutoSubmit();
    }
  }, [time]);

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
      dataSubmitQuiz(data, {
        onSuccess: (response) => {
          setScore(response.data.score);
        },
      });
      // console.log(data, "data sum");
    } else {
      toast.warning("Please answer all questions.");
    }
  };

  const handleAutoSubmit = () => {
    if (Object.keys(answers).length !== question?.length) {
      toast.warning(
        "Tidak semua pertanyaan telah dijawab. Mengirim jawaban yang ada."
      );
    }

    const data = {
      answers: Object.entries(answers).map(([questionId, answer]) => ({
        questionId: questionId,
        answer,
      })),
    };

    // console.log(data, "data sebelum submit otomatis");

    dataSubmitQuiz(data, {
      onSuccess: (response) => {
        setScore(response.data.score);
      },
    });

    // console.log(data, "data submit otomatis");
  };

  const handleOk = () => {
    router.push("/psb/seleksi");
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const successModal = (
    <Modal
      open={isSubmitted}
      centered
      onOk={handleOk}
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
          className="mt-5 text-white bg-[#273b83] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
        <div className="bg-white px-7 w-1/2  my-10 h-full rounded-xl">
          <div className="text-gray-800 mt-10 text-center">
            <h3 className="text-xl font-semibold">Quiz Pilihan Ganda</h3>
            <h3 className="text-base font-semibold mt-2">
              Untuk Seleksi Calon Santri Young Tahfizh Center
            </h3>
            <p className="text-xs mt-7">
              Jawablah soal - soal berikut dengan cermat dan teliti
            </p>
            <p className="text-right mt-5 font-semibold">
              Waktu sisa : {formatTime(time)}
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
              className="w-full mb-10 text-white bg-[#273b83] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
