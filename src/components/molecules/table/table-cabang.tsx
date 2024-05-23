import React from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, FilePenLine, Trash2 } from "lucide-react";
import { CheckCircleOutlined, FileAddOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  cabang: string;
  alamat: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "No",
    dataIndex: "key",
    key: "key",
    render: (text) => <>{text}</>,
  },
  {
    title: "Cabang",
    dataIndex: "cabang",
    key: "cabang",
    render: (text) => <>{text}</>,
  },
  {
    title: "Alamat",
    dataIndex: "alamat",
    key: "alamat",
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
    cabang: "YTC Indonesia",
    alamat:"Jl. Sungai Progo No.239 RT 01 RW 01 Semper Bar, Kec. Clincing, Jakarta Utara, DKI Jakarta 14130"
  },
  {
    key: "2",
    cabang: "YTC Indonesia x PTQ Roudhotul Muta'alimin Jogjakarta",
    alamat:"Jl. Suryodiningrat, Kec. Mantrijeron, Kota Yogyakarta, DI Yogyakarta 55141"
  },
  {
    key: "3",
    cabang: "YTC Indonesia x RTQ Al Huda Cikarang",
    alamat:"Jl. Waluya, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530"
  },
  {
    key: "4",
    cabang: "YTC Indonesia x Berkah Tunas Bangsa Subang",
    alamat:"Jl. Desa Ciracas, Kec. Kalijati, Kabupaten Subang, Jawa Barat 41271"
  },
  {
    key: "5",
    cabang: "YTC Indonesia x Yasqi Bandung",
    alamat:"Jl.Kav.Pos.Giro 2 No. 48, Cimekar, Kec. Cileunyi, Kabupaten Bandung, Jawa Barat 40623"
  },
  {
    key: "6",
    cabang: "YTC Indonesia x Yaa Bunayya Bandung",
    alamat:"Belakang Komplek Green Hill, Jl. Kp. Nyalindung Atas, Cimbuleuit, Kec. Cicadap, Kota Bandung, Jawa Barat 40142"
  },
];

const TableCabang: React.FC = () => (
  <>
    <div className="pt-3">
      <div className="w-full flex justify-between gap-3 mb-3">
        <Input placeholder="Tambah Cabang" />
        <Button type="primary">Tambah Data</Button>
      </div>

      <Table columns={columns} dataSource={data} className="w-full" />
    </div>
  </>
);

export default TableCabang;
