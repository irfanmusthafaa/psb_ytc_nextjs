"use client";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import type { DatePickerProps } from "antd";
import type { RadioChangeEvent } from "antd";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import { Upload } from "lucide-react";
const { TextArea } = Input;
import { ChangeEvent, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);
export default function EditProfil() {
  const [Name, setName] = useState("");
  // const [TanggalLahir, setTanggalLahir] = useState<Date | null>(null);
  const [TanggalLahir, setTanggalLahir] = useState("");
  const [JenisKelamin, setJenisKelamin] = useState("");
  const [KotaAsal, setKotaAsal] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [PendidikanTerakhir, setPendidikanTerakhir] = useState("");
  const [Nik, setNik] = useState("");
  const [NoTelp, setNoTelp] = useState("");
  const [NamaAyah, setNamaAyah] = useState("");
  const [NamaIbu, setNamaIbu] = useState("");
  const [NoTelpOrtu, setNoTelpOrtu] = useState("");
  const [AlamatOrtu, setAlamatOrtu] = useState("");
  const [PekerjaanAyah, setPekerjaanAyah] = useState("");
  const [PekerjaanIbu, setPekerjaanIbu] = useState("");
  const [PenghasilanOrtu, setPenghasilanOrtu] = useState("");

  const [value, setValue] = useState(1);
  const [selectedFileAvatar, setSelectedFileAvatar] = useState<File | null>(
    null
  );

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e) {
      const { id, value } = e.target;

      if (id === "Name") setName(value);
      if (id === "KotaAsal") setKotaAsal(value);
      if (id === "Alamat") setAlamat(value);
      if (id === "Nik") setNik(value);
      if (id === "NoTelp") setNoTelp(value);
      if (id === "NamaAyah") setNamaAyah(value);
      if (id === "NamaIbu") setNamaIbu(value);
      if (id === "NoTelpOrtu") setNoTelpOrtu(value);
      if (id === "AlamatOrtu") setAlamatOrtu(value);
      if (id === "PekerjaanAyah") setPekerjaanAyah(value);
      if (id === "PekerjaanIbu") setPekerjaanIbu(value);
      if (id === "PenghasilanOrtu") setPenghasilanOrtu(value);
    }
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    // const tanggal = dateString;
    // console.log(date, dateString, "date");
    const dateFix = setTanggalLahir(date);
  };

  const onChangeJk = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setJenisKelamin(e.target.value);
  };

  const handleChangePendidikan = (value: string) => {
    console.log(`selected ${value}`);
    setPendidikanTerakhir(value);
  };

  const handleFileChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileAvatar(event.target.files[0]);
    }
  };

  const dateFormat = "YYYY-MM-DD";

  console.log(Name, "Name");
  console.log(TanggalLahir, "TanggalLahir");
  console.log(JenisKelamin, "JenisKelamin");
  console.log(KotaAsal, "KotaAsal");
  console.log(Alamat, "Alamat");
  console.log(PendidikanTerakhir, "PendidikanTerakhir");
  console.log(Nik, "Nik");
  console.log(NoTelp, "NoTelp");
  console.log(NamaAyah, "NamaAyah");
  console.log(NamaIbu, "NamaIbu");
  console.log(NoTelpOrtu, "NoTelpOrtu");
  console.log(AlamatOrtu, "AlamatOrtu");
  console.log(PekerjaanAyah, "PekerjaanAyah");
  console.log(PekerjaanIbu, "PekerjaanIbu");
  console.log(PenghasilanOrtu, "PenghasilanOrtu");
  console.log(selectedFileAvatar, "Avatar");
  return (
    <div className="bg-white h-auto m-8 box-border w-max-full rounded-xl text-black">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">Input Biodata Santri</p>
      </div>

      {/* Form */}
      <div className="pt-5 pb-10 px-6 ">
        <div className="w-full flex justify-center items-start gap-10">
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Nama Lengkap</label>
              <Input
                id="Name"
                onChange={handleInput}
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-sm font-medium">Tanggal Lahir</label>
              <DatePicker
                id="TanggalLahir"
                // onChange={onChangeDate}
                defaultValue={dayjs("2024-09-03", dateFormat)}
                onChange={() => setTanggalLahir}
              />
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
              <Input
                id="KotaAsal"
                onChange={handleInput}
                placeholder="Kota Asal"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Alamat Lengkap</label>
              <TextArea
                id="Alamat"
                onChange={handleInput}
                rows={5}
                placeholder="Alamat Lengkap"
              />
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
              <Input
                id="Nik"
                onChange={handleInput}
                placeholder="NIK"
                maxLength={17}
                type="number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">No Telepon</label>
              <Input
                id="NoTelp"
                onChange={handleInput}
                placeholder="No Telepon"
                maxLength={13}
                type="number"
              />
            </div>
            {/* <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Jumlah Hafalan (Juz)
              </label>
              <Input placeholder="Jumlah Hafalan" maxLength={2} type="number" />
            </div> */}
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
      </div>
      {/* End Form */}

      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">
          Input Data Orang Tua/ Wali
        </p>
      </div>

      {/* Form  Ortu*/}
      <div className="pt-5 pb-10 px-6 ">
        <div className="w-full flex justify-center items-start gap-10">
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Nama Ayah</label>
              <Input
                id="NamaAyah"
                onChange={handleInput}
                placeholder="Nama Ayah"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Nama Ibu</label>
              <Input
                id="NamaIbu"
                onChange={handleInput}
                placeholder="Nama Ibu"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">No Orang Tua/ Wali</label>
              <Input
                id="NoTelpOrtu"
                onChange={handleInput}
                placeholder="No Orang Tua/ Wali"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Alamat Orang Tua/ Wali
              </label>
              <TextArea
                id="AlamatOrtu"
                onChange={handleInput}
                rows={4}
                placeholder="Alamat Orang Tua/ Wali"
              />
            </div>
          </div>

          {/* Kanan */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Pekerjaan Ayah</label>
              <Input
                id="PekerjaanAyah"
                onChange={handleInput}
                placeholder="Pekerjaan Ayah"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Pekerjaan Ibu</label>
              <Input
                id="PekerjaanIbu"
                onChange={handleInput}
                placeholder="Pekerjaan Ibu"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Penghasilan Orang Tua
              </label>
              <Input
                id="PenghasilanOrtu"
                onChange={handleInput}
                placeholder="Penghasilan Orang Tua"
                maxLength={17}
                type="number"
              />
            </div>
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
