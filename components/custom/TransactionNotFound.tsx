import React from "react";
import { Title } from "../ui/title";
import { Button } from "../ui/button";

const TransactionNotFound = () => {
  return (
    <div className="mx-auto mt-28 max-w-[540px] text-center relative translate-x-1/3 dark:text-black">
      <Title>Транзакций пока нет</Title>
      <p className="mb-[50px] mt-[18px] leading-normal">
        У вас пока нет успешных транзакций. Вы можете получить адрес своего
        кошелька и поделиться им
      </p>
      <Button variant={"form"}>Получить адрес</Button>
    </div>
  );
};

export default TransactionNotFound;
