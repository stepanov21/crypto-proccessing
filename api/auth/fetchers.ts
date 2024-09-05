import {
  client,
  removeHeaderToken,
  setHeaderToken,
} from "@/providers/TanstackQueryClientProvider";
import { loginRes, TLoginPayload, TRegisterPayload } from "./types";

export const loginUser = async (body: TLoginPayload) => {
  const response = await client.post<loginRes, any>("/auth/jwt/login", body, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (response?.status === 200) {
    const { data } = response;

    setHeaderToken(data.access_token);

    return data;
  }

  throw new Error("Failed to login");
};

export const logoutUser = async () => {
  const response = await client.post("/auth/jwt/logout");

  if (response.status === 200 || response.status === 204) {
    const { data } = response;

    removeHeaderToken();

    return data;
  }

  throw new Error("Failed to logout");
};

export const registerUser = async (body: TRegisterPayload) => {
  const response = await client.post("/auth/register", body);
  if (response.status === 200 || response.status === 201) {
    const { data } = response;

    return data;
  }
  throw new Error("Failed to register");
};
