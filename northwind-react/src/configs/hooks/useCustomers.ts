import { useToast } from "@chakra-ui/react";
import {
  UseMutateAsyncFunction,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "react-query";

import { CustomerProps } from "../../types";
import {
  deleteCustomer,
  editCustomer,
  getCustomer,
  getCustomers,
  postCustomer,
} from "../requests";

type UseCreateCustomerProps = {
  createCustomerMutation: UseMutateAsyncFunction<
    void,
    unknown,
    CustomerProps,
    unknown
  >;
  createCustomerLoading: boolean;
};

type UseGetCustomersOptions = {
  config?: UseQueryOptions<void, unknown, CustomerProps[], "customers">;
};

type UseGetCustomerOptions = {
  config?: UseQueryOptions<any, unknown, CustomerProps, "customer">;
  id: number;
};

type UseEditCustomerProps = {
  editCustomerMutation: UseMutateAsyncFunction<
    void,
    unknown,
    { id: number; data: CustomerProps },
    unknown
  >;
  editCustomerLoading: boolean;
};

type UseDeleteCustomerProps = {
  deleteCustomerMutation: UseMutateAsyncFunction<
    void,
    unknown,
    { id: number } | any,
    unknown
  >;
  deleteCustomerLoading: boolean;
};

export const useCreateCustomer = (): UseCreateCustomerProps => {
  const toast = useToast();
  const {
    mutateAsync: createCustomerMutation,
    isLoading: createCustomerLoading,
  } = useMutation({
    mutationFn: postCustomer,
    onError: () => {
      toast({
        title: "There was an error registering the customer.",
        duration: 3000,
        isClosable: true,
        status: "error",
      });
    },
    onSuccess: () => {
      toast({
        title: "Customer successfully created!",
        duration: 3000,
        isClosable: true,
        status: "success",
      });
    },
  });

  return { createCustomerMutation, createCustomerLoading };
};

export const useGetCustomers = ({ config }: UseGetCustomersOptions = {}) => {
  return useQuery("customers", getCustomers, config);
};

export const useGetCustomer = ({ config, id }: UseGetCustomerOptions) => {
  return useQuery("customer", () => getCustomer({ id }), config);
};

export const useEditCustomer = (): UseEditCustomerProps => {
  const toast = useToast();
  const { mutateAsync: editCustomerMutation, isLoading: editCustomerLoading } =
    useMutation({
      mutationFn: editCustomer,
      onError: () => {
        toast({
          title: "There was an error on edit the customer.",
          duration: 3000,
          isClosable: true,
          status: "error",
        });
      },
      onSuccess: () => {
        toast({
          title: "Customer successfully edited!",
          duration: 3000,
          isClosable: true,
          status: "success",
        });
      },
    });

  return { editCustomerMutation, editCustomerLoading };
};

export const useDeleteCustomer = (): UseDeleteCustomerProps => {
  const toast = useToast();
  const {
    mutateAsync: deleteCustomerMutation,
    isLoading: deleteCustomerLoading,
  } = useMutation({
    mutationFn: deleteCustomer,
    onError: () => {
      toast({
        title: "There was an error on delete the customer.",
        duration: 3000,
        isClosable: true,
        status: "error",
      });
    },
    onSuccess: () => {
      toast({
        title: "Customer successfully deleted!",
        duration: 3000,
        isClosable: true,
        status: "success",
      });
    },
  });

  return { deleteCustomerMutation, deleteCustomerLoading };
};
