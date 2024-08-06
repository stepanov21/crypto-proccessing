import CreateNewMerchantPopup from "@/components/custom/CreateNewMerchantPopup";
import TransactionFilters from "@/components/custom/TransactionFilters";
import Image from "next/image";
import WalletsList from "@/components/custom/WalletsList";
import Header from "@/components/layout/Header";
import React from "react";
import HeaderCard from "@/components/layout/HeaderCard";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className="container grid grid-cols-[4fr_8fr] gap-x-[30px] gap-y-[35px] px-[30px] pt-[110px]"
    >
      <Header />
      <HeaderCard/>
      <aside className="space-y-[60px]">
        <WalletsList />

        <CreateNewMerchantPopup />
      </aside>
      <div>
        <TransactionFilters />
        <main className="max-w-[520px]">{children}</main>
      </div>
      {/* Background glow */}
      <Image className="absolute -top-72 opacity-30 pointer-events-none dark:opacity-0" src={'/glow.svg'} width={1200} height={1200} alt="glow"/>
      <Image className="absolute -bottom-80 right-[5%] object-cover opacity-30 -z-10 pointer-events-none dark:opacity-0" src={'/glow.svg'} width={1200} height={1200} alt="glow"/>
    </div>
  );
};

export default layout;
