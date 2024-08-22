"use client";

import { BASE_URL } from "@/constants/varialbles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { redirect } from "next/navigation";
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
  const token =
    JSON.parse(localStorage?.getItem("access_token") as string) || null;

  config.headers["Authorization"] = `Bearer ${token.state.token}`;

  // const res = client.get('/auth/jwt/refresh')
  // console.log(res)
  return config;
});

// client.interceptors.response.use(undefined, err => {
//   const error = err.response;
//   // if error is 401
//   if (error.status === 401 && error.config &&
//   !error.config.__isRetryRequest) {
//   // request for a new token
//     localStorage.removeItem('access_token')
//   }

// });

const TanstackQueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackQueryClientProvider;
