import type { FC } from "react";
import { Link } from "react-router";

export const Header: FC = () => {
  return (
    <>
      <header className="h-28 w-full border">
        <nav>
          <Link to="/" className="m-3 border p-3">
            home
          </Link>
          <Link to="/about" className="m-3 border p-3">
            about
          </Link>
        </nav>
      </header>
    </>
  );
};
