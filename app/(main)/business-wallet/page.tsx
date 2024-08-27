"use client";

import { useMerchant } from "@/api/merchant/queries";
import Transition from "@/providers/Transition";
import { Check, Loader } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  const { useMerchantGetInvoice } = useMerchant();
  const { data } = useMerchantGetInvoice();
  console.log("🚀 ~ Page ~ data:", data)
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 rounded-[18px] p-4 dark:text-black sm:h-[50px]">
        <span>Amount</span>
        <span className="text-center">Network</span>
        <span className="text-right">Status</span>
      </div>
      {data?.map((invoice) => {
        return (
          //@ts-ignore
          <Link key={invoice.invoice_link} href={`invoice/${invoice.invoice_uuid}`}>
          <div
            key={invoice.id}
            className="middle-purple-gradient grid h-[60px] grid-cols-3 items-center rounded-[18px] p-4 dark:bg-ourGray dark:bg-none dark:text-black sm:h-[50px] mb-4"
          >
            <span className="roboto">{`${invoice.amount} ${invoice.currency.toUpperCase()}`}</span>
            <span className="text-center">{invoice.network}</span>
            <div className="ml-auto flex items-center gap-4">
              
              {invoice.status === 'pending' && <div className="loader dark:border-black"></div>} 
              {invoice.status === 'finished' && <Check className="text-ourGreen"/>} 
              <span>{invoice.status}</span>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
