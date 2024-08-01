import React from "react";
import { Title } from "../ui/title";
import { Button } from "../ui/button";
import { Files } from "lucide-react";

const CopyWalletAdress = () => {
  return (
    <>
      <Title className="mb-4 text-2xl">Поделиться адресом кошелька</Title>
      <p className="mb-7">
        Сообщите адрес USDT кошелька отправителю чтобы принять переводы валют
      </p>
      <Button className="mb-4 w-full" variant={"default"}>
        Сгенерировать новый адрес
      </Button>
      <div className="flex h-[60px] w-full cursor-pointer items-center justify-center gap-4 rounded-full border border-ourGreen text-[18px]">
        <Files />
        0y16800343219be47097e9341ngh87bd4c8a835f54
      </div>
    </>
  );
};

export default CopyWalletAdress;
