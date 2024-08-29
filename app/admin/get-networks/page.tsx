'use client'

import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import React from "react";
import { useAdminTurnoverPerPeriod } from "@/api/admin/queries";

const Page = () => {
  const { data } = useAdminTurnoverPerPeriod("1w");
  console.log("🚀 ~ Page ~ data:", data)

  return (
    <div>
      <div className="mb-6 mt-6 flex items-center justify-between">
        <Title className="text-[28px] font-semibold">Обороты по сетям</Title>
      </div>
      <div className="grid grid-cols-3 justify-between px-[50px] sm:px-6  text-center text-sm opacity-50">
        <span className="text-start">Currency</span>
        <span>Network</span>
        <span className="text-end">Total Turnover</span>
      </div>
      {data &&
        data.invoice_turnover_period.map((network, key) => {
          return (
            <div
              key={key}
              className="purple-gradient mt-5 grid grid-cols-3 items-center justify-between rounded-[18px] px-[50px] sm:px-6 py-7 text-center dark:bg-ourGray dark:bg-none"
            >
              <div className="flex items-center gap-4 text-start">
                <span>{network.currency}</span>
              </div>
              <span>{network.network}</span>
              <span className="roboto text-end">{network.total_turnover} USDT</span>
            </div>
          );
        })}
    </div>
  );
};

export default Page;
