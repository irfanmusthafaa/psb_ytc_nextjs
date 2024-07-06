"use client";

import React, { useState } from "react";
import type { ConfigProviderProps, RadioChangeEvent } from "antd";
import { Radio, Tabs } from "antd";
import TableSantri from "@/components/molecules/table/table-santri";
import TableInfaq from "@/components/molecules/table/table-infaq";
import TableSyaratPendafataran from "@/components/molecules/table/table-syarat-pendafaran";
import TableAlurPendaftaran from "@/components/molecules/table/table-alur-pendaftaran";
import TableProgramPembelajaran from "@/components/molecules/table/table-program-pembelajaran";
import TableFasilitas from "@/components/molecules/table/table-fasilitas";
import TableCabang from "@/components/molecules/table/table-cabang";

type SizeType = ConfigProviderProps["componentSize"];

export default function InformasiPsb() {
  const [inputText, setInputText] = useState("");
  const [counter, setCounter] = useState(1);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default behavior of Enter key
      setInputText(inputText + "\n" + counter + ". "); // Add counter and dot to the text
      setCounter(counter + 1); // Increment the counter
    }
  };

  const [size, setSize] = useState<SizeType>("small");

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  return (
    <div className="bg-white h-auto min-h-[500px] m-8 box-border w-max-full rounded-xl">
      <div className="px-6 mt-7 pt-7">
        <Tabs
          defaultActiveKey="1"
          type="card"
          size={size}
          items={[
            {
              label: "Syarat Pendaftaran",
              key: "1",
              children: <TableSyaratPendafataran />, // Content of tab 1
            },
            {
              label: "Alur Pendafataran",
              key: "2",
              children: <TableAlurPendaftaran />, // Content of tab 2
            },
            {
              label: "Program Pembelajaran",
              key: "3",
              children: <TableProgramPembelajaran />, // Content of tab 3
            },
            {
              label: "Fasilitas",
              key: "4",
              children: <TableFasilitas />, // Content of tab 4
            },
            {
              label: "Info Cabang",
              key: "5",
              children: <TableCabang />, // Content of tab 5
            },
          ]}
        />
      </div>
    </div>
  );
}
