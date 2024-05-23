"use client";

import CardKecil from "@/components/molecules/card-kecil";
import ModalAlur from "@/components/molecules/modal/modal-alur";
import ModalCabang from "@/components/molecules/modal/modal-cabang";
import ModalFasilitas from "@/components/molecules/modal/modal-fasilitas";
import ModalPersyaratan from "@/components/molecules/modal/modal-persyaratan";
import ModalProgram from "@/components/molecules/modal/modal-program";
import {
  BookPlus,
  Building,
  HandCoins,
  ListChecks,
  Paperclip,
  RefreshCcw,
  User,
} from "lucide-react";
import { useState } from "react";

export default function CardInfo() {
  const [open, setOpen] = useState(false);
  const [OpenModalAlur, setOpenModalAlur] = useState(false);
  const [OpenModalProgram, setOpenModalProgram] = useState(false);
  const [OpenModalFasilitas, setOpenModalFasilitas] = useState(false);
  const [OpenModalCabang, setOpenModalCabang] = useState(false);

  return (
    <div className="bg-gray-100 flex flex-col gap-3 ">
      <div className=" ">
        <h2 className=" text-center text-2xl text-gray-800 font-semibold">
          Informasi PSB
        </h2>
      </div>
      <div className="w-full bg-gray-100 flex justify-center items-center flex-wrap gap-5 px-5 h-auto pb-24">
        <CardKecil
          title="Syarat Pendaftaran"
          description="Pelajari apa saja syarat untuk mendaftar menjadi santri baru di Young Tahfizh Center Indonesia."
          icons={<ListChecks className="w-12 h-12 mb-4 text-gray-900" />}
          onClick={() => setOpen(true)}
        />

        <CardKecil
          title="Alur Pendaftaran"
          description="Pelajari bagaimana alur pendaftaran santri baru di Young Tahfizh Center Indonesia"
          icons={<RefreshCcw className="w-12 h-12 mb-4" />}
          onClick={() => setOpenModalAlur(true)}
        />

        <CardKecil
          title="Program Pembelajaran"
          description="Pelajari apa saja program pembelajaran yang ada di Young Tahfizh Center Indonesia."
          icons={<BookPlus className="w-12 h-12 mb-4 text-gray-900" />}
          onClick={() => setOpenModalProgram(true)}
        />

        <CardKecil
          title="Fasilitas"
          description="Pelajari apa saja fasilitas jika sudah diterima menjadi santri di Young Tahfizh Center Indonesia."
          icons={<HandCoins className="w-12 h-12 mb-4 text-gray-900" />}
          onClick={() => setOpenModalFasilitas(true)}
        />

        <CardKecil
          title="Info Cabang"
          description="Pelajari dimana saja penempatan cabang jika anda sudah diterima menjadi santri di Young Tahfizh Center Indonesia"
          icons={<Building className="w-12 h-12 mb-4 text-gray-900" />}
          onClick={() => setOpenModalCabang(true)}
        />

        <ModalPersyaratan
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        />

        <ModalAlur
          open={OpenModalAlur}
          onOk={() => setOpenModalAlur(false)}
          onCancel={() => setOpenModalAlur(false)}
        />

        <ModalProgram
          open={OpenModalProgram}
          onOk={() => setOpenModalProgram(false)}
          onCancel={() => setOpenModalProgram(false)}
        />

        <ModalFasilitas
          open={OpenModalFasilitas}
          onOk={() => setOpenModalFasilitas(false)}
          onCancel={() => setOpenModalFasilitas(false)}
        />

        <ModalCabang
          open={OpenModalCabang}
          onOk={() => setOpenModalCabang(false)}
          onCancel={() => setOpenModalCabang(false)}
        />
      </div>
    </div>
  );
}
