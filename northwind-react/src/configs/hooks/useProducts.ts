import { useToast } from "@chakra-ui/react";
import {
  UseMutateAsyncFunction,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "react-query";

import { ProductProps } from "../../types";
import { deleteProduct, getProducts, postProduct } from "../requests";

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

type UseDeleteProductProps = {
  deleteProductMutation: UseMutateAsyncFunction<
    void,
    unknown,
    { id: number } | any,
    unknown
  >;
  deleteProductLoading: boolean;
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

export const useDeleteProduct = (): UseDeleteProductProps => {
  const toast = useToast();
  const {
    mutateAsync: deleteProductMutation,
    isLoading: deleteProductLoading,
  } = useMutation({
    mutationFn: deleteProduct,
    onError: () => {
      toast({
        title: "There was an error on delete the product.",
        duration: 3000,
        isClosable: true,
        status: "error",
      });
    },
    onSuccess: () => {
      toast({
        title: "Product successfully deleted!",
        duration: 3000,
        isClosable: true,
        status: "success",
      });
    },
  });

  return { deleteProductMutation, deleteProductLoading };
};
