import React, { useEffect, useState } from "react";
import { Title } from "../ui/title";
import { Button } from "../ui/button";
import { Check, Files } from "lucide-react";
import { useGetMyWallets } from "@/api/wallets/queries";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyWalletAdress = ({network}: {network: "erc20" | "trc20"}) => {
  const { data, refetch } = useGetMyWallets(network);
  const [copy, setCopy] = useState(false);
  useEffect(() => {
    if (!copy) return;
    setTimeout(() => setCopy(false), 3000);
  }, [copy]);
  return (
    <>
      <Title className="mb-4 text-2xl">Поделиться адресом кошелька</Title>
      <p className="mb-7 dark:text-black">
        Сообщите адрес USDT кошелька отправителю чтобы принять переводы валют
      </p>
      <Button
        onClick={() => refetch()}
        className="mb-4 w-full"
        variant={"default"}
      >
        Сгенерировать новый адрес
      </Button>

      <div className="flex h-[60px] w-full cursor-pointer items-center justify-center gap-4 rounded-full border border-ourGreen text-[18px] font-semibold dark:border-black dark:text-black">
        <CopyToClipboard
          text={data?.wallet_address}
          onCopy={() => setCopy(true)}
        >
          {copy ? <Check size={20} /> : <Files size={20} />}
        </CopyToClipboard>
        <span>{data?.wallet_address}</span>
      </div>
    </>
  );
};

export default CopyWalletAdress;
