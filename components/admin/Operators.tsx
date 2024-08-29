import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Title } from "../ui/title";

const Operators = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-16 mb-12">
        <Title className="text-[28px] font-semibold">Оператор</Title>
        <Button>Создать</Button>
      </div>
      <div className="grid grid-cols-4 justify-between text-center text-sm opacity-50 px-[50px]">
        <span className="text-start">UserName </span>
        <span>Email</span>
        <span>ID </span>
        <span>Action</span>
      </div>
      <div className="grid grid-cols-4 justify-between items-center text-center px-[50px] py-7 purple-gradient  dark:bg-none dark:bg-ourGray rounded-[18px] mt-5">
        <div className="text-start flex gap-4 items-center">
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
