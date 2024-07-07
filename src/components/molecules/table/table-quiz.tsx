import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Typography,
} from "antd";
import type { TableProps, DatePickerProps, GetProps } from "antd";
import { FilePenLine, Trash2 } from "lucide-react";
import { ConfigQuizTypes, QuestionTypes } from "@/services/data-types";
import { toast } from "react-toastify";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useGetAllQuestions } from "@/services/admin/questions/get-all-questions";
import { useDeleteQuestion } from "@/services/admin/questions/delete-question";
import { EditQuestion } from "@/services/admin/questions/edit-question";
import { CreateQuestion } from "@/services/admin/questions/create-question";
import { CreateTimeQuiz } from "@/services/admin/questions/create-time-quiz";
import { useGetConfigQuiiz } from "@/services/user/quiz/get-config-quiz";
import { useGetQuizTime } from "@/services/admin/questions/get-quiz-time";
import moment from "moment";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(utc);

const { confirm } = Modal;

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const { RangePicker } = DatePicker;

interface DataType {
  key?: string;
  id?: string;
  question: string;
  answer: boolean;
}

export default function TableQuestion() {
  const [data, setData] = useState<QuestionTypes[] | null>(null);
  const [modeEdit, setModeEdit] = useState(false);
  const [editedId, setEditedId] = useState<string | undefined>(undefined);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<boolean | null>(null);

  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [time, setTime] = useState(0);

  const [ConfigQuiz, setConfigQuiz] = useState<ConfigQuizTypes | null>(null);

  const {
    data: dataConfigQuiz,
    isLoading: isLoadingConfigQuiz,
    isError: isErrorConfigQuiz,
  } = useGetQuizTime();

  const {
    data: dataQuestion,
    isLoading: isLoadingQuestion,
    isError: isErrorQuestion,
  } = useGetAllQuestions();

  useEffect(() => {
    if (!isLoadingQuestion && !isErrorQuestion) {
      setData(dataQuestion?.data || []);
    }
  }, [dataQuestion, isLoadingQuestion, isErrorQuestion]);

  useEffect(() => {
    if (!isLoadingConfigQuiz && !isErrorConfigQuiz) {
      const config = dataConfigQuiz || null;
      setConfigQuiz(config);
      if (config) {
        setStartDate(config.startDate || null);
        setEndDate(config.endDate || null);
        setTime(config.time || 0);
      }
    }
  }, [dataConfigQuiz, isLoadingConfigQuiz, isErrorConfigQuiz]);

  const { mutate: deleteQuestion } = useDeleteQuestion();

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      render: (text) => <>{text}</>,
    },
    {
      title: "Pertanyaan",
      dataIndex: "question",
      key: "question",
      render: (text) => <>{text}</>,
    },
    {
      title: "Jawaban",
      dataIndex: "answer",
      key: "answer",
      render: (text) => <>{text ? "Benar" : "Salah"}</>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="dashed"
            className="flex justify-center items-center gap-2 text-gray-700 border-none hover:bg-amber-900 hover:border-0 hover:text-white hover:border-none rounded-full"
            onClick={() =>
              handleEdit(record.id, record.question, record.answer)
            }
          >
            <FilePenLine />
          </Button>
          <Button
            onClick={() => showDeleteConfirm(record.id)}
            type="dashed"
            className="flex justify-center items-center gap-2 text-gray-700 border-none hover:bg-amber-900 hover:border-0 hover:text-white hover:border-none rounded-full"
          >
            <Trash2 />
          </Button>
        </Space>
      ),
    },
  ];

  const dataSource: DataType[] = data
    ? data.map((item, index) => ({
        key: (index + 1).toString(),
        id: item._id,
        question: item.question,
        answer: item.answer,
      }))
    : [];

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    if (id === "question") setQuestion(value);
    if (id === "time") setTime(Number(value));
  };

  const handleChangeAnswer = (value: string) => {
    setAnswer(value === "true");
  };

  const handleCreate = () => {
    if (!question) {
      toast.error("Question wajib diisi");
      return;
    }
    if (answer === null) {
      toast.error("Answer wajib diisi");
      return;
    }

    CreateQuestion({
      question,
      answer,
    })
      .then(() => {
        toast.success("Tambah Data Berhasil");
        setQuestion("");
        setAnswer(null);
        setData((prevData: any) => {
          if (prevData !== null) {
            return [
              ...prevData,
              { _id: Math.random().toString(), question, answer },
            ];
          } else {
            return null;
          }
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Gagal menambah data");
      });
  };

  const handleEdit = (
    id: string | undefined,
    question: string,
    answer: boolean
  ) => {
    setModeEdit(true);
    setQuestion(question);
    setAnswer(answer);
    setEditedId(id);
  };

  const handleCancelEdit = () => {
    setModeEdit(false);
    setQuestion("");
    setAnswer(null);
    setEditedId(undefined);
  };

  const handleUpdate = () => {
    if (!question) {
      toast.error("Question wajib diisi");
      return;
    }
    if (answer === null) {
      toast.error("Answer wajib diisi");
      return;
    }
    if (!editedId) {
      toast.error("ID tidak ditemukan");
      return;
    }

    EditQuestion(editedId, {
      question,
      answer,
    })
      .then(() => {
        setData((prevData) =>
          prevData
            ? prevData.map((item) =>
                item._id === editedId ? { ...item, question, answer } : item
              )
            : []
        );
        toast.success("Update Data Berhasil");
        handleCancelEdit();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Gagal memperbarui data");
      });
  };

  const handleDelete = (id: string | undefined) => {
    if (id) {
      deleteQuestion(id);
      toast.success("Berhasil menghapus data");
      setData((prevData) =>
        prevData ? prevData.filter((item) => item._id !== id) : null
      );
    } else {
      toast.error("ID tidak valid");
    }
  };

  const showDeleteConfirm = (id: string | undefined) => {
    confirm({
      title: "Apakah yakin akan menghapus data ini?",
      icon: <ExclamationCircleFilled />,
      okText: "Hapus",
      okType: "danger",
      cancelText: "Batal",
      onOk() {
        handleDelete(id);
      },
    });
  };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    console.log("onOk: ", value);
  };

  const handleRangeChange: RangePickerProps["onChange"] = (
    dates,
    dateStrings
  ) => {
    if (dates && dates.length === 2) {
      setStartDate(
        dayjs.utc(dates[0]).format("YYYY-MM-DDTHH:mm:ss[Z]") || null
      );
      setEndDate(dayjs.utc(dates[1]).format("YYYY-MM-DDTHH:mm:ss[Z]") || null);
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };

  //   const handleRangeChange: RangePickerProps["onChange"] = (
  //     dates,
  //     dateStrings
  //   ) => {
  //     if (dates && dates.length === 2) {
  //       setStartDate(dates[0]?.format("YYYY-MM-DDTHH:mm:ss") || null); // Adjust format as needed
  //       setEndDate(dates[1]?.format("YYYY-MM-DDTHH:mm:ss") || null); // Adjust format as needed
  //     } else {
  //       setStartDate(null);
  //       setEndDate(null);
  //     }
  //   };

  const handleSubmitTime = async () => {
    if (!startDate) {
      toast.error("Start Date wajib diisi");
      return;
    }
    if (!endDate) {
      toast.error("End Date wajib diisi");
      return;
    }
    if (!time) {
      toast.error("Waktu wajib diisi");
      return;
    }

    try {
      await CreateTimeQuiz({
        startDate,
        endDate,
        time,
      });
      toast.success("Waktu Pengerjaan Berhasil Diperbarui");
    } catch (error) {
      toast.error("Waktu Pengerjaan Gagal Diperbarui");
    }
  };

  console.log(startDate, "startDate");
  console.log(endDate, "endDate");
  return (
    <div className="pt-3 px-10">
      <div className="mb-10 w-full flex justify-between items-start gap-10">
        {/* Kanan */}
        <div className="w-3/4 flex flex-col gap-2 border border-gray-200 rounded-xl p-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Pertanyaan :</label>
            <Input
              id="question"
              onChange={handleInput}
              placeholder="Tambah Pertanyaan"
              value={question}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Jawaban :</label>
            <Select
              value={answer !== null ? answer.toString() : undefined}
              placeholder="Pilih jawaban"
              onChange={handleChangeAnswer}
              options={[
                { value: "true", label: "Benar" },
                { value: "false", label: "Salah" },
              ]}
            />
          </div>
          {modeEdit ? (
            <div className="mt-1 w-full flex gap-3">
              <Button className="w-full" type="primary" onClick={handleUpdate}>
                Simpan
              </Button>
              <Button className="w-full" onClick={handleCancelEdit}>
                Batal
              </Button>
            </div>
          ) : (
            <Button type="primary" onClick={handleCreate}>
              Tambah Data
            </Button>
          )}
        </div>

        {/* Kiri */}
        <div className="w-1/2 flex flex-col gap-2 border border-gray-200 rounded-xl p-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Tanggal Pengerjaan :</label>
            <RangePicker
              showTime={{ format: "HH:mm" }}
              format="YYYY-MM-DD HH:mm"
              onChange={handleRangeChange}
              onOk={onOk}
              value={[
                startDate ? dayjs(startDate).utc() : null,
                endDate ? dayjs(endDate).utc() : null,
              ]}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Waktu (menit) :</label>
            <Input
              id="time"
              onChange={handleInput}
              placeholder="contoh: 10"
              value={time}
            />
          </div>
          {modeEdit ? (
            <div className="mt-1 w-full flex gap-3">
              <Button className="w-full" type="primary" onClick={handleUpdate}>
                Simpan
              </Button>
              <Button className="w-full" onClick={handleCancelEdit}>
                Batal
              </Button>
            </div>
          ) : (
            <Button type="primary" onClick={handleSubmitTime}>
              Submit
            </Button>
          )}
        </div>
      </div>

      <Table columns={columns} dataSource={dataSource} className="w-full" />
    </div>
  );
}
