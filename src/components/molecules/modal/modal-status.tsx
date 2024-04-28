import React from "react";
import { Input, Modal, Select } from "antd";

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
}

const ModalStatus: React.FC<ModalStatusProps> = ({ open, onCancel, onOk }) => {
  const handleChangeStatus = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Modal centered width={500} open={open} onCancel={onCancel} onOk={onOk}>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Edit Nilai dan Status Kelulusan
      </h2>
      <div className="mt-5 w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Nilai Tes Seleksi</label>
          <Input type="number" placeholder="Contoh 90" />
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
      </div>
    </Modal>
  );
};

export default ModalStatus;
