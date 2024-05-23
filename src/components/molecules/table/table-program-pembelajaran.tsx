import React from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, FilePenLine, Trash2 } from "lucide-react";
import { CheckCircleOutlined, FileAddOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  program: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "No",
    dataIndex: "key",
    key: "key",
    render: (text) => <>{text}</>,
  },
  {
    title: "Program Pembelajaran",
    dataIndex: "program",
    key: "program",
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
    program: "Menghafal Al Quran 30 juz (selama 6 bulan)",
  },
  {
    key: "2",
    program: "Tasmi' pekanan/ bulanan/ akhir program",
  },
  {
    key: "3",
    program: "Murojaah hafalan setiap malam",
  },
  {
    key: "4",
    program: "Kajian Kitab At- Tibyan Fii Hamalatil Quran",
  },
  {
    key: "5",
    program: "Pembekalan bahasa arab dasar",
  },
  {
    key: "6",
    program: "Pembekalan Tahsin Kitab Thufatul Athfal",
  },
  {
    key: "7",
    program: "Kajian Tematik Bulanan",
  },
  {
    key: "8",
    program: "Pelatihan Softskill/ Training Leadership/ Public Speaking",
  },
];

const TableProgramPembelajaran: React.FC = () => (
  <>
    <div className="pt-3">
      <div className="w-full flex justify-between gap-3 mb-3">
        <Input placeholder="Tambah Program Pembelajaran" />
        <Button type="primary">Tambah Data</Button>
      </div>

      <Table columns={columns} dataSource={data} className="w-full" />
    </div>
  </>
);

export default TableProgramPembelajaran;
