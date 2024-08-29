"use client";

import { useAdminUsers } from "@/api/admin/queries";
import Transactions from "@/components/admin/Transactions";
import React from "react";

const Page = () => {
  return <Transactions />;
};

export default Page;
