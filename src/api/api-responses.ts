import { Product } from "./product";

export type ApiResponse = {
  total: number;
  skip: number;
  limit: number;
  products: Product[];
};
