"use client";

import { CreditCard, FilePlus, TextSelect, User, UserCog } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarUser() {
  const pathname = usePathname();

  console.log(pathname, "pathname");

  return (
    <div className="flex flex-col items-center w-72 h-screen overflow-hidden text-indigo-300 bg-[#273b83] rounded">
      <a className="flex items-center w-full px-3 mt-3" href="#">
        {/* <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg> */}
        <span className="ml-2 text-sm font-bold">Young Tahfidz Center</span>
      </a>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
          <Link
            href="/psb/profil"
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              pathname === "/psb/profil"
                ? "bg-indigo-600 text-indigo-100"
                : "hover:bg-indigo-700"
            }`}
          >
            <User />
            <span className="ml-2 text-sm font-medium">Profil</span>
          </Link>
          <Link
            href="/psb/edit-profil"
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              pathname === "/psb/edit-profil"
                ? "bg-indigo-600 text-indigo-100"
                : "hover:bg-indigo-700"
            }`}
          >
            <UserCog />
            <span className="ml-2 text-sm font-medium">Edit Profil</span>
          </Link>
          <Link
            href="/psb/dokumen"
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              pathname === "/psb/dokumen"
                ? "bg-indigo-600 text-indigo-100"
                : "hover:bg-indigo-700"
            }`}
          >
            <FilePlus />
            <span className="ml-2 text-sm font-medium">Dokumen</span>
          </Link>
          <Link
            href="/psb/infaq"
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              pathname === "/psb/infaq"
                ? "bg-indigo-600 text-indigo-100"
                : "hover:bg-indigo-700"
            }`}
          >
            <CreditCard />
            <span className="ml-2 text-sm font-medium">Infaq</span>
          </Link>
        </div>
        <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
          <Link
            href="/psb/test-seleksi"
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              pathname === "/psb/test-seleksi"
                ? "bg-indigo-600 text-indigo-100"
                : "hover:bg-indigo-700"
            }`}
          >
            <TextSelect />
            <span className="ml-2 text-sm font-medium">Test Seleksi</span>
          </Link>

          <a
            className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
            href="/psb/status"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Notifikasi</span>
            <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
