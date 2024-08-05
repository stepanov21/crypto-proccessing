import { client } from "@/providers/TanstackQueryClientProvider";

export const addMerchant = async (name: {}) => {
  const response = await client.post("/merchant/create_merchant", name, {
    headers: {
        "Content-Type": "application/json"
      },
  });

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to create merchant");
};
