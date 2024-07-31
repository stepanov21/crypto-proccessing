import CreateNewMerchantPopup from "@/components/custom/CreateNewMerchantPopup";
import TransactionFilters from "@/components/custom/TransactionFilters";
import WalletItem from "@/components/custom/WalletItem";
import WalletsList from "@/components/custom/WalletsList";
import Header from "@/components/layout/Header";
import MainUserCard from "@/components/layout/MainUserCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
        <TransactionFilters/>
        {children}
      </div>
      {/* Background glow */}
      {/* <Image className="absolute -top-72" src={'/glow.png'} width={800} height={800} alt="glow"/>
      <Image className="absolute -bottom-72 right-80 object-cover" src={'/glow.png'} width={800} height={800} alt="glow"/> */}
    </main>
  );
};

export default layout;
