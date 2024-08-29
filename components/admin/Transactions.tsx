import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Title } from "../ui/title";

const Transactions = () => {
  return (
    <div>
      <div className="mb-12 mt-16 flex items-center justify-between">
        <Title className="text-[28px] font-semibold">Транзакции</Title>
        <Button>Создать</Button>
      </div>
      <div className="grid grid-cols-12 justify-between gap-4 px-[50px] text-center text-sm opacity-50">
        <span className="col-span-1 text-start">ID</span>
        <span className="col-span-1">User ID</span>
        <span className="col-span-4">Tx ID </span>
        <span className="col-span-1">Amount</span>
        <span className="col-span-1">Network</span>
        <span className="col-span-2">User </span>
        <span className="col-span-2">Email </span>
      </div>
      <div className="purple-gradient mt-5 grid grid-cols-12 items-center justify-between gap-4 rounded-[18px] px-[50px] py-7 text-center dark:bg-ourGray dark:bg-none">
        <span className="roboto col-span-1 flex w-10 items-center gap-4 text-start">
          123
        </span>
        <span className="roboto col-span-1">12</span>
        <div className="roboto col-span-4 overflow-hidden text-ellipsis text-wrap break-words">
          123grw567wfgh46776768877a48965678376egjoghhfghrt565767hjtjmfhjxx
        </div>
        <span className="roboto col-span-1">12 </span>
        <span className="col-span-1">arb </span>
        <span className="col-span-2">JohnDoe </span>
        <span className="col-span-2">johndoe@gmail.com </span>
      </div>
    </div>
  );
};

export default Transactions;
