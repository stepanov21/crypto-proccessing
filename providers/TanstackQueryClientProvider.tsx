"use client";

import { BASE_URL } from "@/constants/varialbles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import React, { ReactNode } from "react";

export const queryClient = new QueryClient();

//Всё что связанно с клиентом Axios, в конце есть интерцептор для отловли каждого запроса, для RefreshToken
export const client = axios.create({
  baseURL: BASE_URL,
});

export const setHeaderToken = (token: string) => {
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeHeaderToken = () => {
  delete client.defaults.headers.common["Authorization"];
};

client.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage?.getItem("access_token") as string) || null

  config.headers["Authorization"] =
    `Bearer ${token.state.token}`;

    // const res = client.get('/auth/jwt/refresh')
    // console.log(res)
  return config;
});

const TanstackQueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackQueryClientProvider;
