import React from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, FilePenLine, Trash2 } from "lucide-react";
import { CheckCircleOutlined, FileAddOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  fasilitas: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "No",
    dataIndex: "key",
    key: "key",
    render: (text) => <>{text}</>,
  },
  {
    title: "Fasilitas",
    dataIndex: "fasilitas",
    key: "fasilitas",
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
    fasilitas: "Gratis Biaya Pendaftaran, Asrama dan Makan Minum (100%)",
  },
  {
    key: "2",
    fasilitas: "Mushaf Al Quran dan Perangkat Menghafal",
  },
  {
    key: "3",
    fasilitas: "Pengajar/ Pembimbing Berpengalaman",
  },
  {
    key: "4",
    fasilitas: "Riyadhoh dan Rihlah",
  },
  {
    key: "5",
    fasilitas: "Sertifikat/ Syahadah",
  },
  {
    key: "6",
    fasilitas: "Haflatul Ikhtitam (Wisuda Khataman)",
  },
];

const TableFasilitas: React.FC = () => (
  <>
    <div className="pt-3">
      <div className="w-full flex justify-between gap-3 mb-3">
        <Input placeholder="Tambah Fasilitas" />
        <Button type="primary">Tambah Data</Button>
      </div>

      <Table columns={columns} dataSource={data} className="w-full" />
    </div>
  </>
);

export default TableFasilitas;
