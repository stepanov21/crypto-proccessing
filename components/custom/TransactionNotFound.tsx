import React from "react";
import { Title } from "../ui/title";
import { Button } from "../ui/button";

const TransactionNotFound = () => {
  return (
    <div className="mt-28 text-center max-w-[540px] mx-auto">
      <Title>Транзакций пока нет</Title>
      <p className="mt-[18px] mb-[50px] leading-normal">
        У вас пока нет успешных транзакций. Вы можете получить адрес своего
        кошелька и поделиться им
      </p>
      <Button variant={"form"}>Получить адрес</Button>
    </div>
  );
};

export default TransactionNotFound;
