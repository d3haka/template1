import { type FC } from "react";
import { Outlet } from "react-router";
import { Header } from "@/components/header";
import { AnimatedPage } from "./animated-page";

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
