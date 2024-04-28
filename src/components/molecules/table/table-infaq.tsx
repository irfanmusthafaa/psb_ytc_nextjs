import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand } from "lucide-react";
import { CheckCircleOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  atas_nama: string;
  total_transfer: string;
  bukti_pembayaran: string;
  status: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Atas Nama",
    dataIndex: "atas_nama",
    key: "atas_nama",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Total Transfer",
    dataIndex: "total_transfer",
    key: "total_transfer",
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
    atas_nama: "John Brown",
    total_transfer: "23/07/1999",
    bukti_pembayaran:
      "https://help.xendit.co/hc/article_attachments/23877909212953",
    status: ["Sudah Konfirmasi Pembayaran"],
  },
  {
    key: "2",
    atas_nama: "Jim Green",
    total_transfer: "23/07/1998",
    bukti_pembayaran:
      "https://help.xendit.co/hc/article_attachments/23877909212953",
    status: ["Sudah Konfirmasi Pembayaran"],
  },
  {
    key: "3",
    atas_nama: "Joe Black",
    total_transfer: "23/07/2002",
    bukti_pembayaran:
      "https://help.xendit.co/hc/article_attachments/23877909212953",
    status: ["Sudah Konfirmasi Pembayaran"],
  },
  {
    key: "4",
    atas_nama: "John Brown",
    total_transfer: "23/07/1999",
    bukti_pembayaran:
      "https://help.xendit.co/hc/article_attachments/23877909212953",

    status: ["Belum Konfirmasi Pembayaran"],
  },
  {
    key: "5",
    atas_nama: "Jim Green",
    total_transfer: "23/07/1998",
    bukti_pembayaran:
      "https://help.xendit.co/hc/article_attachments/23877909212953",

    status: ["Belum Konfirmasi Pembayaran"],
  },
  {
    key: "6",
    atas_nama: "Joe Black",
    total_transfer: "23/07/2002",
    bukti_pembayaran:
      "https://help.xendit.co/hc/article_attachments/23877909212953",

    status: ["Belum Konfirmasi Pembayaran"],
  },
];

const TableInfaq: React.FC = () => (
  <Table columns={columns} dataSource={data} className="w-full" />
);

export default TableInfaq;
