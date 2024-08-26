import { ITransaction } from "@/app/(main)/wallet/page";
import { formatDistanceToNow } from "date-fns";
import React from "react";

const Transaction = ({ id, created_at, tx_hash }: Partial<ITransaction>) => {
  return (
    <div className="middle-purple-gradient mt-5 flex items-center justify-between gap-4 rounded-[18px] px-[24px] py-7 text-center">
      <span className="flex items-center gap-4 text-start">{id}</span>
      <span className="roboto line-clamp-1 inline-block flex-1 text-ellipsis">
        {tx_hash}
      </span>
      <span>{created_at && formatDistanceToNow(created_at)}</span>
    </div>
  );
};

export default Transaction;
