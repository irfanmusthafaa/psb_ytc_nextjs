"use client";

import React, { useEffect, useState } from "react";
import TableInfaq from "@/components/molecules/table/table-infaq";
import TableBank from "@/components/molecules/table/table-bank";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useGetAllUser } from "@/services/admin/users/get-all-user";
import { SantriTypes } from "@/services/data-types";

export default function DataSantri() {
  const [Users, setUsers] = useState<SantriTypes[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SantriTypes[]>([]);
  useState([]);

  const { data: dataUsers, isLoading, isError } = useGetAllUser();

  useEffect(() => {
    if (!isLoading && !isError) {
      setUsers(dataUsers?.data || []);
    }
  }, [dataUsers, isLoading, isError]);

  useEffect(() => {
    const results = Users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, Users]);

  console.log(Users, "Users");
  return (
    <div className="bg-white h-auto min-h-[500px] m-8 box-border w-max-full rounded-xl">
      {/* Form */}
      <div className="mt-7 pt-7 px-6 w-full flex flex-col justify-center items-start gap-3">
        <div className="w-1/3">
          <Input
            placeholder="Cari data infaq"
            prefix={<SearchOutlined />}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <TableInfaq data={searchResults} />
        {/* <TableInfaq data={Users} /> */}
      </div>
    </div>
  );
}
