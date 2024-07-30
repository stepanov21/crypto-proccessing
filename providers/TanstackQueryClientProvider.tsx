"use client";

import select from "@/redux/auth/selectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useEffect } from "react";

const queryClient = new QueryClient();

const TanstackQueryClientProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
  }, []);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackQueryClientProvider;
