import { Header } from "@/components/organism/header";
import { Navbar } from "@/components/organism/navbar";
import SidebarUser from "@/components/organism/sidebar/sidebar-user";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-start items-start bg-[#273b83] ">
      <SidebarUser />

      <div className="bg-gray-200 min-h-screen  justify-center items-center   w-full box-border">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
