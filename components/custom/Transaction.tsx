import { ITransaction } from "@/app/(main)/wallet/page";
import { formatDistanceToNow } from "date-fns";
import React from "react";

const Transaction = ({ id, created_at, tx_hash }: Partial<ITransaction>) => {
  return (
    <div className="middle-purple-gradient flex flex-col gap-2 rounded-[10px] p-2.5">
      <div className="flex items-center">
        <span className="opacity-40">Id:</span>
        <span className="roboto ml-auto line-clamp-1 inline-block text-ellipsis text-sm">
          {id}
        </span>
      </div>
      <div className="flex items-center">
        <span className="opacity-40">Created:</span>
        <span className="roboto ml-auto line-clamp-1 inline-block text-ellipsis text-sm">
          {formatDistanceToNow(created_at!)} ago
        </span>
      </div>
      <div className="flex items-center">
        <span className="opacity-40">Hesh:</span>
        <span className="roboto ml-auto line-clamp-1 inline-block text-ellipsis text-sm">
          {tx_hash}
        </span>
      </div>
    </div>
  );
};

export default Transaction;
