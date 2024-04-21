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

export default function EditProfil() {
  const [value, setValue] = useState(1);
  const [selectedFileAvatar, setSelectedFileAvatar] = useState<File | null>(
    null
  );

  const onChangeJk = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleChangePendidikan = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleFileChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileAvatar(event.target.files[0]);
    }
  };

  return (
    <div className="bg-white h-auto m-8 box-border w-max-full rounded-xl">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">Edit Biodata Santri</p>
      </div>

      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-center items-start gap-10">
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Nama Lengkap</label>
              <Input placeholder="Nama Lengkap" />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-sm font-medium">Tanggal Lahir</label>
              <DatePicker onChange={onChange} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Jenis Kelamin</label>
              <Radio.Group onChange={onChangeJk} value={value}>
                <Radio value={1}>Laki- laki</Radio>
                <Radio value={2}>Perempuan</Radio>
              </Radio.Group>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Kota Asal</label>
              <Input placeholder="Kota Asal" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Alamat Lengkap</label>
              <TextArea rows={5} placeholder="Alamat Lengkap" />
            </div>
          </div>

          {/* Kanan */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Pendidikan Terakhir</label>
              <Select
                defaultValue="SLTA / SEDERAJAT"
                onChange={handleChangePendidikan}
                options={[
                  { value: "SD / SEDERAJAT", label: "SD / SEDERAJAT" },
                  { value: "SLTP / SEDERAJAT", label: "SLTP / SEDERAJAT" },
                  { value: "SLTA / SEDERAJAT", label: "SLTA / SEDERAJAT" },
                  {
                    value: "DIPLOMA IV/ STRATA I",
                    label: "DIPLOMA IV/ STRATA I",
                  },
                  { value: "STRATA II", label: "STRATA II" },
                  { value: "STRATA III", label: "STRATA III" },
                ]}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">NIK</label>
              <Input placeholder="NIK" maxLength={17} type="number" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">No Telepon</label>
              <Input placeholder="No Telepon" maxLength={13} type="number" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Jumlah Hafalan (Juz)
              </label>
              <Input placeholder="Jumlah Hafalan" maxLength={2} type="number" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Foto</label>
              <label className="flex items-center relative border border-gray-300 rounded-md p-2 h-[32px] box-border">
                <Upload className="w-4 h-4 mr-4 text-gray-400" />
                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={handleFileChangeAvatar}
                  placeholder="Upload Foto 3x4"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
                {selectedFileAvatar ? (
                  <p className="text-sm text-black ">
                    Selected file: {selectedFileAvatar.name}
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 font-light">
                    Upload Foto 3x4 (png/jpg)
                  </p>
                )}
              </label>
            </div>
            {/* <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Motivasi Daftar Beasiswa YTC
              </label>
              <TextArea
                rows={5}
                maxLength={100}
                placeholder="Tuliskan motivasi anda mengikuti program beasiswa YTC"
              />
            </div> */}
          </div>
        </div>
      </div>
      {/* End Form */}

      <div className="py-4 px-6 flex justify-end items-center">
        <Button type="primary" className="bg-[#273b83]">
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
}
