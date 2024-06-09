"use client";

import { SantriTypes } from "@/services/data-types";
import { useGetBank } from "@/services/user/bank/get-bank";
import { createInfaq } from "@/services/user/infaq/create-infaq";
import { EditInfaq } from "@/services/user/infaq/edit-infaq";
import { useGetProfileUser } from "@/services/user/profil/get-profil";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import type { DatePickerProps } from "antd";
import type { RadioChangeEvent } from "antd";
import { Avatar, Button, DatePicker, Input, List, Radio, Select } from "antd";
import { Upload } from "lucide-react";
const { TextArea } = Input;
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface BankData {
  name: string;
  bankName: string;
  noRekening: string;
  _id: any;
  value: string;
  label: string;
}

export default function Infaq() {
  const [Profile, setProfile] = useState<SantriTypes | null>(null);

  const [RekeningTujuan, setRekeningTujuan] = useState("");
  const [AtasNama, setAtasNama] = useState("");
  const [TotalTransfer, setTotalTransfer] = useState("");
  const [SelectedFileInfaq, setSelectedFileInfaq] = useState<File | null>(null);
  const [editedId, setEditedId] = useState<string | undefined>(undefined);

  const [Bank, setBank] = useState<BankData[]>([]);

  const {
    data: dataProfile,
    isLoading: isLoadingProfile,
    isError: isErrorProfile,
  } = useGetProfileUser();
  const {
    data: dataBank,
    isLoading: isLoadingBank,
    isError: isErrorBank,
  } = useGetBank();

  useEffect(() => {
    if (!isLoadingProfile && !isErrorProfile && dataProfile) {
      setProfile(dataProfile || []);

      if (dataProfile?.infaq_id?.rekening_tujuan) {
        const rekening = dataProfile?.infaq_id?.rekening_tujuan;
        setRekeningTujuan(rekening);
      }
      if (dataProfile?.infaq_id?.atas_nama) {
        const nama = dataProfile?.infaq_id?.atas_nama;
        setAtasNama(nama);
      }
      if (dataProfile?.infaq_id?.total_transfer) {
        const total = dataProfile?.infaq_id?.total_transfer;
        setTotalTransfer(total);
      }

      if (dataProfile.infaq_id?.bukti_pembayaran) {
        const buktiFile = dataProfile.infaq_id?.bukti_pembayaran;
        const file = new File([], buktiFile);
        setSelectedFileInfaq(file);
      }
      if (dataProfile?.infaq_id?._id) {
        const id = dataProfile?.infaq_id?._id;
        setEditedId(id);
      }
    }
    setBank(dataBank);
  }, [
    dataProfile,
    isLoadingProfile,
    isErrorProfile,
    isLoadingBank,
    isErrorBank,
  ]);

  console.log(Profile, "Profils");
  console.log(RekeningTujuan, "rek");
  console.log(AtasNama, "atasNama");
  console.log(TotalTransfer, "total");
  console.log(SelectedFileInfaq, "bukti");

  const bankOptions =
    Bank?.map((item) => ({
      key: item._id,
      value: `${item.noRekening} -  ${item.bankName} - ${item.name}` ?? "",
    })) ?? [];

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e) {
      const { id, value } = e.target;

      if (id === "RekeningTujuan") setRekeningTujuan(value);
      if (id === "AtasNama") setAtasNama(value);
      if (id === "TotalTransfer") setTotalTransfer(value);
    }
  };

  const handleFileChangeInfaq = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileInfaq(event.target.files[0]);
    }
  };

  const handleChangeRekening = (value: string) => {
    console.log(`selected ${value}`);
    setRekeningTujuan(value);
  };

  const handleSubmit = async () => {
    if (!RekeningTujuan) {
      toast.error("Rekening Tujuan wajib diisi");
      return;
    }
    if (!AtasNama) {
      toast.error("Nama wajib diisi");
      return;
    }
    if (!TotalTransfer) {
      toast.error("Total Transfer wajib diisi");
      return;
    }
    if (!SelectedFileInfaq) {
      toast.error("Bukti Pembayaran wajib diisi");
      return;
    }

    const formData = new FormData();
    formData.append("rekening_tujuan", RekeningTujuan);
    formData.append("atas_nama", AtasNama);
    formData.append("total_transfer", TotalTransfer);

    if (SelectedFileInfaq) {
      formData.append("bukti_pembayaran", SelectedFileInfaq);
    }

    try {
      if (editedId) {
        await EditInfaq(editedId, formData);
        toast.success("Edit Infaq Success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        await createInfaq(formData);
        toast.success("Create Infaq Success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      toast.error("Update Infaq Failed");
    }
  };

  return (
    <div className="bg-white h-auto m-8 box-border w-max-full rounded-xl text-black">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">Infaq Pendaftaran</p>
      </div>

      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-start items-start gap-10">
          {/* Kanan */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Rekening Tujuan</label>
              <Select
                placeholder="Pilih rekening tujuan"
                onChange={handleChangeRekening}
                options={bankOptions}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Atas Nama</label>
              <Input
                id="AtasNama"
                value={AtasNama}
                onChange={handleInput}
                placeholder="Atas Nama"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Total Transfer</label>
              <Input
                id="TotalTransfer"
                value={TotalTransfer}
                onChange={handleInput}
                placeholder="Total Transfer"
                type="number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Bukti Pembayaran</label>
              <label className="flex items-center relative border border-gray-300 rounded-md p-2 h-[32px] box-border">
                <Upload className="w-4 h-4 mr-4 text-gray-400" />
                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={handleFileChangeInfaq}
                  placeholder="Upload Bukti Pembayaran Infaq"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
                {SelectedFileInfaq ? (
                  <p className="text-sm text-black ">
                    {SelectedFileInfaq.name}
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 font-extralight ">
                    Upload Bukti Pembayaran
                  </p>
                )}
              </label>
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
            handleSubmit();
          }}
        >
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
}
