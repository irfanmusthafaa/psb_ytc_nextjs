"use client";

import { useRouter } from "next/navigation";

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

export default function Register() {
  const router = useRouter();

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
    <section className="w-full flex bg-gray-100 dark:bg-gray-900 h-screen">
      <div className="w-[40%] bg-[#273b83] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            className="w-[6rem] h-[6rem] mr-2"
            src="/images/logo3.png"
            alt="logo"
          />
          <div className="text-center">
            <p className="text-white text-md">Young Tahfizh</p>
            <p className="text-white text-md">Center</p>
          </div>
        </div>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center  bg-white">
        {/* <a
          href="#"
          className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-[6rem] h-[6rem] mr-2"
            src="/images/logo2.png"
            alt="logo"
          />
        </a> */}
        <div className="w-full ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register
            </h1>
            <div className="w-full flex justify-center items-start gap-10">
              <div className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Nama Lengkap</label>
                  <Input placeholder="Nama Lengkap" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="Email" type="email" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">No Telepon</label>
                  <Input
                    placeholder="No Telepon"
                    maxLength={13}
                    type="number"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input placeholder="Password" type="password" />
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
              </div>

              <div className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">NIK</label>
                  <Input placeholder="NIK" maxLength={17} type="number" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">
                    Pendidikan Terakhir
                  </label>
                  <Select
                    placeholder="Pilih Pendidikan Terakhir"
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
                  <label className="text-sm font-medium">Kota Asal</label>
                  <Input placeholder="Kota Asal" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Alamat Lengkap</label>
                  <TextArea rows={4} placeholder="Alamat Lengkap" />
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
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white  bg-[#273b83] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={() => router.push("/login")}
            >
              Register
            </button>
            {/* <div className="flex flex-col gap-2 ">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Nama Lengkap</label>
                <Input placeholder="Nama Lengkap" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email</label>
                <Input placeholder="Email" type="email" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Password</label>
                <Input placeholder="Password" type="password" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">No Telepon</label>
                <Input placeholder="No Telepon" maxLength={13} type="number" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">NIK</label>
                <Input placeholder="No Telepon" maxLength={17} type="number" />
              </div>

              <button
                type="submit"
                className="w-full text-white  bg-[#273b83] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => router.push("/login")}
              >
                Register
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
