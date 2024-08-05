import React from "react";
import { Title } from "../ui/title";
import { Button } from "../ui/button";
import { Files } from "lucide-react";
import { useGetMyWallets } from "@/api/wallets/queries";

const CopyWalletAdress = () => {
  const { data } = useGetMyWallets("erc20");
  return (
    <>
      <Title className="mb-4 text-2xl">Поделиться адресом кошелька</Title>
      <p className="mb-7 dark:text-black">
        Сообщите адрес USDT кошелька отправителю чтобы принять переводы валют
      </p>
      <Button className="mb-4 w-full" variant={"default"}>
        Сгенерировать новый адрес
      </Button>
      <div className="flex h-[60px] w-full cursor-pointer items-center justify-center font-semibold gap-4 rounded-full border border-ourGreen text-[18px] dark:border-black dark:text-black">
        <Files />
        0x1Ae7da34846261c59f8A4D795F9F018A9e1FD6f6
      </div>
    </>
  );
};

export default CopyWalletAdress;
