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
import { CookiesKey, CookiesStorage } from "@/utils/cookies";
import { toast } from "react-toastify";

interface UserStatus {
  totalUsers: number;
  totalPassedUsers: number;
  totalProcessingUsers: number;
  totalNotPassedUsers: number;
}

export default function DataSantri() {
  const [Users, setUsers] = useState<SantriTypes[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<SantriTypes[]>([]);
  const [UserStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [tahun, setTahun] = useState("");
  const [jk, setJk] = useState("");

  const {
    data: dataUsers,
    isLoading,
    isError,
  } = useGetAllUser({
    latest: true,
    status: status,
    jenis_kelamin: jk,
    tahun: tahun,
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

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setStatus(e.key);
  };

  const handleMenuClickJk: MenuProps["onClick"] = (e) => {
    setJk(e.key);
  };

  const handleMenuClickTahun: MenuProps["onClick"] = (e) => {
    setTahun(e.key);
  };

  const items: MenuProps["items"] = [
    { label: "Lulus", key: "lulus" },
    { label: "Tidak Lulus", key: "tidak lulus" },
    { label: "Belum Diproses", key: "belum diproses" },
    { label: "Hapus Filter", key: "" },
  ];

  const itemsJk: MenuProps["items"] = [
    { label: "Laki-laki", key: "Laki-laki" },
    { label: "Perempuan", key: "Perempuan" },
    { label: "Hapus Filter", key: "" },
  ];

  const itemsTahun: MenuProps["items"] = [
    { label: "2021", key: "2021" },
    { label: "2022", key: "2022" },
    { label: "2023", key: "2023" },
    { label: "2024", key: "2024" },
    { label: "Hapus Filter", key: "" },
  ];

  const menuProps = { items, onClick: handleMenuClick };
  const menuPropsJk = { items: itemsJk, onClick: handleMenuClickJk };
  const menuPropsTahun = { items: itemsTahun, onClick: handleMenuClickTahun };

  const handleDownloadPdf = async () => {
    try {
      const query = new URLSearchParams({
        jenis_kelamin: jk,
        tahun: tahun,
        status: status,
      }).toString();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_KEY}/api/v1/admin/download-pdf?${query}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${CookiesStorage.get(
              CookiesKey.TokenAdmin
            )}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "filename"; // You can set a default file name here or extract it from response headers
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      toast.success("File downloaded successfully");
    } catch (error) {
      toast.error("Gagal Mendownload File");
    }
  };

  return (
    <div className="bg-white h-auto min-h-[500px] m-8 box-border w-max-full rounded-xl">
      <div className="pt-5 px-6">
        <div className="w-full flex justify-center items-start gap-10"></div>
        <div className="mt-7 w-full flex flex-col justify-center items-start gap-3">
          <div className="w-full flex gap-2 items-center">
            <Input
              placeholder="Cari santri"
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  Filter Status
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown menu={menuPropsJk}>
              <Button>
                <Space>
                  Filter Jenis Kelamin
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown menu={menuPropsTahun}>
              <Button>
                <Space>
                  Filter Tahun
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Button type="primary" onClick={handleDownloadPdf}>
              Download PDF
            </Button>
          </div>
          <TableSantri data={filteredUsers} />
        </div>
      </div>
    </div>
  );
}
