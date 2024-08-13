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
    <div className="container grid max-w-[1400px] grid-cols-[4fr_8fr] gap-x-[30px] gap-y-[35px] px-[30px] pt-[110px] lg:grid-cols-1 sm:px-[16px] sm:pt-0">
      <Header className="lg:hidden" />
      <HeaderCard />
      <aside className="space-y-[60px] lg:hidden">
        <WalletsList />
        <CreateNewMerchantPopup />
      </aside>
      <div className="sm:pt-[210px]">
        <TransactionFilters />
        <main className="max-w-[520px]">{children}</main>
      </div>
      {/* Background glow */}
      <Image
        className="pointer-events-none absolute -top-72 opacity-30 dark:opacity-0"
        src={"/glow.svg"}
        width={1200}
        height={1200}
        alt="glow"
      />
      <Image
        className="pointer-events-none absolute right-[5%] top-80 -z-10 object-cover opacity-30 dark:opacity-0"
        src={"/glow.svg"}
        width={1200}
        height={1200}
        alt="glow"
      />
    </div>
  );
};

export default layout;
