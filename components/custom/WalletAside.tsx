"use client";

import { usePathname } from "next/navigation";
import React from "react";
import BusinessWalletsList from "./BusinessWalletsList";
import WalletsList from "./WalletsList";

const WalletAside = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/business-wallet")) return <BusinessWalletsList />;
  if (pathname.startsWith("/wallet")) return <WalletsList />;
};

export default WalletAside;
