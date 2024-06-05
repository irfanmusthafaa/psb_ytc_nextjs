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
  rekening_tujuan: string;
  atas_nama: string;
  total_transfer: number;
  bukti_pembayaran: string;
  nama_santri: string;
}

export default function TableInfaq(props: DataSantriProps) {
  const { data } = props;
  const [openModalStatus, setOpenModalStatus] = useState(false);

  const router = useRouter();

  console.log(data, "data");

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      render: (text) => <p>{text || "-"}</p>,
    },
    {
      title: "Nama Santri",
      dataIndex: "nama_santri",
      key: "nama_santri",
      render: (text) => <p>{text || "-"}</p>,
    },
    {
      title: "Rekening Tujuan",
      dataIndex: "rekening_tujuan",
      key: "rekening_tujuan",
      render: (text) => <p>{text || "-"}</p>,
    },
    {
      title: "Atas Nama",
      dataIndex: "atas_nama",
      key: "atas_nama",
      render: (text) => <p>{text || "-"}</p>,
    },
    {
      title: "Total Transfer",
      dataIndex: "total_transfer",
      key: "total_transfer",
      render: (text) => <p>{text || "-"}</p>,
    },
    {
      title: "Bukti Pembayaran",
      dataIndex: "bukti_pembayaran",
      key: "bukti_pembayaran",
      render: (text) =>
        text ? (
          <img
            src={text}
            alt="img"
            className="w-[150px] h-[80px] object-cover"
          />
        ) : (
          <p>-</p>
        ),
    },
  ];

  const dataSource: DataType[] = data?.map((item, index) => ({
    key: (index + 1).toString(),
    id: item._id,
    nama_santri: item.name,
    rekening_tujuan: item.infaq_id?.rekening_tujuan,
    total_transfer: item.infaq_id?.total_transfer,
    atas_nama: item.infaq_id?.atas_nama,
    bukti_pembayaran: `${process.env.NEXT_PUBLIC_IMG}/${item.infaq_id?.bukti_pembayaran}`,
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
