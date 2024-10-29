"use client";

import { usePathname } from "next/navigation";
import BusinessWalletsList from "./BusinessWalletsList";
import WalletsList from "./WalletsList";

const WalletAside = () => {
  const pathname = usePathname();
  if (
    pathname.startsWith("/ru/business-wallet") ||
    pathname.startsWith("/en/business-wallet")
  )
    return <BusinessWalletsList />;
  if (pathname.startsWith("/ru/wallet") || pathname.startsWith("/en/wallet"))
    return <WalletsList />;
};

export default WalletAside;
