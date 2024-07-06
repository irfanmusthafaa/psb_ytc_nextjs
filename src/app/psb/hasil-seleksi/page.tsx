"use client";

import React, { useEffect, useState } from "react";
import { Badge, Card, Space } from "antd";
import { useGetProfileUser } from "@/services/user/profil/get-profil";

interface ProfileData {
  id: string;
  status: string;
  score_quiz: number;
  nilai: number;
}

export default function Status() {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  const { data: dataProfile, isLoading, isError } = useGetProfileUser();

  useEffect(() => {
    if (!isLoading && !isError) {
      setProfile(dataProfile || {});
    }
  }, [dataProfile, isLoading, isError]);

  console.log(profile, "profil");

  const status = profile?.status;
  const nilai_quiz = profile?.score_quiz;
  const nilai_bacaan = profile?.nilai;

  const renderStatusRibbon = () => {
    if (status === "lulus") {
      return (
        <Badge.Ribbon text="Lulus" color="green">
          <Card title="Pemberitahuan Hasil Kelulusan" size="small">
            Selamat Anda dinyatakan lulus dalam proses seleksi beasiswa Young
            Tahfizh Center
          </Card>
        </Badge.Ribbon>
      );
    } else if (status === "tidak lulus") {
      return (
        <Badge.Ribbon text="Tidak Lulus" color="red">
          <Card title="Pemberitahuan Status Kelulusan" size="small">
            Mohon maaf anda dinyatakan tidak lulus dalam proses seleksi beasiswa
            Young Tahfizh Center
          </Card>
        </Badge.Ribbon>
      );
    } else {
      return (
        <Badge.Ribbon text="On Proses">
          <Card title="Pemberitahuan Status Kelulusan" size="small">
            Saat ini masih dalam proses seleksi
          </Card>
        </Badge.Ribbon>
      );
    }
  };

  const renderNilaiQuiz = () => {
    if (nilai_quiz !== null) {
      return (
        <Card title="Pemberitahuan Nilai Quiz" size="small">
          Anda telah menyelesaikan soal quiz dengan nilai{" "}
          <span className="font-bold">{profile?.score_quiz}</span>
        </Card>
      );
    }
  };

  const renderNilaiBacaan = () => {
    if (nilai_bacaan !== null) {
      return (
        <Card title="Pemberitahuan Nilai Bacaan Quran" size="small">
          Anda telah menyelesaikan soal quiz dengan nilai{" "}
          <span className="font-bold">{profile?.nilai}</span>
        </Card>
      );
    }
  };

  return (
    <div className="bg-white h-auto min-h-[500px] m-8 box-border w-max-full rounded-xl text-black">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">Hasil Seleksi</p>
      </div>

      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-center items-start gap-10">
          <div className="w-full flex flex-col gap-4">
            {/* Component status */}
            {renderStatusRibbon()}
            {renderNilaiQuiz()}
            {renderNilaiBacaan()}
          </div>
        </div>
      </div>
    </div>
  );
}
