import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const useToken = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return {
    config,
  };
};

export default useToken;
