import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const transformWalletsList = (wallets: Record<string, number>) => {
  const list = [];
  for (let wallet in wallets) {
    if (wallet.startsWith("balance")) {
      const iconName = wallet.split("_")[wallet.split("_").length - 1];
      list.push({
        id: wallet,
        icon: iconName,
        balance: wallets[wallet],
      });
    }
  }
  return list;
};
