"use client";
import { useAuth } from "@/api/auth/queries";
import { useWallets } from "@/api/transaction/queries";
import { useTheme } from "@/zustand/store";
import {
  ArrowDownLeft,
  ArrowRightLeft,
  ArrowUpRight,
  MoonStar,
  Sun,
  UserRound,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";
import ChangeLanguage from "./ChangeLanguage";
import MobileAsideMenu from "./MobileAsideMenu";

const MainUserCard = () => {
  const t = useTranslations("Personal wallet");
  const local = useLocale();
  const { data } = useWallets();
  const { useLogoutUser } = useAuth();
  const changeTheme = useTheme((state) => state.changeTheme);

  return (
    <div className="purple-gradient z-10 rounded-[18px] px-[30px] pb-[60px] pt-10 dark:bg-ourGray dark:bg-none sm:fixed sm:left-0 sm:top-0 sm:w-[calc(100vw)] sm:rounded-none sm:p-4 sm:pb-[30px]">
      <div className="flex items-center">
        <span className="mr-auto text-[32px] font-semibold dark:text-black sm:w-[90px] sm:text-[16px]">
          {t("title")}
        </span>
        <Button onClick={changeTheme} variant={"wallet"} size={"icon"}>
          <Sun className={"dark:hidden"} size={20} />
          <MoonStar className={"hidden dark:block"} size={20} />
        </Button>
        <ChangeLanguage />
        <Button
          onClick={() => useLogoutUser.mutate()}
          variant={"wallet"}
          size={"icon"}
        >
          <UserRound size={20} />
        </Button>
        <MobileAsideMenu />
      </div>
      <div className="mt-20 flex flex-col gap-2 dark:text-black sm:mt-2 sm:leading-none">
        <span className="text-xl text-ourLightPurple sm:text-[12px] sm:leading-none">
          {t("balance")}
        </span>
        {data ? (
          <span className="roboto text-xl sm:text-[16px] sm:leading-none">
            $ {data.balances.total_usdt}
          </span>
        ) : (
          <span>USDT</span>
        )}
      </div>
      <div className="scrollbar-hidden relative mt-9 flex justify-between gap-10 sm:mt-4 sm:gap-5 sm:overflow-auto">
        <Link className="w-full" href={`/${local}/wallet/receipt`}>
          <Button
            className="w-full px-2.5 font-semibold sm:w-[210px]"
            variant={"wallet"}
          >
            <span>{t("1st btn")}</span>
            <ArrowDownLeft />
          </Button>
        </Link>
        <Link className="w-full" href={`/${local}/wallet/withdraw`}>
          <Button
            className="w-full px-2.5 font-semibold sm:w-[210px]"
            variant={"wallet"}
          >
            <span>{t("2st btn")}</span>
            <ArrowUpRight />
          </Button>
        </Link>
        <Link className="w-full" href={`/${local}/wallet/transfer`}>
          <Button
            className="w-full px-2.5 font-semibold sm:w-[210px]"
            variant={"wallet"}
          >
            <span>{t("3st btn")}</span>
            <ArrowRightLeft />
          </Button>
        </Link>
        <div className="fixed right-3 h-0 w-[50px] -translate-y-[1px] bg-gradient-to-r from-transparent to-[#161122] dark:to-ourGray sm:h-[52px]"></div>
      </div>
    </div>
  );
};

export default MainUserCard;
