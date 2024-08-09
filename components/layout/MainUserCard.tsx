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

const MainUserCard = () => {
  const { data } = useWallets();
  const { useLogoutUser } = useAuth();
  const changeTheme = useTheme((state) => state.changeTheme);

  return (
    <div className="purple-gradient rounded-[18px] px-[30px] pb-[60px] pt-10 dark:bg-ourGray dark:bg-none">
      <div className="flex items-center">
        <span className="mr-auto text-[32px] font-semibold dark:text-black">
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
      </div>
      <div className="mt-20 flex flex-col gap-2 dark:text-black">
        <span className="text-xl text-ourLightPurple">Доступный баланс</span>
        {data ? (
          <span className="roboto text-xl">$ {data.total_usdt}</span>
        ) : null}
      </div>
      <div className="mt-9 flex justify-between gap-10">
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
