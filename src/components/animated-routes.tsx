import { AnimatePresence } from "motion/react";
import { lazy, type FC } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { AppLayout } from "./app-layout.tsx";

const Home = lazy(() => import("../pages/home.tsx"));
const About = lazy(() => import("../pages/about.tsx"));

export const AnimatedRoutes: FC = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};
