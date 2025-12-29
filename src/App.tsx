import { Suspense } from "react";
import "./styles.css";
import { BrowserRouter } from "react-router";
import { QueryProvider } from "./components/query-provider.tsx";
import { AnimatedRoutes } from "./components/animated-routes.tsx";
import { Loading } from "./components/loading.tsx";
import { useInitialTheme } from "./hooks/useInitialTheme.ts";

function App() {
  useInitialTheme();

  return (
    <QueryProvider>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </Suspense>
    </QueryProvider>
  );
}

export default App;
