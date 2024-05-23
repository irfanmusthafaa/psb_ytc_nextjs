"use client";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import type { DatePickerProps } from "antd";
import type { RadioChangeEvent } from "antd";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import { Upload } from "lucide-react";
const { TextArea } = Input;
import { ChangeEvent, useState } from "react";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

export default function Dokumen() {
  const [value, setValue] = useState(1);
  const [selectedFileSertifikat, setSelectedFileSertifikat] =
    useState<File | null>(null);
  const [selectedFileKTP, setSelectedFileKTP] = useState<File | null>(null);
  const [selectedFileKK, setSelectedFileKK] = useState<File | null>(null);
  const [selectedFileIjazah, setSelectedFileIjazah] = useState<File | null>(
    null
  );

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

  const onChangeJk = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleChangePendidikan = (value: string) => {
    console.log(`selected ${value}`);
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
                {selectedFileKTP ? (
                  <p className="text-sm text-black ">
                    Selected file: {selectedFileKTP.name}
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
                {selectedFileKK ? (
                  <p className="text-sm text-black ">
                    Selected file: {selectedFileKK.name}
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
                {selectedFileIjazah ? (
                  <p className="text-sm text-black ">
                    Selected file: {selectedFileIjazah.name}
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
                {selectedFileSertifikat ? (
                  <p className="text-sm text-black ">
                    Selected file: {selectedFileSertifikat.name}
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
        <Button type="primary" className="bg-[#273b83]">
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
}
