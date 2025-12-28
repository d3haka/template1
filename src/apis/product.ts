import type { Product } from "../types/product";
import { http } from "./http";

type ProductsData = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export function getProducts() {
  return http.get<ProductsData>("/products");
}
