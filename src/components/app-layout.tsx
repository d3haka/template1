import type { FC } from "react";
import { Link, Outlet } from "react-router";
import { AnimatedPage } from "./animated-page";

export const AppLayout: FC = () => {
  return (
    <>
      <div className="h-screen w-screen">
        {/* <Header /> */}

        <Link to="/" className="border p-3">
          home
        </Link>
        <Link to="/about" className="border p-3">
          about
        </Link>
        <AnimatedPage>
          <Outlet />
        </AnimatedPage>
        {/* <Footer /> */}
      </div>
    </>
  );
};
