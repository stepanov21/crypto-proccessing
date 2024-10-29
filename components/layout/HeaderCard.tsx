"use client";

import { usePathname } from "next/navigation";
import BusinessUserCard from "./BusinessUserCard";
import MainUserCard from "./MainUserCard";
import MerchantUserCard from "./MerchantUserCard";

const HeaderCard = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/en/wallet") || pathname.startsWith("/ru/wallet"))
    return <MainUserCard />;
  if (
    pathname.startsWith("/en/business-wallet") ||
    pathname.startsWith("/ru/business-wallet")
  )
    return <BusinessUserCard />;
  if (pathname.startsWith("/en/merchant")) return <MerchantUserCard />;
  return null;
};

export default HeaderCard;
