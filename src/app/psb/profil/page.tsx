"use client";

import React, { useEffect, useState } from "react";
import { Button, Divider, List, Typography } from "antd";
import { useGetProfileUser } from "@/services/user/profil/get-profil";

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

export default function Profil() {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  const { data: dataProfile, isLoading, isError } = useGetProfileUser();

  console.log(profile, "Profils");

  useEffect(() => {
    if (!isLoading && !isError) {
      setProfile(dataProfile || {});
    }
  }, [dataProfile, isLoading, isError]);

  return (
    <div className="bg-white h-auto m-8 box-border w-max-full rounded-xl">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">
          Detail Biodata Santri
        </p>
      </div>

      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-center items-start gap-10">
          <div className="w-[70%] flex flex-col gap-4">
            <h2 className="px-4 font-semibold text-md text-black">
              Data Santri
            </h2>
            <ul className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg ">
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Nama</span> {profile?.name}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Tanggal Lahir</span>
                {profile?.tanggal_lahir}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Jenis Kelamin</span>
                {profile?.jenis_kelamin}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Kota Asal</span>
                {profile?.kota_asal}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Alamat Lengkap</span>
                {profile?.alamat}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Pendidikan Terakhir</span>
                {profile?.pendidikan_terakhir}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">NIK</span>
                {profile?.nik}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">No Telepon</span>
                {profile?.phoneNumber}
              </li>
              {/* <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Jumlah Hafalan</span>10 Juz
              </li> */}
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Status</span>
                {profile?.status}
              </li>
            </ul>
          </div>

          {/* Kanan */}
          <div className="w-[30%] flex flex-col justify-center items-center gap-4">
            <img
              className="w-1/2 h-52 rounded-md"
              src={`${process.env.NEXT_PUBLIC_IMG}/${profile?.avatar}`}
              alt="Rounded avatar"
            />
          </div>
        </div>
        {/* Data Orang Tua */}
        <div className="w-[70%] mt-5 flex flex-col gap-4 bg-white">
          <h2 className="px-4 font-semibold text-md  text-black">
            Data Orang Tua/ Wali
          </h2>
          <ul className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg ">
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Nama Ayah</span> {profile?.nama_ayah}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Nama Ibu</span>
              {profile?.nama_ibu}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">No Telepon</span>
              {profile?.no_telp_ortu}
            </li>
            {/* <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Alamat Lengkap</span>{profile?.alamat}
            </li> */}
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Pekerjaan Ayah</span>
              {profile?.pekerjaan_ayah}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Pekerjaan Ibu</span>
              {profile?.pekerjaan_ibu}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Penghasilan Orang Tua</span>
              {profile?.penghasilan_ortu}
            </li>
          </ul>
        </div>
      </div>
      {/* End Form */}

      <div className="py-4 px-6 flex justify-end items-center">
        <Button type="primary" className="bg-[#273b83]">
          Edit Data
        </Button>
      </div>
    </div>
  );
}
