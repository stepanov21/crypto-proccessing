"use client";

import { useGetMyTransaction } from "@/api/wallets/queries";
import TransactionNotFound from "@/components/custom/TransactionNotFound";
import React, { useState } from "react";
import { intervalToDuration, parseISO } from "date-fns";
import Transaction from "@/components/custom/Transaction";
import { useFilterTime } from "@/zustand/store";

export interface ITransaction {
  created_at: string;
  id: number;
  network: "arb";
  tx_hash: string;
  user_id: number;
}

const fakeTransaction = [
  {
    created_at: "2024-08-09T17:13:51.789814",
    id: 46,
    network: "arb",
    tx_hash: "0x974c3454365408c1a6bdd565b69d0c4fd0495278c749d77",
    user_id: 2,
  },
  {
    created_at: "2024-08-03T17:13:51.789814",
    id: 59,
    network: "arb",
    tx_hash: "0x974c5620376586758760c93c4654565b69d0c4fd0495278c749d77",
    user_id: 2,
  },
  {
    created_at: "2024-08-01T17:13:51.789814",
    id: 68,
    network: "arb",
    tx_hash: "34534665c989a808c1a6bdd565b69d0c4fd0495278c749d77",
    user_id: 2,
  },
  {
    created_at: "2024-08-05T17:13:51.789814",
    id: 56,
    network: "arb",
    tx_hash: "45767f456493c989a808c1a6bdd565b69d0c4fd0495278c749d77",
    user_id: 2,
  },
  {
    created_at: "2024-07-02T17:13:51.789814",
    id: 67,
    network: "arb",
    tx_hash: "4534d543561569a30c93c989a808c1a6bdd565b69d0c4fd0495278c749d77",
    user_id: 2,
  },
  {
    created_at: "2024-07-05T17:13:51.789814",
    id: 98,
    network: "arb",
    tx_hash: "54365d5461569a30c93c989a808c1a6bdd565b69d0c4fd0495278c749d77",
    user_id: 2,
  },
];

const Page = () => {
  const [page, setPage] = useState(1);

  const { data } = useGetMyTransaction(page);
  console.log("🚀 ~ Page ~ data:", data);
  const { days } = useFilterTime((state) => state);

  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="flex items-center justify-between px-[24px] text-center text-sm opacity-50">
          <span className="text-start">ID</span>
          <span>Хэш</span>
          <span>Созданный</span>
        </div>
      </div>
      {fakeTransaction.length >= 1 ? (
        fakeTransaction
          .filter((trans) => {
            const date = intervalToDuration({
              start: parseISO(trans?.created_at),
              end: new Date(),
            });
            if (date?.days! - 1 < days && !date.months) return trans;
          })
          .map((trans) => {
            return (
              <Transaction
                key={trans.id}
                tx_hash={trans.tx_hash}
                created_at={trans.created_at}
                id={trans.id}
              />
            );
          })
      ) : (
        <TransactionNotFound />
      )}
    </div>
  );
};

export default Page;
