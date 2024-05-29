"use client";

import React, { useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, FilePenLine, Maximize2, Trash2 } from "lucide-react";
import ModalStatus from "../modal/modal-status";

interface DataType {
  key: string;
  nama_santri: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  kota_asal: string;
  tags: string[];
}

const TableSantri: React.FC = () => {
  const [openModalStatus, setOpenModalStatus] = useState(false);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Nama Santri",
      dataIndex: "nama_santri",
      key: "nama_santri",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tanggal Lahir",
      dataIndex: "tanggal_lahir",
      key: "tanggal_lahir",
    },
    {
      title: "Jenis Kelamin",
      dataIndex: "jenis_kelamin",
      key: "jenis_kelamin",
    },
    {
      title: "Kota Asal",
      dataIndex: "kota_asal",
      key: "kota_asal",
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag === "Lulus" ? "green" : "geekblue";
            if (tag === "Tidak Lulus") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button className="flex justify-center  items-center  gap-2  text-gray-700 border-none hover:bg-amber-900 hover:border-0 hover:text-white hover:border-none rounded-full">
            {/* <Expand /> */}
            <Maximize2 />
          </Button>
          <Button
            className="flex justify-center items-center  gap-2  text-gray-700  border-none hover:bg-amber-900 hover:border-0 hover:text-white hover:border-none rounded-full"
            onClick={() => setOpenModalStatus(true)}
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

  const data: DataType[] = [
    {
      key: "1",
      nama_santri: "Muhammad Ramdani",
      tanggal_lahir: "23/07/1999",
      jenis_kelamin: "Laki-laki",
      kota_asal: "Bandung",
      tags: ["Lulus"],
    },
    {
      key: "2",
      nama_santri: "Aisyah",
      tanggal_lahir: "23/07/1998",
      jenis_kelamin: "Perempuan",
      kota_asal: "Jakarta",
      tags: ["Tidak Lulus"],
    },
    {
      key: "3",
      nama_santri: "Ahmad Fajar",
      tanggal_lahir: "23/07/2002",
      jenis_kelamin: "Laki-laki",
      kota_asal: "Bogor",
      tags: ["Belum di proses"],
    },
    {
      key: "4",
      nama_santri: "Ridwan",
      tanggal_lahir: "23/07/1999",
      jenis_kelamin: "Laki-laki",
      kota_asal: "Bandung",
      tags: ["Lulus"],
    },
    {
      key: "5",
      nama_santri: "Annisa",
      tanggal_lahir: "23/07/1998",
      jenis_kelamin: "Perempuan",
      kota_asal: "Jakarta",
      tags: ["Tidak Lulus"],
    },
    {
      key: "6",
      nama_santri: "Muhammad Ardi",
      tanggal_lahir: "23/07/2002",
      jenis_kelamin: "Laki-laki",
      kota_asal: "Bogor",
      tags: ["Belum di proses"],
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} className="w-full" />

      <ModalStatus
        open={openModalStatus}
        onOk={() => setOpenModalStatus(false)}
        onCancel={() => setOpenModalStatus(false)}
      />
    </>
  );
};

export default TableSantri;