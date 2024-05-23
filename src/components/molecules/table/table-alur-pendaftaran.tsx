import React from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, FilePenLine, Trash2 } from "lucide-react";
import { CheckCircleOutlined, FileAddOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  alur_pendaftaran: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "No",
    dataIndex: "key",
    key: "key",
    render: (text) => <>{text}</>,
  },
  {
    title: "Alur Pendaftaran",
    dataIndex: "alur_pendaftaran",
    key: "alur_pendaftaran",
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

const data: DataType[] = [
  {
    key: "1",
    alur_pendaftaran: "Membaca Syarat Pendaftaran dengan detail.",
  },
  {
    key: "2",
    alur_pendaftaran: "Registrasi Pendaftaran di Website Young Tahfizh Center.",
  },
  {
    key: "3",
    alur_pendaftaran: "Melengkapi seluruh data diri",
  },
  {
    key: "4",
    alur_pendaftaran: "Upload jawaban tes seleksi",
  },
  {
    key: "5",
    alur_pendaftaran: "Infaq Rp. 100.000 (Sebagai Komitmen Hadir)",
  },
  {
    key: "6",
    alur_pendaftaran: "Menunggu informasi pengumuman kelulusan",
  },
];

const TableAlurPendaftaran: React.FC = () => (
  <>
    <div className="pt-3">
      <div className="w-full flex justify-between gap-3 mb-3">
        <Input placeholder="Tambah Alur Pendaftaran" />
        <Button type="primary">Tambah Data</Button>
      </div>

      <Table columns={columns} dataSource={data} className="w-full" />
    </div>
  </>
);

export default TableAlurPendaftaran;
