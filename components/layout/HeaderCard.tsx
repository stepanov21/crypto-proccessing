"use client";

import { usePathname } from "next/navigation";
import React from "react";
import MainUserCard from "./MainUserCard";
import BusinessUserCard from "./BusinessUserCard";
import MerchantUserCard from "./MerchantUserCard";

const HeaderCard = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/wallet")) return <MainUserCard />;
  if (pathname.startsWith("/business-wallet")) return <BusinessUserCard />;
  if (pathname.startsWith("/merchant")) return <MerchantUserCard />;
  return null;
};

export default HeaderCard;
