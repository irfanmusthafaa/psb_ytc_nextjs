"use client";

import CardKecil from "@/components/molecules/card-kecil";
import ModalAlur from "@/components/molecules/modal/modal-alur";
import ModalCabang from "@/components/molecules/modal/modal-cabang";
import ModalFasilitas from "@/components/molecules/modal/modal-fasilitas";
import ModalPersyaratan from "@/components/molecules/modal/modal-persyaratan";
import ModalProgram from "@/components/molecules/modal/modal-program";
import { User } from "lucide-react";
import { useState } from "react";

export default function CardInfo() {
  const [open, setOpen] = useState(false);
  const [OpenModalAlur, setOpenModalAlur] = useState(false);
  const [OpenModalProgram, setOpenModalProgram] = useState(false);
  const [OpenModalFasilitas, setOpenModalFasilitas] = useState(false);
  const [OpenModalCabang, setOpenModalCabang] = useState(false);

  return (
    <div className="flex justify-center items-center flex-wrap gap-5 px-5 h-auto py-10">
      <CardKecil
        title="Syarat Pendaftaran"
        description="Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others."
        icons={<User className="w-12 h-12 mb-4 text-gray-900" />}
        onClick={() => setOpen(true)}
      />

      <CardKecil
        title="Alur Pendaftaran"
        description="Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others."
        icons={<User className="w-12 h-12 mb-4 text-gray-900" />}
        onClick={() => setOpenModalAlur(true)}
      />

      <CardKecil
        title="Program Pembelajaran"
        description="Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others."
        icons={<User className="w-12 h-12 mb-4 text-gray-900" />}
        onClick={() => setOpenModalProgram(true)}
      />

      <CardKecil
        title="Fasilitas"
        description="Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others."
        icons={<User className="w-12 h-12 mb-4 text-gray-900" />}
        onClick={() => setOpenModalFasilitas(true)}
      />

      <CardKecil
        title="Info Cabang"
        description="Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others."
        icons={<User className="w-12 h-12 mb-4 text-ggray-900" />}
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
  );
}
