import type { FC } from "react";
import useCartStore from "../store/cart-store";

const Home: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const add = useCartStore(s => s.addProduct);

  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default Home;
