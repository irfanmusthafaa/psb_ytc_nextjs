import React from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, FilePenLine, Trash2 } from "lucide-react";
import { CheckCircleOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  soal: string;
}

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

const data: DataType[] = [
  {
    key: "1",
    soal: "Membaca Surah Maryam ayat 1-10",
  },
  {
    key: "2",
    soal: "Membaca Surah Al Baqarah ayat 8-16",
  },
  {
    key: "3",
    soal: "Membaca Surah An Nisa ayat 1-5",
  },
];

const TableSoal: React.FC = () => (
  <div className="pt-3">
    <div className="w-full flex justify-between gap-3 mb-3">
      <Input placeholder="Tambah Soal Seleksi" />
      <Button type="primary">Tambah Data</Button>
    </div>

    <Table columns={columns} dataSource={data} className="w-full" />
  </div>
);

export default TableSoal;
