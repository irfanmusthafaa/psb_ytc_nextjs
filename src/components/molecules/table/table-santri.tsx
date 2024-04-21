import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand } from "lucide-react";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Nama Santri",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tanggal Lahir",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Jenis Kelamin",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Kota Asal",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
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
          className="flex justify-center items-center  gap-2 bg-amber-500 text-white border-none hover:bg-amber-900 hover:border-0 hover:text-white hover:border-none rounded-full"
        >
          {/* <Expand /> */}
          Detail
        </Button>
        <Button className="bg-red-600 text-white hover:bg-red-900 hover:border-0 rounded-full">
          {/* <DeleteOutlined /> */}
          Hapus
        </Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const TableSantri: React.FC = () => (
  <Table columns={columns} dataSource={data} className="w-full" />
);

export default TableSantri;
