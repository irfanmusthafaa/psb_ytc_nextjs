"use client";

import React from "react";
import { Badge, Card, Space } from "antd";
import Apex from "../../../components/molecules/chart";
import TableSantri from "@/components/molecules/table/table-santri";

export default function DataSantri() {
  return (
    <div className="bg-white h-auto min-h-[500px] m-8 box-border w-max-full rounded-xl">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">Data Santri</p>
      </div>

      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-center items-start gap-10">
          <TableSantri />
        </div>
      </div>
    </div>
  );
}
