import { BASE_URL } from "@/constants/varialbles";
import { BasicResponse } from "../common/types";
import { client } from "@/providers/TanstackQueryClientProvider";
import { TokenType } from "./types";

export const fetchWallets = async () => {
  const response = await client.get("/user/balance");

  if (response.data) {
    const data: Record<string, number> = await response.data;
    return data;
  }

  throw new Error("Failed to fetch data.");
};
