"use client";

import React, { ReactNode } from "react";
import Bage from "./Bage";
import {
  useAdminInvoices,
  useAdminInvoicesPerPeriod,
  useAdminTotalTurnover,
  useAdminTurnover,
  useAdminTurnoverPerPeriod,
  useAdminUsers,
} from "@/api/admin/queries";

const AdminCard = () => {
  const { data } = useAdminUsers();
  const { data: invoices } = useAdminInvoices();
  const { data: invoicesPerPeriod } = useAdminInvoicesPerPeriod("1d");
  const { data: turnover } = useAdminTurnover();
  console.log("🚀 ~ AdminCard ~ turnover:", turnover);
  const { data: turnoverPerPeriod } = useAdminTurnoverPerPeriod("1w");
  console.log("🚀 ~ AdminCard ~ turnoverPerPeriod:", turnoverPerPeriod);
  const { data: turnoverTotal } = useAdminTotalTurnover();
  console.log("🚀 ~ AdminCard ~ turnoverTotal:", turnoverTotal);
  return (
    <div className="purple-gradient rounded-[18px] px-5 py-[50px] dark:bg-ourGray dark:bg-none dark:text-black sm:bg-none sm:p-0">
      <Bage />
      <div className="mt-16 grid grid-cols-5 gap-2.5 lg:grid-cols-3 sm:grid-cols-1 sm:text-start">
        <CardWrapper>
          <span className="sm:text-left">Количество пользователей</span>
          <span className="roboto text-xl font-semibold">
            {data?.total_register_users}
          </span>
        </CardWrapper>
        <CardWrapper>
          <span>Количество всех инвойсов</span>
          <span className="roboto text-xl font-semibold">
            {invoices?.total_invoice}
          </span>
        </CardWrapper>
        <CardWrapper>
          <span>Инвойсов за 7 дней</span>
          <span className="roboto text-xl font-semibold">
            {invoicesPerPeriod?.invoice_count}
          </span>
        </CardWrapper>
        <CardWrapper>
          <span>Получено всего:</span>
          <span className="roboto text-xl font-semibold">
            {turnover?.total_invoice_turnover
              ? turnover?.total_invoice_turnover
              : 0}
          </span>
        </CardWrapper>
        <CardWrapper>
          <span>Сумма всех инвойсов</span>
          <span className="roboto text-xl font-semibold">
            {turnoverPerPeriod?.invoice_turnover_period.reduce(
              (acc: number, item: any) => (acc += item.total_turnover),
              0,
            )}
            <span className="pl-2">USDT</span>
          </span>
        </CardWrapper>
      </div>
    </div>
  );
};

const CardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-[140px] flex-col items-center justify-between rounded-[18px] border border-[#B585FC] px-2.5 py-[18px] text-center dark:border-black sm:h-auto sm:flex-row sm:border-none sm:p-0">
      {children}
    </div>
  );
};

export default AdminCard;
