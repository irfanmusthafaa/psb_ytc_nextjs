"use client";

import React from "react";
import { Button, Divider, List, Typography } from "antd";
import { useRouter } from "next/navigation";

const items = ["Nama", "Tempat Tanggal Lahir"];

const datas: any = {
  nama: "Irfan Mustafa",
  tanggal_lahir: "23 Juli 1999",
};

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

export default function DetailSantri() {
    const router = useRouter()

    const handleButtonKembali = () => {
        router.push("/admin/data-santri")
    }
  return (
    <div className="bg-white h-auto m-8 box-border w-max-full rounded-xl">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">
          Detail Biodata Santri - Irfan Mustafa
        </p>
      </div>

      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-center items-start gap-10">
          <div className="w-[70%] flex flex-col gap-4">
            <ul className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:text-white">
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <span className="min-w-48">Nama</span> Irfan Mustafa
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <span className="min-w-48">Tanggal Lahir</span>23 Juli 1999
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <span className="min-w-48">Jenis Kelamin</span>Laki - laki
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <span className="min-w-48">Kota Asal</span>Bandung
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <span className="min-w-48">Alamat Lengkap</span>Kp. Muara
                Ciwidey RT 04 RW 01 Desa Cilampeni Kecamatan Katapang Kab
                Bandung
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <span className="min-w-48">Pendidikan Terakhir</span>SLTA/
                Sederajat
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <span className="min-w-48">NIK</span>30218981792491298
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <span className="min-w-48">No Telepon</span>0897526357612
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <span className="min-w-48">Jumlah Hafalan</span>10 Juz
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <span className="min-w-48">Status</span>
              </li>
            </ul>
          </div>

          {/* Kanan */}
          <div className="w-[30%] flex flex-col justify-center items-center gap-4">
            <img
              className="w-1/2 h-52 rounded-md"
              src="/images/foto.jpg"
              alt="Rounded avatar"
            />
          </div>
        </div>
      </div>
      {/* End Form */}

      <div className="py-4 px-6 flex justify-end items-center">
        <Button type="primary" className="bg-[#273b83]" onClick={handleButtonKembali}>
          Kembali
        </Button>
      </div>
    </div>
  );
}
