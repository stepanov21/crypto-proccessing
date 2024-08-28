import CreateNewMerchantPopup from "@/components/custom/CreateNewMerchantPopup";
import TransactionFilters from "@/components/custom/TransactionFilters";
import Image from "next/image";
import WalletsList from "@/components/custom/WalletsList";
import Header from "@/components/layout/Header";
import React from "react";
import HeaderCard from "@/components/layout/HeaderCard";
import { Toaster } from "@/components/ui/toaster";
import WalletAside from "@/components/custom/WalletAside";
import MainWidth from "@/components/layout/MainWidth";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="container grid max-w-[1400px] grid-cols-[4fr_8fr] gap-x-[30px] gap-y-[35px] overflow-x-hidden px-[30px] pt-[110px] lg:grid-cols-1 sm:px-[16px] sm:pt-0">
      <Header className="lg:hidden" />
      <HeaderCard />
      <aside className="space-y-[60px] lg:hidden">
        <WalletAside />
        <CreateNewMerchantPopup />
      </aside>
      <div className="sm:pt-[210px]">
        <TransactionFilters />
        <MainWidth>{children}</MainWidth>
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
      <Toaster />
    </div>
  );
};

export default layout;
