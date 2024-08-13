"use client";
import { useWallets } from "@/api/transaction/queries";
import {
  ArrowDownLeft,
  ArrowRightLeft,
  ArrowUpRight,
  Bell,
  MoonStar,
  Sun,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth } from "@/api/auth/queries";
import { useTheme } from "@/zustand/store";
import MobileAsideMenu from "./MobileAsideMenu";

const MainUserCard = () => {
  const { data } = useWallets();
  const { useLogoutUser } = useAuth();
  const changeTheme = useTheme((state) => state.changeTheme);

  return (
    <div className="purple-gradient z-10 rounded-[18px] px-[30px] pb-[60px] pt-10 dark:bg-ourGray dark:bg-none sm:fixed sm:left-0 sm:w-full sm:rounded-none sm:p-4 sm:pb-[30px]">
      <div className="flex items-center">
        <span className="mr-auto text-[32px] font-semibold dark:text-black sm:w-[90px] sm:text-[16px]">
          Личный кабинет
        </span>
        <Button onClick={changeTheme} variant={"wallet"} size={"icon"}>
          <Sun className={"dark:hidden"} size={20} />
          <MoonStar className={"hidden dark:block"} size={20} />
        </Button>
        <Button variant={"wallet"} size={"icon"}>
          <Bell size={20} />
        </Button>
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
          Доступный баланс
        </span>
        {data ? (
          <span className="roboto text-xl sm:text-[16px] sm:leading-none">
            $ {data.total_usdt}
          </span>
        ) : null}
      </div>
      <div className="mt-9 flex justify-between gap-10 sm:mt-4 sm:gap-5">
        <Link className="w-full" href={"/wallet/receipt"}>
          <Button className="w-full px-2.5 font-semibold" variant={"wallet"}>
            <span>Получить</span>
            <ArrowDownLeft />
          </Button>
        </Link>
        <Link className="w-full" href={"/wallet/withdraw"}>
          <Button className="w-full px-2.5 font-semibold" variant={"wallet"}>
            <span>Вывод</span>
            <ArrowUpRight />
          </Button>
        </Link>
        <Link className="w-full" href={"/wallet/transfer"}>
          <Button className="w-full px-2.5 font-semibold" variant={"wallet"}>
            <span>Перевести</span>
            <ArrowRightLeft />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MainUserCard;
