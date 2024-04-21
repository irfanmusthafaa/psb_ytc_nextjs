import React from "react";
import { Modal } from "antd";

const datas = [
  {
    namaCabang: "YTC Indonesia",
    alamat:
      "Jl. Sungai Progo No.239 RT 01 RW 01 Semper Bar, Kec. Clincing, Jakarta Utara, DKI Jakarta 14130",
  },
  {
    namaCabang: "YTC Indonesia x PTQ Roudhotul Muta'alimin Jogjakarta",
    alamat:
      "Jl. Suryodiningrat, Kec. Mantrijeron, Kota Yogyakarta, DI Yogyakarta 55141",
  },
  {
    namaCabang: "YTC Indonesia x RTQ Al Huda Cikarang",
    alamat:
      "Jl. Waluya, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530",
  },
  {
    namaCabang: "YTC Indonesia x Berkah Tunas Bangsa Subang",
    alamat:
      "Jl. Desa Ciracas, Kec. Kalijati, Kabupaten Subang, Jawa Barat 41271",
  },
  {
    namaCabang: "YTC Indonesia x Yasqi Bandung",
    alamat:
      "Jl.Kav.Pos.Giro 2 No. 48, Cimekar, Kec. Cileunyi, Kabupaten Bandung, Jawa Barat 40623",
  },
  {
    namaCabang: "YTC Indonesia x Yaa Bunayya Bandung",
    alamat:
      "Belakang Komplek Green Hill, Jl. Kp. Nyalindung Atas, Cimbuleuit, Kec. Cicadap, Kota Bandung, Jawa Barat 40142",
  },
];

interface ModalCabangProps {
  open: boolean;
  onCancel?: () => void;
  onOk: () => void;
}

const ModalCabang: React.FC<ModalCabangProps> = ({ open, onCancel, onOk }) => {
  return (
    <Modal centered width={500} open={open} onCancel={onCancel} onOk={onOk}>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Alamat Cabang:
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        {datas?.map((data: any) => (
          <li className="flex items-start">
            <svg
              className="mt-1 w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <div>
              <p className="font-bold">{data.namaCabang}</p>
              <p>{data.alamat}</p>
            </div>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default ModalCabang;
