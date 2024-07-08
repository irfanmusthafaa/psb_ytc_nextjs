"use client";
import { useGetAllUser } from "@/services/admin/users/get-all-user";
import { SantriTypes } from "@/services/data-types";
import React, { useEffect, useState } from "react";

interface UserStatus {
  totalUsers: number;
  totalPassedUsers: number;
  totalProcessingUsers: number;
  totalNotPassedUsers: number;
}

export default function Overview() {
  const [Users, setUsers] = useState<UserStatus | null>(null);

  const { data: dataUsers, isLoading, isError } = useGetAllUser();

  useEffect(() => {
    if (!isLoading && !isError) {
      setUsers(dataUsers || []);
    }
  }, [dataUsers, isLoading, isError]);

  return (
    <div className="  bg-gray-100  w-full">
      <div className="flex justify-center items-center gap-10">
        <div className=" border-r-2 border-r-[#273b83] py-5 pr-16 ">
          <p className="text-5xl text-[#273b83] font-bold">
            {Users?.totalUsers}
          </p>
          <p className="text-xl font-light text-gray-800 mt-3">
            Total Pendaftar
          </p>
        </div>
        <div className=" border-r-2 border-r-[#273b83] py-5 pr-16">
          <p className="text-5xl text-[#273b83] font-bold">
            {Users?.totalPassedUsers}
          </p>
          <p className="text-xl font-light text-gray-800 mt-3">Santri Lulus</p>
        </div>
        <div className=" border-r-2 border-r-[#273b83] py-5 pr-16">
          <p className="text-5xl text-[#273b83] font-bold">6</p>
          <p className="text-xl font-light text-gray-800 mt-3">Cabang</p>
        </div>
        <div className=" border-r-2 border-r-[#273b83] py-5 pr-16">
          <p className="text-5xl text-[#273b83] font-bold">100%</p>
          <p className="text-xl font-light text-gray-800 mt-3">
            Total Beasiswa
          </p>
        </div>
      </div>
    </div>
  );
}
