"use client";

import React, { useState } from "react";
import { RadioChangeEvent, Button, Radio } from "antd";

interface Question {
  id: number;
  question: string;
}

interface Answer {
  questionId: number;
  answer: boolean;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Are you ready",
  },
  {
    id: 2,
    question: "Are you human",
  },
  {
    id: 3,
    question: "Are you angry",
  },
];

const QuizPage: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: number]: boolean }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChange = (questionId: number, value: boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      const data = {
        answers: Object.entries(answers).map(([questionId, answer]) => ({
          questionId: Number(questionId),
          answer,
        })),
      };
      console.log(data);
      setIsSubmitted(true);
    } else {
      alert("Please answer all questions.");
    }
  };

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

          {questions.map((q) => (
            <div
              key={q.id}
              className="px-4 py-3 rounded-lg border border-gray-200 text-gray-800 mt-5"
            >
              <p className="text-sm">{q.question}</p>
              <Radio.Group
                onChange={(e: RadioChangeEvent) =>
                  onChange(q.id, e.target.value === "true")
                }
                value={answers[q.id]?.toString()}
                className="flex justify-start items-center gap-3 mt-2"
              >
                <Radio value="true">Benar</Radio>
                <Radio value="false">Salah</Radio>
              </Radio.Group>
            </div>
          ))}

          <div className="mt-5 flex justify-end">
            <Button type="primary" size="large" onClick={handleSubmit}>
              Submit Quiz
            </Button>
          </div>
          {isSubmitted && (
            <div className="mt-5 text-center text-green-500">
              Quiz submitted successfully!
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizPage;
