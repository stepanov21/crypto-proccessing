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

const headers = {
  Accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

export const getDowloadTransactions = async () => {
  const response = await client.get(`/wallets/download_transactions`, {
    responseType: "blob",
    headers,
  });

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create Exel");
};

export const getMyTransaction = async (page: number = 1) => {
  const response = await client.get<{
    invoices: ITransaction[];
    page: number;
    total_pages: number;
  }>(`/wallets/transactions`, { params: { page: page } });

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create merchant");
};

export interface IWithdrawPayload {
  network: TWithdrawNetwork;
  amount: number;
  recipient_address: string;
  token: string;
}

export const sendWithdraw = async (body: IWithdrawPayload) => {
  const response = await client.post(
    "/wallets/withdraw",
    {
      network: body.network,
      amount: +body.amount,
      recipient_address: body.recipient_address,
      token: body.token,
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
