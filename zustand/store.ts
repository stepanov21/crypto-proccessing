import { create } from "zustand";
import { persist } from "zustand/middleware";

interface themeState {
  dark: boolean;
  changeTheme: () => void;
}

interface tokenState {
  token: string | null;
  setToken: (e: string) => void;
  deleteToken: () => void;
}

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
      token: null,
      setToken: (e: string) => set((state) => ({ token: e })),
      deleteToken: () => set((state) => ({ token: null })),
    }),
    {
      name: "access_token",
    },
  ),
);
