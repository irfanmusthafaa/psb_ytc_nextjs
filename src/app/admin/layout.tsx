import { Navbar } from "@/components/organism/navbar";
import SidebarAdmin from "@/components/organism/sidebar/sidebar-admin";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-start items-start bg-[#273b83] ">
      <SidebarAdmin />

      <div className="bg-gray-200 min-h-screen  justify-center items-center   w-full box-border">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
