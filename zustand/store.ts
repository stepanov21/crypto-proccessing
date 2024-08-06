import { create } from "zustand";
import { persist } from "zustand/middleware";

interface themeState {
  dark: boolean;
  changeTheme: () => void;
}

export const useTheme = create<themeState>()(
  persist((set, get) => ({
    dark: JSON.parse(localStorage.getItem('theme-storage') as string).dark || false,
    changeTheme: () => set((state) => ({ dark: !state.dark })),
  }), {
    name: 'theme-storage'
  }),
);
