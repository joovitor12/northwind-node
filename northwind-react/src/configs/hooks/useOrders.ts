import { useToast } from "@chakra-ui/react";
import {
  UseMutateAsyncFunction,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "react-query";
import { OrderProps } from "../../types";
import { getOrderDetail, getOrderReport, getOrders, postOrder } from "../requests";

type UseCreateOrderProps = {
  createOrderMutation: UseMutateAsyncFunction<void, unknown, OrderProps, unknown>;
  createOrderLoading: boolean;
};

type UseGetOrdersProps = {
  config?: UseQueryOptions<void, unknown, OrderProps[], "orders">;
};

type UseGetOrderDetailsProps = {
  config?: UseQueryOptions<void, unknown, OrderProps[], "order-details">;
  id: number;
};

type UseGetOrderReportProps = {
  config?: UseQueryOptions<void, unknown, OrderProps[], any>;
  shipperId: number;
};

export const useCreateOrder = (): UseCreateOrderProps => {
  const toast = useToast();
  const { mutateAsync: createOrderMutation, isLoading: createOrderLoading } =
    useMutation({
      mutationFn: postOrder,
      onError: () => {
        toast({
          title: "There was an error registering the order.",
          duration: 3000,
          isClosable: true,
          status: "error",
        });
      },
      onSuccess: () => {
        toast({
          title: "Order successfully created!",
          duration: 3000,
          isClosable: true,
          status: "success",
        });
      },
    });

  return { createOrderMutation, createOrderLoading };
};

export const useGetOrders = ({ config }: UseGetOrdersProps = {}) => {
  return useQuery("orders", getOrders, config);
};

export const useGetOrderDetails = ({ config, id }: UseGetOrderDetailsProps) => {
  return useQuery("order-details", () => getOrderDetail({ id }), config);
};

export const useGetOrdersReport = ({ config, shipperId }: UseGetOrderReportProps) => {
  return useQuery(["order-reports", shipperId], () => getOrderReport({ shipperId }), config);
};