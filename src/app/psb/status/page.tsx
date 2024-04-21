"use client";

import React from "react";
import { Badge, Card, Space } from "antd";

export default function Status() {
  return (
    <div className="bg-white h-auto min-h-[500px] m-8 box-border w-max-full rounded-xl">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">Notifikasi</p>
      </div>

      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-center items-start gap-10">
          <div className="w-full flex flex-col gap-4">
            <Badge.Ribbon text="Lulus" color="green">
              <Card title="Pemberitahuan Status Kelulusan" size="small">
                Selamat Anda dinyatakan lulus dalam proses seleksi beasiswa
                Young Tahfizh Center
              </Card>
            </Badge.Ribbon>
            <Badge.Ribbon text="Tidak Lulus" color="red">
              <Card title="Pemberitahuan Status Kelulusan" size="small">
                Mohon maaf anda dinyatakan tidak lulus dalam proses seleksi
                beasiswa Young Tahfizh Center
              </Card>
            </Badge.Ribbon>
            <Badge.Ribbon text="On Proses">
              <Card title="Pemberitahuan Status Kelulusan" size="small">
                Saat ini masih dalam proses seleksi kelulusan
              </Card>
            </Badge.Ribbon>
          </div>
        </div>
      </div>
    </div>
  );
}
