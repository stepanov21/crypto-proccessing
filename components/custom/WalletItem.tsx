import Image from "next/image";
import React from "react";

const WalletItem = () => {
  return (
    <div className="flex items-center gap-1.5">
      <div>
        <Image src={"/USDT.svg"} width={40} height={40} alt="usdt" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[18px]">USDT</span>
        <span className="text-ourLightPurple">Arbitrum</span>
      </div>
      <div className="roboto ml-auto flex flex-col items-end gap-2 font-medium">
        <span>0.000000</span>
        <span>$ 0.00</span>
      </div>
    </div>
  );
};

export default WalletItem;
