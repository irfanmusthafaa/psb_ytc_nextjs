"use client";

import { useGetProfileUser } from "@/services/user/profil/get-profil";
import { createSeleksi } from "@/services/user/seleksi/create-seleksi";
import { useGetSoalSeleksi } from "@/services/user/seleksi/get-soal-seleksi";
import { Button, Input, Select } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface ProfileData {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  nik: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  pendidikan_terakhir: string;
  kota_asal: string;
  alamat: string;
  status: string;
  nama_ayah: string;
  nama_ibu: string;
  no_telp_ortu: string;
  pekerjaan_ayah: string;
  pekerjaan_ibu: string;
  penghasilan_ortu: number;
  infaq_id: {
    _id: string;
    atas_nama: string;
    total_transfer: number;
    bukti_pembayaran: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  document_id: {
    _id: string;
    ktp: string;
    kk: string;
    ijazah: string;
    sertifikat: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  seleksi_id: {
    _id: string;
    soal_seleksi: string;
    link_rekaman: string;
    createdAt: string;
    updatedAt: string;
  } | null;
}

interface SoalSeleksiData {
  soal: string;
  _id: any;
  value: string;
  label: string;
}

export default function Seleksi() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [Soal, setSoal] = useState<SoalSeleksiData[]>([]);
  const [SelectedSoal, setSelectedSoal] = useState("");

  const [SoalSeleksi, setSoalSeleksi] = useState("");
  const [LinkRekaman, setLinkRekaman] = useState("");

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

  useEffect(() => {
    if (!isLoadingProfile && !isErrorProfile && dataProfile) {
      setProfile(dataProfile || {});
      setProfile(dataProfile);
      setLinkRekaman(dataProfile?.seleksi_id?.link_rekaman || "");
    }
    setSoal(dataSoal);
  }, [
    dataSoal,
    dataProfile,
    // dataProfile?.seleksi_id?.soal_seleksi,
    dataProfile?.seleksi_id?.link_rekaman,
    isLoadingProfile,
    isErrorProfile,
    isLoadingSoal,
    isErrorSoal,
  ]);

  console.log(profile, "profil");
  console.log(Soal, "soal");

  const soalOptions =
    Soal?.map((item) => ({
      key: item._id,
      value: item._id,
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

  const handleCreateSeleksi = () => {
    if (!SoalSeleksi) {
      toast.error("Soal Seleksi wajib diisi");
      return;
    }
    if (!LinkRekaman) {
      toast.error("Link Rekaman wajib diisi");
      return;
    }
    createSeleksi({
      soal_seleksi: SoalSeleksi,
      link_rekaman: LinkRekaman,
    });

    toast.success("Update Seleksi Berhasil");
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };

  return (
    <div className="bg-white h-auto m-8 box-border w-max-full rounded-xl text-black">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">Test Seleksi</p>
      </div>

      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-start items-start gap-10">
          {/* Kanan */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-base font-normal ">
                Upload link video rekaman Anda
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Soal Seleksi</label>
              <Select
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
      </div>
      {/* End Form */}

      <div className="py-10 px-6 flex justify-start items-center">
        <Button
          type="primary"
          className="bg-[#273b83]"
          onClick={() => {
            handleCreateSeleksi();
          }}
        >
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
}
