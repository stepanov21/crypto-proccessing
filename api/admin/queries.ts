import { useQuery } from "@tanstack/react-query";
import { getAdminInvoices, getAdminInvoicesPerPeriod, getAdminTotalTurnover, getAdminTurnover, getAdminTurnoverPerPeriod, getAdminUsers, getUserRole } from "./fetchers";

export const useUserRole = () =>
    useQuery({
      queryKey: ["user-role"],
      queryFn: () => getUserRole(),
});

export const useAdminUsers = () =>
    useQuery({
      queryKey: ["admin-users"],
      queryFn: () => getAdminUsers(),
});

export const useAdminInvoices = () =>
    useQuery({
      queryKey: ["admin-invoices"],
      queryFn: () => getAdminInvoices(),
});

export const useAdminInvoicesPerPeriod = (period: '1d' | '1w' | '30d') =>
    useQuery({
      queryKey: ["admin-invoices-period", period],
      queryFn: () => getAdminInvoicesPerPeriod(period),
});

export const useAdminTurnover = () =>
    useQuery({
      queryKey: ["admin-turnover"],
      queryFn: () => getAdminTurnover(),
});

export const useAdminTurnoverPerPeriod = (period: '1d' | '1w' | '30d') =>
    useQuery({
      queryKey: ["admin-turnover-period", period],
      queryFn: () => getAdminTurnoverPerPeriod(period),
});

export const useAdminTotalTurnover = () =>
  useQuery({
    queryKey: ["admin-turnover-total"],
    queryFn: () => getAdminTotalTurnover(),
});