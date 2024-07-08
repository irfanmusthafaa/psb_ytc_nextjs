"use client";

import { SantriTypes, ConfigQuizTypes } from "@/services/data-types";
import { useGetProfileUser } from "@/services/user/profil/get-profil";
import { useGetConfigQuiiz } from "@/services/user/quiz/get-config-quiz";
import { createSeleksi } from "@/services/user/seleksi/create-seleksi";
import { EditSeleksi } from "@/services/user/seleksi/edit-seleksi";
import { useGetSoalSeleksi } from "@/services/user/seleksi/get-soal-seleksi";
import { Button, Input, Select, Tooltip } from "antd";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/id"; // Pastikan untuk mengimpor lokal id-ID jika belum

dayjs.extend(utc);
dayjs.locale("id");

interface SoalSeleksiData {
  soal: string;
  _id: any;
  value: string;
  label: string;
}

export default function Seleksi() {
  const [Profile, setProfile] = useState<SantriTypes | null>(null);
  const [Soal, setSoal] = useState<SoalSeleksiData[]>([]);
  const [SelectedSoal, setSelectedSoal] = useState("");
  const [editedId, setEditedId] = useState<string | undefined>(undefined);
  const [ConfigQuiz, setConfigQuiz] = useState<ConfigQuizTypes | null>(null);

  const [SoalSeleksi, setSoalSeleksi] = useState("");
  const [LinkRekaman, setLinkRekaman] = useState("");

  const router = useRouter();

  const {
    data: dataProfile,
    isLoading: isLoadingProfile,
    isError: isErrorProfile,
  } = useGetProfileUser();

  const {
    data: dataSoal,
    isLoading: isLoadingSoal,
    isError: isErrorSoal,
  } = useGetSoalSeleksi();

  const {
    data: dataConfigQuiz,
    isLoading: isLoadingConfigQuiz,
    isError: isErrorConfigQuiz,
  } = useGetConfigQuiiz();

  useEffect(() => {
    if (!isLoadingProfile && !isErrorProfile && dataProfile) {
      setProfile(dataProfile || {});
      setProfile(dataProfile);

      if (dataProfile?.seleksi_id?.soal_seleksi) {
        const soal = dataProfile?.seleksi_id.soal_seleksi;
        setSoalSeleksi(soal);
      }

      if (dataProfile?.seleksi_id?.link_rekaman) {
        const link = dataProfile?.seleksi_id.link_rekaman;
        setLinkRekaman(link);
      }
      if (dataProfile?.seleksi_id?._id) {
        setEditedId(dataProfile?.seleksi_id?._id);
      }
    }

    if (!isLoadingConfigQuiz && !isErrorConfigQuiz) {
      if (dataConfigQuiz) {
        dataConfigQuiz.startDate = new Date(dataConfigQuiz.startDate);
        dataConfigQuiz.endDate = new Date(dataConfigQuiz.endDate);
        setConfigQuiz(dataConfigQuiz);
      }
    }
    setSoal(dataSoal);
  }, [
    dataSoal,
    dataProfile,
    dataConfigQuiz,
    // dataProfile?.seleksi_id?.soal_seleksi,
    dataProfile?.seleksi_id?.link_rekaman,
    isLoadingProfile,
    isErrorProfile,
    isLoadingSoal,
    isErrorSoal,
    isLoadingConfigQuiz,
    isErrorConfigQuiz,
  ]);

  // console.log(editedId, "id");
  // console.log(SoalSeleksi, "soal");
  // console.log(LinkRekaman, "link");
  // console.log(Profile, "profi");
  console.log(ConfigQuiz, " configq");

  const soalOptions =
    Soal?.map((item) => ({
      key: item._id,
      value: item.soal,
      label: item.soal ?? "",
    })) ?? [];

  const handleChangeSoal = (value: string) => {
    setSoalSeleksi(value);
  };

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e) {
      const { id, value } = e.target;
      if (id === "LinkRekaman") setLinkRekaman(value);
    }
  };

  const handleSubmit = async () => {
    if (!SoalSeleksi) {
      toast.error("Soal Seleksi wajib diisi");
      return;
    }
    if (!LinkRekaman) {
      toast.error("Link Rekaman wajib diisi");
      return;
    }

    try {
      if (editedId) {
        await EditSeleksi(editedId, {
          soal_seleksi: SoalSeleksi,
          link_rekaman: LinkRekaman,
        });
        toast.success("Edit Seleksi Success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        await createSeleksi({
          soal_seleksi: SoalSeleksi,
          link_rekaman: LinkRekaman,
        });
        toast.success("Create Seleksi Success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      toast.error("Update Seleksi Failed");
    }
  };

  // function formatDate(date: Date) {
  //   const options: Intl.DateTimeFormatOptions = {
  //     day: "2-digit",
  //     month: "long",
  //     year: "numeric",
  //   };
  //   return date.toLocaleDateString("id-ID", options);
  // }

  const formatDate = (date: string | null) => {
    if (!date) return "-";

    const formattedDate = dayjs.utc(date).locale("id").format("D MMMM YYYY");

    return formattedDate;
  };

  return (
    <div className="bg-white h-auto m-8 box-border w-max-full rounded-xl text-black">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">Test Seleksi</p>
      </div>

      <div className="border border-gray-200 mx-6 mt-5 p-5 rounded-xl">
        <p className="font-semibold">Quiz Pilihan Ganda</p>
        <ul className="my-2 space-y-1 text-gray-900 text-xs list-inside dark:text-gray-400">
          <li>1. Quiz ini terdiri dari pertanyaan pilihan ganda.</li>
          <li>
            2. Quiz dapat dikerjakan mulai tanggal{" "}
            {ConfigQuiz && formatDate(ConfigQuiz.startDate)} hingga{" "}
            {ConfigQuiz && formatDate(ConfigQuiz.endDate)}.
          </li>
          <li>3. Quiz hanya dapat dilakukan satu kali saja.</li>
          <li>4. Quiz dapat dikerjakan selama {ConfigQuiz?.time} menit.</li>
          <li>5. Kerjakan quiz dengan teliti dan maksimal.</li>
        </ul>
        <Tooltip title={ConfigQuiz?.access_quiz ? "" : ConfigQuiz?.message}>
          <Button
            type="primary"
            className="mt-5 bg-[#273b83]"
            onClick={() => (window.location.href = "/quiz")}
            disabled={!ConfigQuiz?.access_quiz}
          >
            Kerjakan Quiz
          </Button>
        </Tooltip>
        {/* <Button
          type="primary"
          className="mt-5 bg-[#273b83]"
          onClick={() => router.push("/psb/quiz")}
        >
          Kerjakan Quiz
        </Button> */}
      </div>

      {/* Form */}
      <div className="border border-gray-200 mx-6 mt-5 p-5 rounded-xl">
        <p className="font-semibold">Test Bacaan Quran</p>

        <ul className="my-2 space-y-1 text-gray-900 text-xs list-inside dark:text-gray-400">
          <li>
            1. Tes ini bertujuan untuk melihat ukuran kesempurnaan bacaan Quran
            Anda.
          </li>
          <li>
            2. Anda dapat memilih ayat bacaan Quran sesuai dengan yang ada di
            daftar (list) yang disediakan.
          </li>
          <li>3. Bacaan Quran Anda harus direkam dalam bentuk video.</li>
          <li>
            4. Video rekaman bacaan Quran harus diupload ke Google Drive atau
            YouTube.
          </li>
          <li>
            5. Link dari video yang sudah diupload harus dimasukkan ke dalam
            form yang disediakan.
          </li>
        </ul>
        <div className="w-full flex justify-start items-start gap-10">
          {/* Kanan */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="mt-2 flex flex-col gap-2">
              <label className="text-sm font-medium">
                Pilih Surah dan Ayat
              </label>
              <Select
                // defaultValue={SoalSeleksi}
                value={SoalSeleksi}
                placeholder="Pilih soal seleksi"
                onChange={handleChangeSoal}
                options={soalOptions}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Link Rekaman Video</label>
              <Input
                id="LinkRekaman"
                value={LinkRekaman}
                onChange={handleInput}
                placeholder="Link Video"
              />
            </div>
          </div>
        </div>
        <Button
          type="primary"
          className="mt-7 bg-[#273b83]"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit Video
          {/* {isEditMode ? "Edit Infaq" : "Submit Infaq"} */}
        </Button>
      </div>
      {/* End Form */}

      <div className="py-10 px-6 flex justify-start items-center"></div>
    </div>
  );
}
