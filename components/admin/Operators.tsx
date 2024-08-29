import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Title } from "../ui/title";

const Operators = () => {
  return (
    <div>
      <div className="mb-12 mt-16 flex items-center justify-between">
        <Title className="text-[28px] font-semibold">Оператор</Title>
        <Button>Создать</Button>
      </div>
      <div className="grid grid-cols-4 justify-between px-[50px] text-center text-sm opacity-50">
        <span className="text-start">UserName </span>
        <span>Email</span>
        <span>ID </span>
        <span>Action</span>
      </div>
      <div className="purple-gradient mt-5 grid grid-cols-4 items-center justify-between rounded-[18px] px-[50px] py-7 text-center dark:bg-ourGray dark:bg-none">
        <div className="flex items-center gap-4 text-start">
          <Image src={"/avatar.png"} width={40} height={40} alt="avatar" />
          <span>Name</span>
        </div>
        <span>johndoe@gmail.com</span>
        <span className="roboto">14</span>
        <span>Удалить </span>
      </div>
    </div>
  );
};

export default Operators;
