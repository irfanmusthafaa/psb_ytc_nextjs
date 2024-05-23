"use client";

import React from "react";
import { Badge, Button, Card, Input, Space } from "antd";
import Apex from "@/components/molecules/chart";
import TableSantri from "@/components/molecules/table/table-santri";
import { SearchOutlined } from "@ant-design/icons";
import TableBank from "@/components/molecules/table/table-bank";
import TableSoal from "@/components/molecules/table/table-soal";

export default function SoalSeleksi() {
  return (
    <div className="bg-white h-auto min-h-[500px] m-8 box-border w-max-full rounded-xl">
      <div className="pt-3 px-6 ">
        <TableSoal />
      </div>
    </div>
  );
}
