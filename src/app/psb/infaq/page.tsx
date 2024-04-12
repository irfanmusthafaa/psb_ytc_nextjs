"use client";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import type { DatePickerProps } from "antd";
import type { RadioChangeEvent } from "antd";
import { Avatar, Button, DatePicker, Input, List, Radio, Select } from "antd";
import { Upload } from "lucide-react";
const { TextArea } = Input;
import { ChangeEvent, useState } from "react";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const data = [
  {
    title: "Bank Syariah Indonesia",
    description: "7179088511",
  },
];

export default function Infaq() {
  const [selectedFileInfaq, setSelectedFileInfaq] = useState<File | null>(null);

  const handleFileChangeInfaq = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileInfaq(event.target.files[0]);
    }
  };

  return (
    <div className="bg-white h-auto m-8 box-border w-max-full rounded-xl">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">Infaq Pendaftaran</p>
      </div>

      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-start items-start gap-10">
          {/* Kanan */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-base font-normal ">
                Membayar Infaq sebesar 200000
              </p>
              <p>Transfer ke rekening : BSI - 7179088511</p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Atas Nama</label>
              <Input placeholder="Atas Nama" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Total Transfer</label>
              <Input placeholder="Total Transfer" type="number" />
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
                {selectedFileInfaq ? (
                  <p className="text-sm text-black ">
                    Selected file: {selectedFileInfaq.name}
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
        <Button type="primary" className="bg-[#273b83]">
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
}
