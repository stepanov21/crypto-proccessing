import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformWalletsList = (wallets: Record<string, number>) => {
  console.log(wallets);
  const list = [];
  for (let wallet in wallets) {
    if (wallet === "balance_eth") continue;
    if (wallet.startsWith("balance")) {
      const iconName = wallet.split("_")[wallet.split("_").length - 1];
      const name = iconName[0].toUpperCase() + iconName.slice(1);
      list.push({
        id: wallet,
        name,
        icon: iconName,
        balance: wallets[wallet],
      });
    }
  }
  return list;
};
