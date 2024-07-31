'use client'
import React from "react";
import { Button } from "../ui/button";
import { ArrowDownLeft, ArrowRightLeft, ArrowUpRight, Bell, UserRound } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useToken from "@/hooks/useToken";



const MainUserCard = () => {
  // const {config} = useToken()
  // const {data} = useQuery({ queryKey: ['todos'], queryFn: () => {
  //   axios.get('https://app.neutronx.com/user/balance', config)
  // }})
  const data = true;
  // console.log(data)

  return (
    <div className="purple-gradient px-[30px] pt-10 pb-[60px] rounded-[18px]">
      <div className="flex items-center">
        <span className="text-[32px] font-semibold mr-auto">
          Личный кабинет
        </span>
        <Button className="light-purple-gradient text-white mr-4" size={"icon"}>
          <Bell size={18} />
        </Button>
        <Button className="light-purple-gradient text-white" size={"icon"}>
          <UserRound size={18} />
        </Button>
      </div>
      <div className="flex flex-col gap-2 mt-20">
        <span className="text-ourLightPurple text-xl">Доступный баланс</span>
        {data ? <span className="text-xl roboto">$ 0.00</span> : null}
      </div>
      <div className="flex justify-between gap-10 mt-9">
        <Button className="px-2.5 w-full font-semibold" variant={'wallet'}><span>Получить</span><ArrowDownLeft /></Button>
        <Button className="px-2.5 w-full font-semibold" variant={'wallet'}><span>Вывод</span><ArrowUpRight /></Button>
        <Button className="px-2.5 w-full font-semibold" variant={'wallet'}><span>Перевести</span><ArrowRightLeft /></Button>
      </div>
    </div>
  );
};

export default MainUserCard;
