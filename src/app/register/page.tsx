"use client";

import { useRouter } from "next/navigation";

import type { DatePickerProps } from "antd";
import type { RadioChangeEvent } from "antd";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import { Upload } from "lucide-react";
const { TextArea } = Input;
import { ChangeEvent, useEffect, useState } from "react";
import { useRegisterUser } from "@/services/user/auth/register";
import { toast } from "react-toastify";

export default function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [TanggalLahir, setTanggalLahir] = useState<string | null>(null);
  const [JenisKelamin, setJenisKelamin] = useState("Laki-laki");
  const [KotaAsal, setKotaAsal] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [PendidikanTerakhir, setPendidikanTerakhir] = useState("");
  const [Nik, setNik] = useState("");
  const [NoTelp, setNoTelp] = useState("");
  const [selectedFileAvatar, setSelectedFileAvatar] = useState<File | null>(
    null
  );

  const router = useRouter();

  const {
    mutate: dataRegister,
    status,
    isSuccess,
    isError,
  } = useRegisterUser();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Register Berhasil");
      // router.push("/login");
      window.location.href = "/login";
    }
  }, [status]);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e) {
      const { id, value } = e.target;

      if (id === "Name") setName(value);
      if (id === "Email") setEmail(value);
      if (id === "Password") setPassword(value);
      if (id === "KotaAsal") setKotaAsal(value);
      if (id === "Alamat") setAlamat(value);
      if (id === "Nik") setNik(value);
      if (id === "NoTelp") setNoTelp(value);
    }
  };

  const onChangeTL: DatePickerProps["onChange"] = (date, dateString) => {
    if (date) {
      const formattedDate = date.format("YYYY-MM-DD");
      console.log("Selected date:", formattedDate);
      setTanggalLahir(formattedDate);
    } else {
      setTanggalLahir(null);
    }
  };

  const onChangeJk = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setJenisKelamin(e.target.value);
  };

  const handleChangePendidikan = (value: string) => {
    setPendidikanTerakhir(value);
  };

  const handleFileChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileAvatar(event.target.files[0]);
    }
  };

  const handleRegister = async () => {
    if (!Name) {
      toast.error("Nama wajib diisi");
      return;
    }
    if (!Email) {
      toast.error("Email wajib diisi");
      return;
    }
    if (!Password) {
      toast.error("Password wajib diisi");
      return;
    }
    if (!TanggalLahir) {
      toast.error("Tanggal Lahir wajib diisi");
      return;
    }
    if (!KotaAsal) {
      toast.error("Kota Asal wajib diisi");
      return;
    }
    if (!Alamat) {
      toast.error("Alamat wajib diisi");
      return;
    }
    if (!PendidikanTerakhir) {
      toast.error("Pendidikan Terakhir wajib diisi");
      return;
    }
    if (!Nik) {
      toast.error("NIK wajib diisi");
      return;
    }
    if (!NoTelp) {
      toast.error("Nomor Telepon wajib diisi");
      return;
    }
    if (!selectedFileAvatar) {
      toast.error("Foto wajib diisi");
      return;
    }
    const formData = new FormData();
    formData.append("name", Name);
    formData.append("email", Email);
    formData.append("password", Password);
    formData.append("phoneNumber", NoTelp);
    formData.append("nik", Nik);
    formData.append("tanggal_lahir", TanggalLahir ?? "");
    formData.append("jenis_kelamin", JenisKelamin);
    formData.append("kota_asal", KotaAsal);
    formData.append("alamat", Alamat);
    formData.append("pendidikan_terakhir", PendidikanTerakhir);

    if (selectedFileAvatar) {
      formData.append("image", selectedFileAvatar);
    }

    try {
      await dataRegister(formData);
    } catch (error) {
      return null;
    }

    // try {
    //   await createRegister(formData);
    //   toast.success("Update Profile Success");
    // } catch (error) {
    //   toast.error("Update Profile Failed");
    // }
  };

  // console.log(Name, "Name");
  // console.log(Email, "Email");
  // console.log(Password, "Password");
  // console.log(TanggalLahir, "TanggalLahir");
  // console.log(JenisKelamin, "JenisKelamin");
  // console.log(KotaAsal, "KotaAsal");
  // console.log(Alamat, "Alamat");
  // console.log(PendidikanTerakhir, "PendidikanTerakhir");
  // console.log(Nik, "Nik");
  // console.log(NoTelp, "NoTelp");
  // console.log(selectedFileAvatar, "Avatar");

  return (
    <section className="w-full text-gray-800 flex bg-gray-100 h-screen">
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
        <div className="w-full ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Register
            </h1>
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
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    id="Email"
                    onChange={handleInput}
                    placeholder="Email"
                    type="email"
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
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input
                    id="Password"
                    onChange={handleInput}
                    placeholder="Password"
                    type="password"
                  />
                </div>

                <div className="flex flex-col gap-2 ">
                  <label className="text-sm font-medium">Tanggal Lahir</label>
                  <DatePicker
                    id="TanggalLahir"
                    placeholder="Pilih Tanggal Lahir"
                    // defaultValue={dayjs(formatTanggal, dateFormat)}
                    onChange={onChangeTL}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Jenis Kelamin</label>
                  <Radio.Group onChange={onChangeJk} value={JenisKelamin}>
                    <Radio value={"Laki-laki"}>Laki- laki</Radio>
                    <Radio value={"Perempuan"}>Perempuan</Radio>
                  </Radio.Group>
                </div>
              </div>

              <div className="w-1/2 flex flex-col gap-4">
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
                    rows={4}
                    placeholder="Alamat Lengkap"
                  />
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
              className="w-full text-white  bg-[#273b83] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => {
                handleRegister();
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
