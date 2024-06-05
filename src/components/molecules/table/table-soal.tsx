"use client";

import React, { ChangeEvent, useState } from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, Eye, FilePenLine, Maximize2, Trash2 } from "lucide-react";
import ModalStatus from "../modal/modal-status";
import { SantriTypes, SoalTypes } from "@/services/data-types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { createSoalSeleksi } from "@/services/admin/soal/create-soal";

interface DataSoalProps {
  data: SoalTypes[];
}

interface DataType {
  key: string;
  id?: string;
  soal: string;
}

export default function TableSantri(props: DataSoalProps) {
  const { data } = props;
  const [openModalStatus, setOpenModalStatus] = useState(false);

  const [Label, setLabel] = useState("");

  console.log(data, "data");

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      render: (text) => <>{text}</>,
    },
    {
      title: "Soal Seleksi",
      dataIndex: "soal",
      key: "soal",
      render: (text) => <>{text}</>,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            className="flex justify-center items-center  gap-2  text-gray-700  border-none hover:bg-amber-900 hover:border-0 hover:text-white hover:border-none rounded-full"
            //   onClick={() => setOpenModalStatus(true)}
          >
            {/* <Expand /> */}
            {/* Edit Status */}
            <FilePenLine />
          </Button>
          <Button className=" text-gray-700 hover:bg-red-900 rounded-none border-none">
            {/* <DeleteOutlined /> */}
            {/* Hapus */}
            <Trash2 />
          </Button>
        </Space>
      ),
    },
  ];
  const dataSource: DataType[] = data?.map((item, index) => ({
    key: (index + 1).toString(),
    id: item._id,
    soal: item.soal,
  }));

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e) {
      const { id, value } = e.target;
      if (id === "Label") setLabel(value);
    }
  };

  const handleCreateSoal = () => {
    if (!Label) {
      toast.error("Soal Seleksi wajib diisi");
      return;
    }

    createSoalSeleksi({
      soal: Label,
    });

    toast.success("Tambah Soal Berhasil");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  console.log(Label, "SOal lab");
  return (
    <>
      <div className="pt-3">
        <div className="w-full flex justify-between gap-3 mb-3">
          <Input
            id="Label"
            onChange={handleInput}
            placeholder="Tambah Soal Seleksi"
          />
          <Button
            type="primary"
            onClick={() => {
              handleCreateSoal();
            }}
          >
            Tambah Data
          </Button>
        </div>

        <Table columns={columns} dataSource={dataSource} className="w-full" />
      </div>
    </>
  );
}
