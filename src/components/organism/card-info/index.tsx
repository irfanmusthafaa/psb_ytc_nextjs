"use client";

import CardKecil from "@/components/molecules/card-kecil";
import ModalPersyaratan from "@/components/molecules/modal/modal-persyaratan";
import { User } from "lucide-react";
import { useState } from "react";

export default function CardInfo() {
  const [open, setOpen] = useState(false);
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
      />

      <CardKecil
        title="Program Pembelajaran"
        description="Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others."
        icons={<User className="w-12 h-12 mb-4 text-gray-900" />}
      />

      <CardKecil
        title="Fasilitas"
        description="Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others."
        icons={<User className="w-12 h-12 mb-4 text-gray-900" />}
      />

      <CardKecil
        title="Info Cabang"
        description="Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others."
        icons={<User className="w-12 h-12 mb-4 text-gray-900" />}
      />

      <ModalPersyaratan
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </div>
  );
}
