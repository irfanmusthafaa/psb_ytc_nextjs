"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useGetDetailUser } from "@/services/admin/users/detail-user";
import { SantriTypes } from "@/services/data-types";
import { Button } from "antd";
import ModalStatus from "@/components/molecules/modal/modal-status";

interface DataSantriProps {
  data: SantriTypes;
}

export default function DetailSantri() {
  const [Users, setUsers] = useState<SantriTypes | null>(null);
  const [openModalStatus, setOpenModalStatus] = useState(false);

  const params = useParams();
  const { slug } = params;

  const { data: dataUsers, isLoading, isError } = useGetDetailUser();

  useEffect(() => {
    if (!isLoading && !isError) {
      setUsers(dataUsers?.data || []);
    }
  }, [dataUsers, isLoading, isError]);

  console.log(Users, "Users");

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
                <span className="min-w-48">Nama</span> {Users?.name}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Tanggal Lahir</span>
                {Users?.tanggal_lahir}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Jenis Kelamin</span>
                {Users?.jenis_kelamin}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Kota Asal</span>
                {Users?.kota_asal}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Alamat Lengkap</span>
                {Users?.alamat}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Pendidikan Terakhir</span>
                {Users?.pendidikan_terakhir}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">NIK</span>
                {Users?.nik}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">No Telepon</span>
                {Users?.phoneNumber}
              </li>
              <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
                <span className="min-w-48">Status</span>
                {Users?.status}
              </li>
            </ul>
          </div>

          {/* Kanan */}
          <div className="w-[30%] flex flex-col justify-center items-center gap-4">
            <img
              className="w-1/2 h-52 rounded-md"
              src={`${process.env.NEXT_PUBLIC_IMG}/${Users?.avatar}`}
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
              <span className="min-w-48">Nama Ayah</span> {Users?.nama_ayah}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Nama Ibu</span>
              {Users?.nama_ibu}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">No Telepon</span>
              {Users?.no_telp_ortu}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Alamat Lengkap</span>
              {Users?.alamat_ortu}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Pekerjaan Ayah</span>
              {Users?.pekerjaan_ayah}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Pekerjaan Ibu</span>
              {Users?.pekerjaan_ibu}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Penghasilan Orang Tua</span>
              {Users?.penghasilan_ortu}
            </li>
          </ul>
        </div>
      </div>
      {/* End Form */}

      <div className="py-4 px-6 flex justify-end items-center">
        <Button
          type="primary"
          className="bg-[#273b83]"
          onClick={() => setOpenModalStatus(true)}
        >
          Edit Status Kelulusan
        </Button>
      </div>

      <ModalStatus
        open={openModalStatus}
        onOk={() => setOpenModalStatus(false)}
        onCancel={() => setOpenModalStatus(false)}
      />
    </div>
  );
}
