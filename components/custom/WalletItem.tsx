import Image from "next/image";
import React, { ReactNode } from "react";

const WalletItem = ({
  children,
  icon,
  balance,
}: {
  children: ReactNode;
  icon: string;
  balance: number;
}) => {
  return (
    <div className="flex max-w-[450px] w-full items-center gap-1.5 dark:text-black">
      <div className="relative">
        <Image src={"/USDT.svg"} width={40} height={40} alt="usdt" />
        <Image
          className="absolute bottom-0 right-0"
          src={`/wallet-icons/${icon}.svg`}
          width={16}
          height={16}
          alt="wallet"
        />
      </div>
      <div className="mr-auto flex flex-col gap-2">
        <span className="text-[18px]">USDT</span>
        <span className="text-ourLightPurple">{children}</span>
      </div>
      <div className="roboto flex flex-col items-end gap-2 font-medium">
        <span>{balance}</span>
        <span>$ 0.00</span>
      </div>
    </div>
  );
};

export default WalletItem;
