"use client";
import { useAuth } from "@/api/auth/queries";
import { useMerchant } from "@/api/merchant/queries";
import { useTheme } from "@/zustand/store";
import { ArrowRightLeft, MoonStar, Sun, UserRound } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";
import ChangeLanguage from "./ChangeLanguage";
import MobileAsideMenu from "./MobileAsideMenu";

const BusinessUserCard = () => {
  const t = useTranslations("Business wallet");
  const local = useLocale();
  const { useBusinessWallets } = useMerchant();
  const { data } = useBusinessWallets();
  const { useLogoutUser } = useAuth();
  const changeTheme = useTheme((state) => state.changeTheme);
  return (
    <div className="purple-gradient z-10 rounded-[18px] px-[30px] pb-[60px] pt-10 dark:bg-ourGray dark:bg-none sm:fixed sm:left-0 sm:w-[calc(100vw)] sm:rounded-none sm:p-4 sm:pb-[30px]">
      <div className="flex items-center">
        <span className="mr-auto text-[32px] font-semibold dark:text-black sm:w-[90px] sm:text-[16px]">
          {t("title")}
        </span>
        <Link href={"/neutronx-api"}>
          <Button
            className="mr-10 h-8 px-4 text-sm sm:mr-0 sm:h-8"
            variant={"wallet"}
          >
            API <span className="ml-2 sm:hidden">{t("api")}</span>
          </Button>
        </Link>
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
            $ {data.total_balance} USDT
          </span>
        ) : (
          <span>USDT</span>
        )}
      </div>
      <div className="mt-9 flex gap-10 sm:mt-4 sm:gap-5">
        <Link
          className="w-full max-w-[256px]"
          href={`/${local}/business-wallet/transfer`}
        >
          <Button className="w-full px-2.5 font-semibold" variant={"wallet"}>
            <span>{t("1st btn")}</span>
            <ArrowRightLeft />
          </Button>
        </Link>
        <Link
          className="w-full max-w-[256px]"
          href={`/${local}/business-wallet/payment`}
        >
          <Button className="w-full px-2.5 font-semibold" variant={"wallet"}>
            <span>{t("2st btn")}</span>
            <ArrowRightLeft />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BusinessUserCard;
