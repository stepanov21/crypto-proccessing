"use client";

import { useMerchant } from "@/api/merchant/queries";
import CustomPagination from "@/components/custom/CustomPagination";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import Transition from "@/providers/Transition";
import { Check, ExternalLink, Files, Loader, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Page = () => {
  const [page, setPage] = useState(1);
  const [copy, setCopy] = useState(false);
  const { useMerchantGetInvoice } = useMerchant();
  const { data } = useMerchantGetInvoice(page);
  console.log("🚀 ~ Page ~ data:", data);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 rounded-[18px] p-4 dark:text-black sm:h-[50px]">
        <span>Amount</span>
        <span className="text-center">Network</span>
        <span className="text-right">Status</span>
        <div className="text-right">Payment URL</div>
      </div>
      {data?.invoices?.map((invoice) => {
        return (
          //@ts-ignore

          <div
            key={invoice.id}
            className="middle-purple-gradient mb-4 grid h-[60px] grid-cols-4 items-center rounded-[18px] p-4 dark:bg-ourGray dark:bg-none dark:text-black sm:h-[50px]"
          >
            <span className="roboto">{`${invoice.amount} ${invoice.currency.toUpperCase()}`}</span>
            <span className="text-center">{invoice.network}</span>
            <div className="ml-auto flex items-center gap-4">
              {invoice?.was_cancelled ? (
                <X className="text-red-400" />
              ) : (
                invoice.status === "finished" && (
                  <Check className="text-ourGreen" />
                )
              )}
              {invoice.status === "pending" && !invoice?.was_cancelled && (
                <div className="loader dark:border-black"></div>
              )}
              {!invoice?.was_cancelled ? (
                <span>{invoice.status}</span>
              ) : (
                <span>Cancelled</span>
              )}
            </div>

            <div
              className="ml-auto flex items-center gap-6"
              onClick={() => console.log()}
            >
              <Link
                key={invoice.invoice_link}
                href={`invoice/${invoice.invoice_uuid}`}
              >
                <ExternalLink />
              </Link>

              <CopyToClipboard
                text={invoice.invoice_link}
                onCopy={() => toast({ title: "Copied to clipboard" })}
              >
                <Files className="cursor-pointer" size={20} />
              </CopyToClipboard>
            </div>
          </div>
        );
      })}
      {data?.total_pages > 1 && (
        <CustomPagination data={data} setPage={setPage} />
      )}
    </div>
  );
};

export default Page;
