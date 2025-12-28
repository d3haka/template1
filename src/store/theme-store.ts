import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    set => ({
      theme: "light",
      setTheme: theme => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        set({ theme });
      },
    }),
    {
      name: "theme",
    },
  ),
);
