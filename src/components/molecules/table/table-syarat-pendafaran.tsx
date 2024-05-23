import React from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, FilePenLine, Trash2 } from "lucide-react";
import { CheckCircleOutlined, FileAddOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  syarat_pendaftaran: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "No",
    dataIndex: "key",
    key: "key",
    render: (text) => <>{text}</>,
  },
  {
    title: "Syarat Pendaftaran",
    dataIndex: "syarat_pendaftaran",
    key: "syarat_pendaftaran",
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
    syarat_pendaftaran: "Usia 18 - 25 tahun.",
  },
  {
    key: "2",
    syarat_pendaftaran: "Lancar membaca Al Quran.",
  },
  {
    key: "3",
    syarat_pendaftaran: "Siap berkhidmat 6 bulan setelah program menghafal",
  },
  {
    key: "4",
    syarat_pendaftaran: "Sehat jasmani dan rohani",
  },
  {
    key: "5",
    syarat_pendaftaran: "Mendapatkan izin dari orang tua",
  },
  {
    key: "6",
    syarat_pendaftaran: "Siap mengikuti aturan dan program",
  },
];

const TableSyaratPendafataran: React.FC = () => (
  <>
    <div className="pt-3">
      <div className="w-full flex justify-between gap-3 mb-3">
        <Input placeholder="Tambah Syarat Pendaftaran" />
        <Button type="primary">Tambah Data</Button>
      </div>

      <Table columns={columns} dataSource={data} className="w-full" />
    </div>
  </>
);

export default TableSyaratPendafataran;
