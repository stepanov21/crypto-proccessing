"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Title } from "../ui/title";

const TransactionNotFound = () => {
  const router = useRouter();
  const local = useLocale();
  return (
    <div className="relative mx-auto mt-28 max-w-[540px] text-center dark:text-black">
      <Title>Транзакций пока нет</Title>
      <p className="mb-[50px] mt-[18px] leading-normal">
        У вас пока нет успешных транзакций. Вы можете получить адрес своего
        кошелька и поделиться им
      </p>
      <Button
        onClick={() => router.push(`/${local}/wallet/receipt`)}
        className="mx-auto"
        variant={"form"}
      >
        Получить адрес
      </Button>
    </div>
  );
};

export default TransactionNotFound;
