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

  const handleDownload = (url: any) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop(); // Use the file name from the URL
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatRupiah = (number: any) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

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
              <span className="min-w-48">Nama Ayah</span>
              {Users?.nama_ayah || (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Nama Ibu</span>
              {Users?.nama_ibu || (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">No Telepon</span>
              {Users?.no_telp_ortu || (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Alamat Lengkap</span>
              {Users?.alamat_ortu || (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Pekerjaan Ayah</span>
              {Users?.pekerjaan_ayah || (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Pekerjaan Ibu</span>
              {Users?.pekerjaan_ibu || (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Penghasilan Orang Tua</span>
              {Users?.penghasilan_ortu ? (
                formatRupiah(Users?.penghasilan_ortu)
              ) : (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
          </ul>
        </div>

        {/* Data Dokumen */}
        <div className="w-[70%] mt-5 flex flex-col gap-4 bg-white">
          <h2 className="px-4 font-semibold text-md  text-black">
            Data Dokumen
          </h2>
          <ul className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg ">
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">KTP</span>
              {Users?.document_id?.ktp ? (
                <div className="flex justify-between w-full">
                  {Users?.document_id?.ktp}
                  <Button
                    onClick={() =>
                      handleDownload(
                        `${process.env.NEXT_PUBLIC_IMG}/${Users?.document_id?.ktp}`
                      )
                    }
                  >
                    Download
                  </Button>
                </div>
              ) : (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">KK</span>
              {Users?.document_id?.kk ? (
                <div className="flex justify-between w-full">
                  {Users?.document_id?.kk}
                  <Button
                    onClick={() =>
                      handleDownload(
                        `${process.env.NEXT_PUBLIC_IMG}/${Users?.document_id?.kk}`
                      )
                    }
                  >
                    Download
                  </Button>
                </div>
              ) : (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Ijazah</span>
              {Users?.document_id?.ijazah ? (
                <div className="flex justify-between w-full">
                  {Users?.document_id?.ijazah}
                  <Button
                    onClick={() =>
                      handleDownload(
                        `${process.env.NEXT_PUBLIC_IMG}/${Users?.document_id?.ijazah}`
                      )
                    }
                  >
                    Download
                  </Button>
                </div>
              ) : (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>

            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Sertifikat</span>
              {Users?.document_id?.sertifikat ? (
                <div className="flex justify-between w-full">
                  {Users?.document_id?.sertifikat}
                  <Button
                    onClick={() =>
                      handleDownload(
                        `${process.env.NEXT_PUBLIC_IMG}/${Users?.document_id?.sertifikat}`
                      )
                    }
                  >
                    Download
                  </Button>
                </div>
              ) : (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
          </ul>
        </div>

        {/* Data Infaq */}
        <div className="w-[70%] mt-5 flex flex-col gap-4 bg-white">
          <h2 className="px-4 font-semibold text-md  text-black">Data Infaq</h2>
          <ul className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg ">
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Rekening Tujuan</span>
              {Users?.infaq_id?.rekening_tujuan || (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Total Transfer</span>
              {Users?.infaq_id?.total_transfer ? (
                formatRupiah(Users?.infaq_id?.total_transfer)
              ) : (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Atas Nama</span>
              {Users?.infaq_id?.atas_nama || (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Bukti Transfer</span>
              {Users?.infaq_id?.bukti_pembayaran ? (
                <div className="flex justify-between w-full">
                  {Users?.infaq_id?.bukti_pembayaran}
                  <Button
                    onClick={() =>
                      handleDownload(
                        `${process.env.NEXT_PUBLIC_IMG}/${Users?.infaq_id?.bukti_pembayaran}`
                      )
                    }
                  >
                    Download
                  </Button>
                </div>
              ) : (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
          </ul>
        </div>

        {/* Data Seleksi */}
        <div className="w-[70%] mt-5 flex flex-col gap-4 bg-white">
          <h2 className="px-4 font-semibold text-md  text-black">
            Data Seleksi
          </h2>
          <ul className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg ">
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Soal Seleksi</span>
              {Users?.seleksi_id?.soal_seleksi || (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Link Rekaman</span>
              {Users?.seleksi_id?.link_rekaman ? (
                <a
                  className="cursor-pointer underline text-blue-500"
                  href={Users?.seleksi_id?.link_rekaman}
                  target="_blank"
                >
                  Lihat
                </a>
              ) : (
                <span className="text-red-500">data belum di isi</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Nilai</span>
              {Users?.nilai || (
                <span className="text-red-500">belum diproses</span>
              )}
            </li>
            <li className="w-full flex justify-start items-center px-4 py-2 border-b border-gray-200 rounded-t-lg ">
              <span className="min-w-48">Status</span>
              {Users?.status}
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
        // openModalStatus={openModalStatus}
        setOpenModalStatus={setOpenModalStatus}
        // onOk={() => setOpenModalStatus(false)}
        // onCancel={() => setOpenModalStatus(false)}
      />
    </div>
  );
}
