"use client";

import React from "react";
import { Badge, Button, Card, Input, Space } from "antd";
import Apex from "@/components/molecules/chart";
import TableSantri from "@/components/molecules/table/table-santri";
import { SearchOutlined } from "@ant-design/icons";
import TableBank from "@/components/molecules/table/table-bank";

export default function Bank() {
  return (
    <div className="bg-white h-auto min-h-[600px] m-8 box-border w-max-full rounded-xl">
      <div className="pt-7 px-6 w-full flex flex-col justify-center items-start gap-3">
        <div className="w-full">
          <TableBank />
        </div>
      </div>
    </div>
  );
}
