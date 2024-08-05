import { client } from "@/providers/TanstackQueryClientProvider";
import { WalletType } from "../transaction/types";
import { TWithdrawNetwork } from "./types";

export const getMyWallet = async (network: string) => {
  const response = await client.get(`/wallets/`, {
    params: { network: network },
  });

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create merchant");
};

export interface IWithdrawPayload {
  network: TWithdrawNetwork;
  amount: number;
  recipient_address: "0xRecipientAddress";
}

export const sendWithdraw = async (body : IWithdrawPayload) => {
  const response = await client.post("/wallets/withdraw", {
    network: body.network,
    amount: +body.amount,
    recipient_address: body.recipient_address
  }, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create merchant");
};
