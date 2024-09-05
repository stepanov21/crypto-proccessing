import { create } from "zustand";
import { persist } from "zustand/middleware";

interface themeState {
  dark: boolean;
  changeTheme: () => void;
}

interface FilterTimeState {
  days: "1d" | "7d" | "30d";
  changeDays: (days: "1d" | "7d" | "30d") => void;
}

interface tokenState {
  token: string | null;
  setToken: (e: string) => void;
  deleteToken: () => void;
}

const getInitialToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token") || null;
    return token;
  }
};

export const useTheme = create<themeState>()(
  persist(
    (set, get) => ({
      dark: false,
      changeTheme: () => set((state) => ({ dark: !state.dark })),
    }),
    {
      name: "theme-storage",
    },
  ),
);

export const useToken = create<tokenState>()(
  persist(
    (set, get) => ({
      token: getInitialToken() || null,
      setToken: (e: string) => set((state) => ({ token: e })),
      deleteToken: () => set((state) => ({ token: null })),
    }),
    {
      name: "access_token",
    },
  ),
);

export const useFilterTime = create<FilterTimeState>()((set, get) => ({
  days: "30d",
  changeDays: (e) => set((state) => ({ days: e })),
}));
