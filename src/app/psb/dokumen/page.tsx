"use client";

import { createDocument } from "@/services/user/document/create-document";
import { useGetProfileUser } from "@/services/user/profil/get-profil";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import type { DatePickerProps } from "antd";
import type { RadioChangeEvent } from "antd";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import { Upload } from "lucide-react";
const { TextArea } = Input;
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

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
  seleksi_id: string | null;
}

export default function Dokumen() {
  const [Profile, setProfile] = useState<ProfileData | null>(null);

  const [SelectedFileSertifikat, setSelectedFileSertifikat] =
    useState<File | null>(null);
  const [SelectedFileKTP, setSelectedFileKTP] = useState<File | null>(null);
  const [SelectedFileKK, setSelectedFileKK] = useState<File | null>(null);
  const [SelectedFileIjazah, setSelectedFileIjazah] = useState<File | null>(
    null
  );

  const { data: dataProfile, isLoading, isError } = useGetProfileUser();

  useEffect(() => {
    if (!isLoading && !isError && dataProfile) {
      setProfile(dataProfile);
    }
  }, [dataProfile, isLoading, isError]);

  console.log(Profile, "profile");

  const handleFileChangeKTP = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileKTP(event.target.files[0]);
    }
  };

  const handleFileChangeKK = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileKK(event.target.files[0]);
    }
  };

  const handleFileChangeIjazah = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileIjazah(event.target.files[0]);
    }
  };

  const handleFileChangeSertifikat = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileSertifikat(event.target.files[0]);
    }
  };

  const handleUpdateDocument = async () => {
    if (!SelectedFileKTP) {
      toast.error("Nama wajib diisi");
      return;
    }
    if (!SelectedFileKK) {
      toast.error("Tanggal Lahir wajib diisi");
      return;
    }
    if (!SelectedFileIjazah) {
      toast.error("Kota Asal wajib diisi");
      return;
    }
    if (!SelectedFileSertifikat) {
      toast.error("Alamat wajib diisi");
      return;
    }

    const formData = new FormData();

    if (SelectedFileKTP) {
      formData.append("ktp", SelectedFileKTP);
    }
    if (SelectedFileKK) {
      formData.append("kk", SelectedFileKK);
    }
    if (SelectedFileIjazah) {
      formData.append("ijazah", SelectedFileIjazah);
    }
    if (SelectedFileSertifikat) {
      formData.append("sertifikat", SelectedFileSertifikat);
    }

    try {
      await createDocument(formData);
      toast.success("Update Document Success");
    } catch (error) {
      toast.error("Update Document Failed");
    }

    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };

  return (
    <div className="bg-white h-auto m-8 box-border w-max-full rounded-xl text-black">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">
          Upload Dokumen Santri
        </p>
      </div>

      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-start items-start gap-10">
          {/* Kanan */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">KTP</label>
              <label className="flex items-center relative border border-gray-300 rounded-md p-2 h-[32px] box-border">
                <Upload className="w-4 h-4 mr-4 text-gray-400" />
                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={handleFileChangeKTP}
                  placeholder="Upload KTP"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
                {SelectedFileKTP ? (
                  <p className="text-sm text-black ">
                    Selected file: {SelectedFileKTP.name}
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 font-light">Upload KTP</p>
                )}
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">KK</label>
              <label className="flex items-center relative border border-gray-300 rounded-md p-2 h-[32px] box-border">
                <Upload className="w-4 h-4 mr-4 text-gray-400" />
                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={handleFileChangeKK}
                  placeholder="Upload KK"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
                {SelectedFileKK ? (
                  <p className="text-sm text-black ">
                    Selected file: {SelectedFileKK.name}
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 font-light">Upload KK</p>
                )}
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Ijazah</label>
              <label className="flex items-center relative border border-gray-300 rounded-md p-2 h-[32px] box-border">
                <Upload className="w-4 h-4 mr-4 text-gray-400" />
                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={handleFileChangeIjazah}
                  placeholder="Upload Ijazah"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
                {SelectedFileIjazah ? (
                  <p className="text-sm text-black ">
                    Selected file: {SelectedFileIjazah.name}
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 font-light">
                    Upload Ijazah
                  </p>
                )}
              </label>
            </div>
            <div className="flex flex-col gap-2">
              {" "}
              <label className="text-sm font-medium">Sertifikat</label>
              <label className="flex items-center relative border border-gray-300 rounded-md p-2 h-[32px] box-border">
                <Upload className="w-4 h-4 mr-4 text-gray-400" />
                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={handleFileChangeSertifikat}
                  placeholder="Upload Foto 3x4"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
                {SelectedFileSertifikat ? (
                  <p className="text-sm text-black ">
                    Selected file: {SelectedFileSertifikat.name}
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 font-light">
                    Upload Sertifikat
                  </p>
                )}
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* End Form */}

      <div className="mt-5 mb-10 py-4 px-6 flex justify-start items-center">
        <Button
          type="primary"
          className="bg-[#273b83]"
          onClick={() => {
            handleUpdateDocument();
          }}
        >
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
}
