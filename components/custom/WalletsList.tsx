import React from "react";
import WalletItem from "./WalletItem";
import { Title } from "../ui/title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Plus, Search, X } from "lucide-react";
import SelectPaymentVariant from "./SelectPaymentVariant";

const WalletsList = () => {
  return (
    <div>
      <div className="flex">
        <Title className="mb-[18px] max-w-[200px]">
          Балансы личных кошельков
        </Title>
        <Button className="ml-auto bg-transparent text-white" size={"icon"}>
          <Search size={24} />
        </Button>
        <Button className="bg-transparent text-white" size={"icon"}>
          <Plus size={24} />
        </Button>
      </div>
      <div className="purple-gradient mb-[30px] space-y-[30px] rounded-[18px] p-5 pt-10">
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
