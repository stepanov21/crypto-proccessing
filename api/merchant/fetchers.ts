import { client } from "@/providers/TanstackQueryClientProvider";
import { ITransferPayload } from "../transaction/types";
import { TNetwork } from "../wallets/types";

export const addMerchant = async (name: {}) => {
  const response = await client.post("/merchant/create_merchant", name, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create merchant");
};

export const merchantTransfer = async (body: ITransferPayload) => {
  const response = await client.post<ITransferPayload>(
    "/merchant/transfer",
    {
      token_field: body.token_field,
      wallet_type: body.wallet_type,
      amount: +body.amount,
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

export interface IMerchantInvoice {
  amount: 0;
  currency: string;
  network: string;
  payment_duration: string;
}

export const merchantPostInvoice = async (body: IMerchantInvoice) => {
  const response = await client.post(
    "/merchant/invoice",
    {
      amount: +body.amount,
      currency: "usdt",
      network: body.network,
      payment_duration: body.payment_duration,
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

export interface IMerchantGetInvoice {
  id: number;
  currency: "usdt";
  payment_address: string;
  status: string;
  seller_id: number;
  amount: number;
  network: TNetwork;
  expiration_time: Date;
  created_at: Date;
}

export const merchantGetInvoice = async () => {
  const response = await client.get<IMerchantGetInvoice[]>("/merchant/invoice");

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create merchant");
};

export const merchantGetBusinessWallet = async () => {
  const response = await client.get("/merchant/business_wallet_balances");

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create merchant");
};
