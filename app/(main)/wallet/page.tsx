'use client'

import { useGetMyWallets } from "@/api/wallets/queries";
import TransactionNotFound from "@/components/custom/TransactionNotFound";
import React from "react";

const page = () => {
  return <TransactionNotFound />;
};

export default page;
