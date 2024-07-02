"use client";

import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Dropdown, Input, MenuProps, Space } from "antd";
import Apex from "@/components/molecules/chart";
import TableSantri from "@/components/molecules/table/table-santri";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { useGetAllUser } from "@/services/admin/users/get-all-user";
import { SantriTypes } from "@/services/data-types";
import { Files, UserCheck, UsersIcon } from "lucide-react";
import DonutChart from "@/components/molecules/apex-chart/donut-chart/donut-chart";
import PieChart from "@/components/molecules/apex-chart/pie-chart/pie-chart";

interface UserStatus {
  totalUsers: number;
  totalPassedUsers: number;
  totalProcessingUsers: number;
  totalNotPassedUsers: number;
}

export default function DataSantri() {
  // const [Users, setUsers] = useState([]);
  const [Users, setUsers] = useState<SantriTypes[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<SantriTypes[]>([]);
  const [UserStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");

  const {
    data: dataUsers,
    isLoading,
    isError,
  } = useGetAllUser({
    latest: true,
    status: status,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      setUsers(dataUsers?.data || []);
      setUserStatus(dataUsers || null);
    }
  }, [dataUsers, isLoading, isError]);

  useEffect(() => {
    const filtered: SantriTypes[] = Users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, Users]);

  console.log(Users, "Users");

  console.log(UserStatus, "Users status");

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setStatus(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: "lulus",
      key: "lulus",
    },
    {
      label: "tidak lulus",
      key: "tidak lulus",
    },
    {
      label: "belum diproses",
      key: "belum diproses",
    },
    {
      label: "hapus filter",
      key: "",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="bg-white h-auto min-h-[500px] m-8 box-border w-max-full rounded-xl">
      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-center items-start gap-10">
          {/* Card */}
          {/* <div className="w-full flex justify-between items-center gap-4  ">
            <div className="w-1/3 flex items-center bg-white border rounded-sm overflow-hidden shadow">
              <div className="p-4 bg-green-400">
                <UsersIcon className="h-12 w-12 text-white" />
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">Total Pendaftar</h3>
                <p className="text-3xl">{UserStatus?.totalUsers}</p>
              </div>
            </div>
            <div className="w-1/3 flex items-center bg-white border rounded-sm overflow-hidden shadow">
              <div className="p-4 bg-blue-400">
                <UserCheck className="h-12 w-12 text-white" />
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">Total Santri Lulus</h3>
                <p className="text-3xl">{UserStatus?.totalPassedUsers}</p>
              </div>
            </div>
            <div className="w-1/3 flex items-center bg-white border rounded-sm overflow-hidden shadow">
              <div className="p-4 bg-indigo-400">
                <Files className="h-12 w-12 text-white" />
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">
                  Total Mengikuti Seleksi
                </h3>
                <p className="text-3xl">{UserStatus?.totalProcessingUsers}</p>
              </div>
            </div>
          </div> */}
          {/* End Card */}
        </div>

        <div className="mt-7 w-full flex flex-col justify-center items-start gap-3">
          <div className="w-1/3 flex gap-2 items-center">
            <Input
              placeholder="Cari santri"
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  Filter
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>

          <TableSantri data={filteredUsers} />
        </div>
      </div>
    </div>
  );
}
