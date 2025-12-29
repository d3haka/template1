import type { FC } from "react";
import { Spinner } from "./ui/spinner";

export const Loading: FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Spinner className="size-8" />
    </div>
  );
};
