import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand } from "lucide-react";
import { CheckCircleOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  atas_nama: string;
  total_transfer: number;
  bukti_pembayaran: string;
  status: string[];
}

const formatRupiah = (number: number) => {
  return number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
};

const columns: TableProps<DataType>["columns"] = [
  {
    title: "No",
    dataIndex: "key",
    key: "key",
    render: (text) => <>{text}</>,
  },
  {
    title: "Atas Nama",
    dataIndex: "atas_nama",
    key: "atas_nama",
    render: (text) => <>{text}</>,
  },
  {
    title: "Total Transfer",
    dataIndex: "total_transfer",
    key: "total_transfer",
    render: (text) => <>{formatRupiah(text)}</>,
  },
  {
    title: "Bukti Pembayaran",
    dataIndex: "bukti_pembayaran",
    key: "bukti_pembayaran",
    render: (text) => (
      <img src={text} alt="img" className="w-[150px] h-[80px] object-cover" />
    ),
  },

  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status.map((tag) => {
          let color =
            tag === "Sudah Konfirmasi Pembayaran" ? "green" : "geekblue";
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
        <Button
          // onClick={() => {
          //   handleUpdatePayment();
          //   setOpenUpdate(true);
          //   setRecord(record);
          // }}
          className="bg-blue-500 w-[12rem] text-white border-none hover:bg-blue-700 hover:text-white hover:border-none rounded-full"
        >
          <CheckCircleOutlined />
          Konfirmasi Pembayaran
        </Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    atas_nama: "Muhammad Ramdani",
    total_transfer: 250000,
    bukti_pembayaran:
      "https://help.xendit.co/hc/article_attachments/23877909212953",
    status: ["Sudah Konfirmasi Pembayaran"],
  },
  {
    key: "2",
    atas_nama: "Aisyah",
    total_transfer: 250000,
    bukti_pembayaran:
      "https://help.xendit.co/hc/article_attachments/23877909212953",
    status: ["Sudah Konfirmasi Pembayaran"],
  },
  {
    key: "3",
    atas_nama: "Annisa",
    total_transfer: 250000,
    bukti_pembayaran:
      "https://help.xendit.co/hc/article_attachments/23877909212953",
    status: ["Sudah Konfirmasi Pembayaran"],
  },
  {
    key: "4",
    atas_nama: "Ahmad Fajar",
    total_transfer: 250000,
    bukti_pembayaran:
      "https://help.xendit.co/hc/article_attachments/23877909212953",

    status: ["Belum Konfirmasi Pembayaran"],
  },
  {
    key: "5",
    atas_nama: "Ridwan",
    total_transfer: 300000,
    bukti_pembayaran:
      "https://help.xendit.co/hc/article_attachments/23877909212953",

    status: ["Belum Konfirmasi Pembayaran"],
  },
  {
    key: "6",
    atas_nama: "Firdaus",
    total_transfer: 250000,
    bukti_pembayaran:
      "https://help.xendit.co/hc/article_attachments/23877909212953",

    status: ["Belum Konfirmasi Pembayaran"],
  },
];

const TableInfaq: React.FC = () => (
  <Table columns={columns} dataSource={data} className="w-full" />
);

export default TableInfaq;
