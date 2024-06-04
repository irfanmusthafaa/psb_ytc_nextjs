"use client";

import React, { useEffect, useState } from "react";
import { Badge, Card, Input, Space } from "antd";
import Apex from "@/components/molecules/chart";
import TableSantri from "@/components/molecules/table/table-santri";
import { SearchOutlined } from "@ant-design/icons";
import { useGetAllUser } from "@/services/admin/users/get-all-user";

interface UserStatus {
  totalUsers: number;
  totalPassedUsers: number;
  totalProcessingUsers: number;
  totalNotPassedUsers: number;
}

export default function Dashboard() {
  const [Users, setUsers] = useState([]);
  const [UserStatus, setUserStatus] = useState<UserStatus | null>(null);

  const { data: dataUsers, isLoading, isError } = useGetAllUser();

  useEffect(() => {
    if (!isLoading && !isError) {
      setUsers(dataUsers?.data || []);
      setUserStatus(dataUsers || null);
    }
  }, [dataUsers, isLoading, isError]);

  console.log(Users, "Users");

  console.log(UserStatus, "Users status");

  return (
    <div className="bg-white h-auto min-h-[500px] m-8 box-border w-max-full rounded-xl">
      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-center items-start gap-10">
          {/* Card */}
          <div className="w-full flex justify-between items-center gap-4  ">
            <div className="w-1/3 flex items-center bg-white border rounded-sm overflow-hidden shadow">
              <div className="p-4 bg-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">Total Pendaftar</h3>
                <p className="text-3xl">{UserStatus?.totalUsers}</p>
              </div>
            </div>
            <div className="w-1/3 flex items-center bg-white border rounded-sm overflow-hidden shadow">
              <div className="p-4 bg-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  ></path>
                </svg>
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">Total Santri Lulus</h3>
                <p className="text-3xl">{UserStatus?.totalPassedUsers}</p>
              </div>
            </div>
            <div className="w-1/3 flex items-center bg-white border rounded-sm overflow-hidden shadow">
              <div className="p-4 bg-indigo-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  ></path>
                </svg>
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">
                  Total Mengikuti Seleksi
                </h3>
                <p className="text-3xl">{UserStatus?.totalProcessingUsers}</p>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>

        <div className="mt-7 w-full flex flex-col justify-center items-start gap-3">
          <div className="w-1/3">
            <Input placeholder="Cari santri" prefix={<SearchOutlined />} />
          </div>
          <TableSantri data={Users} />
        </div>
      </div>
    </div>
  );
}
