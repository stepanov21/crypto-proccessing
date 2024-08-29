import {
  client,
  removeHeaderToken,
  setHeaderToken,
} from "@/providers/TanstackQueryClientProvider";

export const getUserRole = async () => {
  const response = await client.get("/user/role");

  if (response?.status === 200) {
    const { data } = response;

    return data;
  }

  throw new Error("Failed to get user role");
};

export const getAdminUsers = async () => {
  const response = await client.get("/admin/users");

  if (response?.status === 200) {
    const { data } = response;

    return data;
  }

  throw new Error("Failed to get users");
};

export const getAdminInvoices = async () => {
  const response = await client.get("/admin/invoices");

  if (response?.status === 200) {
    const { data } = response;

    return data;
  }

  throw new Error("Failed to get total invoices");
};

export const getAdminInvoicesPerPeriod = async (
  period: "1d" | "1w" | "30d",
) => {
  const response = await client.get("/admin/invoice_period", {
    params: { period: period },
  });

  if (response?.status === 200) {
    const { data } = response;

    return data;
  }

  throw new Error("Failed to get invoices per period");
};

export const getAdminTurnover = async () => {
  const response = await client.get("/admin/invoice_turnover");

  if (response?.status === 200) {
    const { data } = response;

    return data;
  }

  throw new Error("Failed to get total invoices");
};

type TTurnover = { currency: string; network: string; total_turnover: number };

interface INetworkBalance {
  invoice_turnover_period: TTurnover[]
}

export const getAdminTurnoverPerPeriod = async (
  period: "1d" | "1w" | "30d",
) => {
  const response = await client.get("/admin/invoice_turnover_period", {
    params: { period: period },
  });

  if (response?.status === 200) {
    const { data } = response;

    return data as INetworkBalance;
  }

  throw new Error("Failed to get invoices per period");
};

export const getAdminTotalTurnover = async () => {
  const response = await client.get("/admin/invoice_turnover_currency");

  if (response?.status === 200) {
    const { data } = response;

    return data;
  }

  throw new Error("Failed to get total invoices");
};
