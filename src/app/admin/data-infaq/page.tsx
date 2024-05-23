"use client";

import React from "react";
import TableInfaq from "@/components/molecules/table/table-infaq";
import TableBank from "@/components/molecules/table/table-bank";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function DataSantri() {
  return (
    <div className="bg-white h-auto min-h-[500px] m-8 box-border w-max-full rounded-xl">
      {/* <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">Data Infaq</p>
      </div> */}

      {/* Form */}
      <div className="mt-7 pt-7 px-6 w-full flex flex-col justify-center items-start gap-3">
        <div className="w-1/3">
          <Input placeholder="Cari data infaq" prefix={<SearchOutlined />} />
        </div>
        <TableInfaq />
      </div>
    </div>
  );
}
