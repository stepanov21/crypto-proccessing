"use client";

import { useUserRole } from "@/api/admin/queries";
import React, { ReactNode, useEffect } from "react";

const UserRoleProvider = ({ children }: { children: ReactNode }) => {
  const { data, isPending } = useUserRole();

  if(isPending) return <div className="loader"></div>

  if(data?.user === 'user') return <div>У вас нет доступа к этой странице</div>

  return <div>{children}</div>;
};

export default UserRoleProvider;
