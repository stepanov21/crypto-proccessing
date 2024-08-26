"use client";

import { useMerchant } from "@/api/merchant/queries";
import Transition from "@/providers/Transition";
import { Loader } from "lucide-react";
import React from "react";

const Page = () => {
  const { useMerchantGetInvoice } = useMerchant();
  const { data } = useMerchantGetInvoice();
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 rounded-[18px] p-4 dark:text-black sm:h-[50px]">
        <span>Amount</span>
        <span className="text-center">Network</span>
        <span className="text-right">Status</span>
      </div>
      {data?.map((invoice) => {
        return (
          <div
            key={invoice.id}
            className="middle-purple-gradient grid h-[60px] grid-cols-3 items-center rounded-[18px] p-4 dark:bg-ourGray dark:bg-none dark:text-black sm:h-[50px]"
          >
            <span className="roboto">{`${invoice.amount} ${invoice.currency.toUpperCase()}`}</span>
            <span className="text-center">{invoice.network}</span>
            <div className="ml-auto flex items-center gap-4">
              <div className="loader dark:border-black"></div>
              <span>{invoice.status}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
