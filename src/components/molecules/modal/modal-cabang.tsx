import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { CabangTypes } from "@/services/data-types";
import { useGetCabang } from "@/services/admin/cabang/get-fasilitas";

interface ModalCabangProps {
  open: boolean;
  onCancel?: () => void;
  onOk: () => void;
}

const ModalCabang: React.FC<ModalCabangProps> = ({ open, onCancel, onOk }) => {
  const [data, setData] = useState<CabangTypes[] | null>(null);

  const { data: dataCabang, isLoading, isError } = useGetCabang();

  useEffect(() => {
    if (!isLoading && !isError) {
      setData(dataCabang || []);
    }
  }, [dataCabang, isLoading, isError]);
  return (
    <Modal
      centered
      width={500}
      footer={null}
      open={open}
      onCancel={onCancel}
      onOk={onOk}
    >
      <h2 className="mb-2 text-lg font-semibold text-gray-900">
        Alamat Cabang:
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        {data?.map((item: any) => (
          <li key={item._id} className="flex items-start">
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
              <p className="font-bold">{item.cabang}</p>
              <p>{item.alamat}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-end items-end w-full mt-3">
        <Button type="primary" onClick={onOk}>
          Ok
        </Button>
      </div>
    </Modal>
  );
};

export default ModalCabang;
