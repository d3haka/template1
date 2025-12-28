import { type FC } from "react";
import { Outlet } from "react-router";
import { AnimatedPage } from "./animated-page";
import { Header } from "@/components/header";

export const AppLayout: FC = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <Header />

        <AnimatedPage>
          <Outlet />
        </AnimatedPage>

        {/* <Footer /> */}
      </div>
    </>
  );
};
