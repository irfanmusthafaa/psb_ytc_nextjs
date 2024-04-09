import React, { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-start items-start">
      <p>Tes</p>

      <div className="bg-gray-200  justify-center items-center  p-8 w-full box-border">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;