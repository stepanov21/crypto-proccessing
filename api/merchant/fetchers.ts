import { client } from "@/providers/TanstackQueryClientProvider";
import { ITransferPayload } from "../transaction/types";

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
