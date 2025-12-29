import { useThemeStore } from "@/store/theme-store";
import { useLayoutEffect } from "react";

export function useInitialTheme() {
  const theme = useThemeStore(t => t.theme);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
