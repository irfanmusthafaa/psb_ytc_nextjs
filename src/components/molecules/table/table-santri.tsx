"use client";

import React, { useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, Eye, FilePenLine, Maximize2, Trash2 } from "lucide-react";
import ModalStatus from "../modal/modal-status";
import { SantriTypes } from "@/services/data-types";
import { useRouter } from "next/navigation";

interface DataSantriProps {
  data: SantriTypes[];
}

interface DataType {
  key: string;
  id?: string;
  nama_santri: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  kota_asal: string;
  tags: string[];
}

export default function TableSantri(props: DataSantriProps) {
  const { data } = props;
  const [openModalStatus, setOpenModalStatus] = useState(false);

  const router = useRouter();

  console.log(data, "data");

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
            let color = tag === "lulus" ? "green" : "geekblue";
            if (tag === "tidak lulus") {
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
          <Button
            type="primary"
            className="flex justify-center items-center gap-2  border-none hover:bg-amber-900 hover:border-0 hover:text-white hover:border-none "
            // onClick={() => setOpenModalStatus(true)}
            onClick={() => router.push(`/admin/santri/${record.id}`)}
          >
            Lihat Detail
          </Button>
        </Space>
      ),
    },
  ];

  const dataSource: DataType[] = data?.map((item, index) => ({
    key: (index + 1).toString(),
    id: item._id,
    nama_santri: item.name,
    tanggal_lahir: new Date(item.tanggal_lahir).toLocaleDateString(),
    jenis_kelamin: item.jenis_kelamin,
    kota_asal: item.kota_asal,
    tags: [item.status],
  }));

  return (
    <>
      <Table columns={columns} dataSource={dataSource} className="w-full" />

      <ModalStatus
        open={openModalStatus}
        setOpenModalStatus={setOpenModalStatus}
        onOk={() => setOpenModalStatus(false)}
        onCancel={() => setOpenModalStatus(false)}
      />
    </>
  );
}
