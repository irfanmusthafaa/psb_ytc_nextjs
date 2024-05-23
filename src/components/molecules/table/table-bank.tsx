import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, FilePenLine, Trash2 } from "lucide-react";
import { CheckCircleOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  bank: string;
  no_rekening: number;
  atas_nama: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "No",
    dataIndex: "key",
    key: "key",
    render: (text) => <>{text}</>,
  },
  {
    title: "Bank",
    dataIndex: "bank",
    key: "bank",
    render: (text) => <>{text}</>,
  },
  {
    title: "No Rekening",
    dataIndex: "no_rekening",
    key: "no_rekening",
    render: (text) => <>{text}</>,
  },
  {
    title: "Atas Nama",
    dataIndex: "atas_nama",
    key: "atas_nama",
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
    bank: "BSI",
    no_rekening: 19298273823,
    atas_nama: "Young Tahfizh Center",
  },
  {
    key: "2",
    bank: "BCA Syariah",
    no_rekening: 2423423,
    atas_nama: "Young Tahfizh Center",
  },
  {
    key: "3",
    bank: "BNI Syariah",
    no_rekening: 2342342342,
    atas_nama: "Young Tahfizh Center",
  },
];

const TableBank: React.FC = () => (
  <Table columns={columns} dataSource={data} className="w-full" />
);

export default TableBank;
