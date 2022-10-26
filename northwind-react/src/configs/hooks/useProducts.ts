import { useToast } from "@chakra-ui/react";
import {
  UseMutateAsyncFunction,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "react-query";

import { ProductProps } from "../../types";
import { getProducts, postProduct } from "../requests";

type UseCreateProductProps = {
  createProductMutation: UseMutateAsyncFunction<
    void,
    unknown,
    ProductProps,
    unknown
  >;
  createProductLoading: boolean;
};

type UseGetProductOptions = {
  config?: UseQueryOptions<void, unknown, ProductProps[], "products">;
};

export const useCreateProduct = (): UseCreateProductProps => {
  const toast = useToast();
  const {
    mutateAsync: createProductMutation,
    isLoading: createProductLoading,
  } = useMutation({
    mutationFn: postProduct,
    onError: () => {
      toast({
        title: "There was an error registering the product.",
        duration: 3000,
        isClosable: true,
        status: "error",
      });
    },
    onSuccess: () => {
      toast({
        title: "Product successfully created!",
        duration: 3000,
        isClosable: true,
        status: "success",
      });
    },
  });

  return { createProductMutation, createProductLoading };
};

export const useGetProducts = ({ config }: UseGetProductOptions = {}) => {
  return useQuery("products", getProducts, config);
};
