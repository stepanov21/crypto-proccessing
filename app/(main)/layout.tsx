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
    <div className="container grid grid-cols-[4fr_8fr] gap-x-[30px] gap-y-[35px] px-[30px] pt-[110px]">
      <Header />
      <MainUserCard />
      <aside className="space-y-[60px]">
        <WalletsList />

        <CreateNewMerchantPopup />
      </aside>
      <div>
        <TransactionFilters />
        <main className="max-w-[520px]">{children}</main>
      </div>
      {/* Background glow */}
      {/* <Image className="absolute -top-72" src={'/glow.png'} width={800} height={800} alt="glow"/>
      <Image className="absolute -bottom-72 right-80 object-cover" src={'/glow.png'} width={800} height={800} alt="glow"/> */}
    </div>
  );
};

export default layout;
