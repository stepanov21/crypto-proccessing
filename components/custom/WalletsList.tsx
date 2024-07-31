import React from "react";
import WalletItem from "./WalletItem";
import { Title } from "../ui/title";
import { Button } from "../ui/button";

const WalletsList = () => {
  return (
    <div>
      <Title className="max-w-[200px] mb-[18px]">Балансы личных кошельков</Title>
      <div className="purple-gradient rounded-[18px] p-5 pt-10 space-y-[30px] mb-[30px]">
        <WalletItem />
        <WalletItem />
        <WalletItem />
        <WalletItem />
      </div>
      <Button variant={"aside"}>Показать больше</Button>
    </div>
  );
};

export default WalletsList;
