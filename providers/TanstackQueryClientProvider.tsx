"use client";

import select from "@/redux/auth/selectors";
import { RootState } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

const queryClient = new QueryClient();

const TanstackQueryClientProvider = ({ children }: { children: ReactNode }) => {
  const { token } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackQueryClientProvider;
