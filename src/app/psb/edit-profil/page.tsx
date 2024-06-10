"use client";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import type { DatePickerProps } from "antd";
import type { RadioChangeEvent } from "antd";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import { Upload } from "lucide-react";
const { TextArea } = Input;
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UpdateProfile } from "@/services/user/profil/edit-profil";
import { useGetProfileUser } from "@/services/user/profil/get-profil";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import moment from "moment";
import { useRouter } from "next/navigation";

dayjs.extend(customParseFormat);

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

export default function EditProfil() {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  const [Name, setName] = useState("");
  const [TanggalLahir, setTanggalLahir] = useState<string | null>(null);
  const [JenisKelamin, setJenisKelamin] = useState("Laki-laki");
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
  const [selectedFileAvatar, setSelectedFileAvatar] = useState<File | null>(
    null
  );

  const router = useRouter();

  const { data: dataProfile, isLoading, isError } = useGetProfileUser();

  useEffect(() => {
    if (!isLoading && !isError && dataProfile) {
      setProfile(dataProfile);
      setName(dataProfile.name || "");
      setTanggalLahir(dataProfile?.tanggal_lahir || null);
      setJenisKelamin(dataProfile.jenis_kelamin || "Laki-laki");
      setKotaAsal(dataProfile.kota_asal || "");
      setAlamat(dataProfile.alamat || "");
      setPendidikanTerakhir(dataProfile.pendidikan_terakhir || "");
      setNik(dataProfile.nik || "");
      setNoTelp(dataProfile.phoneNumber || "");
      setNamaAyah(dataProfile.nama_ayah || "");
      setNamaIbu(dataProfile.nama_ibu || "");
      setNoTelpOrtu(dataProfile.no_telp_ortu || "");
      setAlamatOrtu(dataProfile.alamat_ortu || "");
      setPekerjaanAyah(dataProfile.pekerjaan_ayah || "");
      setPekerjaanIbu(dataProfile.pekerjaan_ibu || "");
      setPenghasilanOrtu(dataProfile.penghasilan_ortu?.toString() || "");
      // setSelectedFileAvatar(dataProfile.avatar);
      if (dataProfile.avatar) {
        setSelectedFileAvatar(
          new File([dataProfile.avatar], dataProfile.avatar)
        );
      }
    }
  }, [
    dataProfile,
    dataProfile?.name,
    dataProfile?.tanggal_lahir,
    dataProfile?.jenis_kelamin,
    dataProfile?.kota_asal,
    dataProfile?.alamat,
    dataProfile?.pendidikan_terakhir,
    dataProfile?.nik,
    dataProfile?.phoneNumber,
    dataProfile?.nama_ayah,
    dataProfile?.nama_ibu,
    dataProfile?.no_telp_ortu,
    dataProfile?.alamat_ortu,
    dataProfile?.pekerjaan_ayah,
    dataProfile?.pekerjaan_ibu,
    dataProfile?.penghasilan_ortu,
    isLoading,
    isError,
  ]);

  // const isoDate = profile?.tanggal_lahir;
  // const formatTanggal = moment(isoDate).format("YYYY-MM-DD");
  // console.log(formatTanggal, "format date");

  console.log(profile, "Profils");

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

  const handleUpdateProfile = async () => {
    if (!Name) {
      toast.error("Nama wajib diisi");
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
    if (!NamaAyah) {
      toast.error("Nama Ayah wajib diisi");
      return;
    }
    if (!NamaIbu) {
      toast.error("Nama Ibu wajib diisi");
      return;
    }
    if (!NoTelpOrtu) {
      toast.error("Nomor Telepon Orang Tua wajib diisi");
      return;
    }
    if (!PekerjaanAyah) {
      toast.error("Pekerjaan Ayah wajib diisi");
      return;
    }
    if (!PekerjaanIbu) {
      toast.error("Pekerjaan Ibu wajib diisi");
      return;
    }
    if (!AlamatOrtu) {
      toast.error("Alamat Orang Tua wajib diisi");
      return;
    }
    if (!PenghasilanOrtu) {
      toast.error("Penghasilan Orang Tua wajib diisi");
      return;
    }
    const formData = new FormData();
    formData.append("name", Name);
    formData.append("phoneNumber", NoTelp);
    formData.append("nik", Nik);
    formData.append("tanggal_lahir", TanggalLahir ?? "");
    formData.append("jenis_kelamin", JenisKelamin);
    formData.append("kota_asal", KotaAsal);
    formData.append("alamat", Alamat);
    formData.append("pendidikan_terakhir", PendidikanTerakhir);
    formData.append("nama_ayah", NamaAyah);
    formData.append("nama_ibu", NamaIbu);
    formData.append("no_telp_ortu", NoTelpOrtu);
    formData.append("pekerjaan_ayah", PekerjaanAyah);
    formData.append("pekerjaan_ibu", PekerjaanIbu);
    formData.append("penghasilan_ortu", PenghasilanOrtu);
    formData.append("alamat_ortu", AlamatOrtu);
    if (selectedFileAvatar) {
      formData.append("avatar", selectedFileAvatar);
    }

    try {
      await UpdateProfile(formData);
      toast.success("Update Profile Success");
      router.push("/psb/profil");
    } catch (error) {
      toast.error("Update Profile Failed");
    }

    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };

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
  const dateFormat = "YYYY-MM-DD";
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
                value={Name}
                onChange={handleInput}
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-sm font-medium">Tanggal Lahir</label>
              <DatePicker
                id="TanggalLahir"
                placeholder="Pilih Tanggal"
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
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Kota Asal</label>
              <Input
                id="KotaAsal"
                value={KotaAsal}
                onChange={handleInput}
                placeholder="Kota Asal"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Alamat Lengkap</label>
              <TextArea
                id="Alamat"
                value={Alamat}
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
                // value={PendidikanTerakhir}
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
              <label className="text-sm font-medium">NIK</label>
              <Input
                id="Nik"
                value={Nik}
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
                value={NoTelp}
                onChange={handleInput}
                placeholder="No Telepon"
                maxLength={13}
                type="number"
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
                    {selectedFileAvatar.name}
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 font-extralight ">
                    Upload Foto Profil
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
                value={NamaAyah}
                onChange={handleInput}
                placeholder="Nama Ayah"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Nama Ibu</label>
              <Input
                id="NamaIbu"
                value={NamaIbu}
                onChange={handleInput}
                placeholder="Nama Ibu"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">No Orang Tua/ Wali</label>
              <Input
                id="NoTelpOrtu"
                value={NoTelpOrtu}
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
                value={AlamatOrtu}
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
                value={PekerjaanAyah}
                onChange={handleInput}
                placeholder="Pekerjaan Ayah"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Pekerjaan Ibu</label>
              <Input
                id="PekerjaanIbu"
                value={PekerjaanIbu}
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
                value={PenghasilanOrtu}
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
        <Button
          type="primary"
          className="bg-[#273b83] hover:bg-red-100"
          onClick={() => {
            handleUpdateProfile();
          }}
        >
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
}
