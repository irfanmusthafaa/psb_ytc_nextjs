import React from "react";
import { Modal } from "antd";

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

interface ModalProgramProps {
  open: boolean;
  onCancel?: () => void;
  onOk: () => void;
}

const ModalProgram: React.FC<ModalProgramProps> = ({
  open,
  onCancel,
  onOk,
}) => {
  return (
    <Modal centered width={500} open={open} onCancel={onCancel} onOk={onOk}>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Program Pembelajaran:
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        {datas?.map((data: any) => (
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            {data}
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default ModalProgram;
