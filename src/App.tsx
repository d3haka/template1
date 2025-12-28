import { lazy, Suspense } from "react";
import { AppLayout } from "./components/app-layout";
import "./styles.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryProvider } from "./components/query-provider.tsx";

const Home = lazy(() => import("./pages/home.tsx"));
const About = lazy(() => import("./pages/about.tsx"));

function App() {
  return (
    <>
      <QueryProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Suspense
                fallback={
                  <div className="flex h-full w-full items-center justify-center">
                    loading...
                  </div>
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Navigate to="/" />} />
              </Suspense>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryProvider>
    </>
  );
}

export default App;
