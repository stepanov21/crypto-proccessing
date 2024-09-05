import { client } from "@/providers/TanstackQueryClientProvider";
import { ITransferPayload } from "../transaction/types";
import { TNetwork } from "../wallets/types";

export const getAllMerchants = async () => {
  const response = await client.get("/merchant");

  if (response.data) {
    const data = await response.data;
    return data;
  }

  throw new Error("Failed to fetch merchants");
};

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

export const merchantTransferOwnToBusiness = async (body: ITransferPayload) => {
  const response = await client.post<ITransferPayload>(
    "/merchant/transfer/business_wallet",
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

export const merchantTransferBusinessToOwn = async (body: ITransferPayload) => {
  const response = await client.post<ITransferPayload>(
    "/merchant/transfet/own_wallet",
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
      currency: body.currency,
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
  created_at: string;
  invoice_link: string;
  invoice_uuid: string;
  was_cancelled: boolean;
}

export type IDataMerchantGetInvoice = {
  invoices: IMerchantGetInvoice[];
  page: number;
  total_pages: number;
};

export const merchantGetInvoice = async ({
  page = 1,
  period = "30d",
}: {
  page: number;
  period: "1d" | "7d" | "30d";
}) => {
  const response = await client.get<IDataMerchantGetInvoice>(
    "/merchant/invoice",
    { params: { page: page, period: period } },
  );

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create merchant");
};

export const merchantGetInvoiceById = async (id: string) => {
  const response = await client.get<IMerchantGetInvoice>(
    `/merchant/invoice/${id}`,
    {
      params: { id: id },
    },
  );

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
