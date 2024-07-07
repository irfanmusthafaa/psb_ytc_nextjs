"use client";

import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  ConfigProviderProps,
  Input,
  Space,
  Tabs,
} from "antd";
import Apex from "@/components/molecules/chart";
import TableSantri from "@/components/molecules/table/table-santri";
import { SearchOutlined } from "@ant-design/icons";
import TableBank from "@/components/molecules/table/table-bank";
import TableSoal from "@/components/molecules/table/table-soal";
import { useGetSoalSeleksi } from "@/services/user/seleksi/get-soal-seleksi";
import TableQuestion from "@/components/molecules/table/table-quiz";

type SizeType = ConfigProviderProps["componentSize"];

export default function SoalSeleksi() {
  const [inputText, setInputText] = useState("");
  const [size, setSize] = useState<SizeType>("small");

  const [Soal, setSoal] = useState([]);

  const { data: dataSoal, isLoading, isError } = useGetSoalSeleksi();

  useEffect(() => {
    if (!isLoading && !isError) {
      setSoal(dataSoal || []);
    }
  }, [dataSoal, isLoading, isError]);

  console.log(Soal, "Soal");

  return (
    <div className="bg-white h-auto min-h-[500px] m-8 box-border w-max-full rounded-xl">
      <div className="px-6 mt-7 pt-7">
        <Tabs
          defaultActiveKey="1"
          type="card"
          size={size}
          items={[
            {
              label: "Tes Bacaan Quran",
              key: "1",
              children: <TableSoal />, // Content of tab 1
            },
            {
              label: "Tes Pilihan Ganda",
              key: "2",
              children: <TableQuestion />, // Content of tab 2
            },
          ]}
        />
      </div>
      {/* <div className="pt-3 px-6 ">
        <TableSoal />
      </div> */}
    </div>
  );
}
