import React, { ChangeEvent, useState } from "react";
import { Button, Input, Modal, Select } from "antd";
import { toast } from "react-toastify";
import { editStatusUser } from "@/services/admin/users/put-status";
import { useParams } from "next/navigation";

const datas = [
  "Menghafal Al Quran 30 juz (selama 6 bulan)",
  "Tasmi' pekanan/ bulanan/ akhir program",
  "Murojaah hafalan setiap malam",
  "Kajian Kitab At- Tibyan Fii Hamalatil Quran",
  "Pembekalan bahasa arab dasar",
  "Pembekalan Tahsin Kitab Thufatul Athfal",
  "Kajian Tematik Bulanan",
  "Pelatihan Softskill/ Training Leadership/ Public Speaking",
];

interface ModalStatusProps {
  open: boolean;
  onCancel?: () => void;
  onOk: () => void;
  openModalStatus: () => void;
  setOpenModalStatus: () => void;
}

const ModalStatus: React.FC<ModalStatusProps> = ({
  open,
  onCancel,
  onOk,
  openModalStatus,
  setOpenModalStatus,
}) => {
  const [Status, setStatus] = useState("");
  const [Nilai, setNilai] = useState<number | null>(null);

  const params = useParams();

  const { slug } = params;
  const id = slug as string;

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e) {
      const { id, value } = e.target;
      if (id === "Nilai") setNilai(Number(value));
    }
  };

  const handleChangeStatus = (value: string) => {
    console.log(`selected ${value}`);
    setStatus(value);
  };

  const handleUpdateStatus = () => {
    if (!Nilai) {
      toast.error("Nilai wajib diisi");
      return;
    }
    if (!Status) {
      toast.error("Status wajib dipilih");
      return;
    }
    editStatusUser(id, {
      nilai: Nilai,
      status: Status,
    });

    toast.success("Update Seleksi Berhasil");
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };

  return (
    <Modal
      centered
      width={500}
      open={open}
      onOk={() => setOpenModalStatus(false)}
      onCancel={() => setOpenModalStatus(false)}
    >
      <h2 className="mb-2 text-lg font-semibold text-gray-900 ">
        Edit Nilai dan Status Kelulusan
      </h2>
      <div className="mt-5 w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Nilai Tes Seleksi</label>
          <Input
            id="Nilai"
            onChange={handleInput}
            type="number"
            placeholder="Contoh 90"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Status Kelulusan</label>
          <Select
            defaultValue="Pilih Status"
            onChange={handleChangeStatus}
            options={[
              { value: "Lulus", label: "Lulus" },
              { value: "Tidak Lulus", label: "Tidak Lulus" },
            ]}
          />
        </div>
        <Button type="primary">Simpan</Button>
      </div>
    </Modal>
  );
};

export default ModalStatus;
