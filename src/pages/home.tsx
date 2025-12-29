import { AnimatedButton } from "@/components/animated-button";
import { useThemeStore } from "@/store/theme-store";
import type { FC } from "react";

const Home: FC = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <>
      <h1>hello</h1>
      <AnimatedButton
        onClick={() => {
          if (theme === "light") setTheme("dark");
          else setTheme("light");
        }}
      >
        {theme}
      </AnimatedButton>
    </>
  );
};

export default Home;
