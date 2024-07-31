import CreateNewMerchantPopup from "@/components/custom/CreateNewMerchantPopup";
import WalletItem from "@/components/custom/WalletItem";
import WalletsList from "@/components/custom/WalletsList";
import Header from "@/components/layout/Header";
import MainUserCard from "@/components/layout/MainUserCard";
import { Button } from "@/components/ui/button";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="grid grid-cols-[4fr_8fr] px-[30px] pt-[110px] gap-x-[30px] gap-y-[40px] container">
      <Header />

      <MainUserCard />
      <aside className=" space-y-[60px]">
        <WalletsList />

        <CreateNewMerchantPopup />
      </aside>
      <div>
        <div className="h-20 border-b-[1px] border-b-ourLightPurple"></div>
        {children}
      </div>
    </main>
  );
};

export default layout;
