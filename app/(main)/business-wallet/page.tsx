'use client'

import { useMerchant } from "@/api/merchant/queries";
import Transition from "@/providers/Transition";
import React from "react";

const Page = () => {
  const { useMerchantGetInvoice } = useMerchant();
  const { data } = useMerchantGetInvoice();
  return (
    <div className="space-y-4">
      {data?.map((invoice) => {
        return (
          <div
            key={invoice.id}
            className="middle-purple-gradient flex justify-between rounded-[18px] p-4"
          >
            <span>{invoice.id}</span>
            <span>{invoice.status}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
