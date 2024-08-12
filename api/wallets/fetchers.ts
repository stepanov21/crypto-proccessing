import { client } from "@/providers/TanstackQueryClientProvider";
import { WalletType } from "../transaction/types";
import { TWithdrawNetwork } from "./types";
import { ITransaction } from "@/app/(main)/wallet/page";

export const getMyWallet = async (network: string) => {
  const response = await client.get(`/wallets/`, {
    params: { network: network },
  });

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create merchant");
};

const headers = {Accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",};


export const getDowloadTransactions = async () => {
  const response = await client.get(`/wallets/download_transactions`, {
    responseType: "blob",
    headers
  });

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create Exel");
};

export const getMyTransaction = async () => {
  const response = await client.get<ITransaction[]>(`/wallets/transactions`);

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create merchant");
};

export interface IWithdrawPayload {
  network: TWithdrawNetwork;
  amount: number;
  recipient_address: string;
  token: "usdt_erc";
}

export const sendWithdraw = async (body: IWithdrawPayload) => {
  const response = await client.post(
    "/wallets/withdraw",
    {
      network: "arb",
      amount: +body.amount,
      recipient_address: "0xAb0ec9BA36F01fe17aA5A2d9DF610b57A7b4380C",
      token: "usdt_arb",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create merchant");
};
