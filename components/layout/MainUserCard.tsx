"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  ArrowDownLeft,
  ArrowRightLeft,
  ArrowUpRight,
  Bell,
  UserRound,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useToken from "@/hooks/useToken";
import Link from "next/link";

const MainUserCard = () => {
  const { config } = useToken();
  const { data } = useQuery({
    queryKey: ["total-balance"],
    queryFn: () => {
      return axios.get("https://app.neutronx.com/user/balance", config);
    },
  });

  console.log(data);

  return (
    <div className="purple-gradient rounded-[18px] px-[30px] pb-[60px] pt-10 dark:bg-black">
      <div className="flex items-center">
        <span className="mr-auto text-[32px] font-semibold">
          Личный кабинет
        </span>
        <Button className="light-purple-gradient mr-4 text-white" size={"icon"}>
          <Bell size={18} />
        </Button>
        <Button className="light-purple-gradient text-white" size={"icon"}>
          <UserRound size={18} />
        </Button>
      </div>
      <div className="mt-20 flex flex-col gap-2">
        <span className="text-xl text-ourLightPurple">Доступный баланс</span>
        {data ? (
          <span className="roboto text-xl">$ {data.data.total_usdt}</span>
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
