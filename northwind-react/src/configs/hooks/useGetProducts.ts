import { useQuery, UseQueryOptions } from "react-query";
import { ProductProps } from "../../types";
import { getProducts } from "../requests";

type UseGetProductOptions = {
  config?: UseQueryOptions<void, unknown, ProductProps[], "products">;
};

export const useGetProducts = ({ config }: UseGetProductOptions = {}) => {
  return useQuery("products", getProducts, config);
};
