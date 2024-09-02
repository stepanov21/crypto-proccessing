"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { ArrowDownToLine, ChevronDown, Search } from "lucide-react";
import DownloadPDF from "./DownloadPDF";
import { useGetDownloadTransaction } from "@/api/wallets/queries";
import { useFilterTime } from "@/zustand/store";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const TransactionFilters = () => {
  const local = useLocale();
  const t = useTranslations("Filters");
  const { data } = useGetDownloadTransaction();
  const { changeDays } = useFilterTime((state) => state);
  const pathname = usePathname();
  console.log("🚀 ~ TransactionFilters ~ pathname:", pathname);

  const href = URL.createObjectURL(
    new Blob([data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    }),
  );

  return (
    <>
      {pathname === `/${local}/wallet` ||
      pathname === `/${local}/business-wallet` ? (
        <>
          <div className="ml-[30px] flex flex-wrap items-center gap-3 sm:ml-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="text-md flex h-[50px] w-[180px] justify-between rounded-[18px] border-[1px] border-white bg-transparent px-4 font-medium text-white dark:border-[#7F808D] dark:bg-white dark:text-black">
                  {t("1st select")}
                  <ChevronDown className="ml-auto" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="pt-0">
                <div className="text-md w-[185px] space-y-4 rounded-[10px] border-[1px] border-[#37304B] bg-ourDarkPurple p-2.5 text-white dark:border-[#7F808D] dark:bg-white dark:text-black">
                  <div className="flex items-center justify-between space-x-2">
                    <label
                      htmlFor="1"
                      className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("1st 1v")}
                    </label>
                    <Checkbox id="1" />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <label
                      htmlFor="2"
                      className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("1st 2v")}
                    </label>
                    <Checkbox id="2" />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <label
                      htmlFor="3"
                      className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("1st 3v")}
                    </label>
                    <Checkbox id="3" />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Select onValueChange={(e) => changeDays(+e)}>
              <SelectTrigger className="mr-auto w-[180px]">
                <SelectValue placeholder={t("2st select")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">{t("2st 3v")}</SelectItem>
                <SelectItem value="7">{t("2st 2v")}</SelectItem>
                <SelectItem value="1">{t("2st 1v")}</SelectItem>
              </SelectContent>
            </Select>
            {/* <Button
              className="flex w-min gap-2.5 px-5 sm:w-full"
              variant={"aside"}
            >
              <Search size={20} />
              Найти транзакцию
            </Button> */}

            {/* Отправить на мейл
        <DownloadPDF/> */}
            <a className="sm:w-full" href={href} download>
              {" "}
              <Button
                className="flex w-min gap-2.5 px-5 sm:w-full"
                variant={"aside"}
              >
                <ArrowDownToLine size={20} />
                {t("btn")}
              </Button>
            </a>
          </div>
          <div className="mb-10 h-4 w-full border-b-[1px] border-b-ourLightPurple"></div>
        </>
      ) : null}
    </>
  );
};

export default TransactionFilters;
