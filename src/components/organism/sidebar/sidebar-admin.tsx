"use client";

import {
  BookText,
  CreditCard,
  FilePlus,
  Files,
  LayoutDashboard,
  TextSelect,
  User,
  User2,
  UserCog,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarAdmin() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center w-72 h-screen overflow-hidden text-indigo-300 bg-[#273b83] rounded">
      <a className="flex items-center w-full px-3 mt-3" href="#">
        {/* <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg> */}
        <img
          className="h-8 w-auto opacity-75"
          src="/images/logo3.png"
          alt="Your Company"
        />
        <span className="ml-2 text-sm">Young Tahfizh Center</span>
      </a>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
          <a
            href="/admin/dashboard"
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              pathname === "/admin/dashboard"
                ? "bg-indigo-600 text-indigo-100"
                : "hover:bg-indigo-700"
            }`}
          >
            <LayoutDashboard />
            <span className="ml-2 text-sm font-medium">Dashboard</span>
          </a>
          <a
            href="/admin/data-santri"
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              pathname === "/admin/data-santri"
                ? "bg-indigo-600 text-indigo-100"
                : "hover:bg-indigo-700"
            }`}
          >
            <User2 />
            <span className="ml-2 text-sm font-medium">Data Santri</span>
          </a>

          <a
            href="/admin/data-infaq"
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              pathname === "/admin/data-infaq"
                ? "bg-indigo-600 text-indigo-100"
                : "hover:bg-indigo-700"
            }`}
          >
            <Files />
            <span className="ml-2 text-sm font-medium">Data Infaq</span>
          </a>
        </div>
        <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
          <a
            href="/admin/informasi-psb"
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              pathname === "/admin/informasi-psb"
                ? "bg-indigo-600 text-indigo-100"
                : "hover:bg-indigo-700"
            }`}
          >
            <BookText />
            <span className="ml-2 text-sm font-medium">Informasi PSB</span>
          </a>
          <a
            href="/admin/soal-seleksi"
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              pathname === "/psb/soal-seleksi"
                ? "bg-indigo-600 text-indigo-100"
                : "hover:bg-indigo-700"
            }`}
          >
            <TextSelect />
            <span className="ml-2 text-sm font-medium">Soal Seleksi</span>
          </a>
          <a
            href="/admin/bank"
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              pathname === "/admin/bank"
                ? "bg-indigo-600 text-indigo-100"
                : "hover:bg-indigo-700"
            }`}
          >
            <CreditCard />
            <span className="ml-2 text-sm font-medium">Bank</span>
          </a>
        </div>
      </div>
    </div>
  );
}
