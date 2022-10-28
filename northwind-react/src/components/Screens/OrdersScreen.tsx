import { Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useGetOrders } from "../../configs";
import { Navbar } from "../Navbar";
import { OrderCard } from "../OrderCard";

export const OrdersScreen = () => {
  const { data: orders, refetch: refetchOrders } = useGetOrders();

  useEffect(() => {
    window.scrollTo(0, 0);
    refetchOrders();
  }, [orders]);

  return (
    <Flex
      bg="brand.900"
      minW="100%"
      minH="100vh"
      h="auto"
      direction="column"
      align="center"
      overflowX="hidden"
    >
      <Navbar />
      <Heading color="brand.700" m="1rem">
        Orders
      </Heading>
      <Flex
        minH="100%"
        h="auto"
        maxW="90%"
        justify="center"
        align="center"
        flexWrap="wrap"
      >
        {orders?.map((order) => (
          <OrderCard order={order} key={order.orderId} />
        ))}
      </Flex>
    </Flex>
  );
};
