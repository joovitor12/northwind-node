import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsFillBasket3Fill } from "react-icons/bs";
import { OrderProps } from "../../types";
import { PopupInfosOrder } from "../Popup";

export const OrderCard = ({ order }: { order: OrderProps }) => {
  return (
    <Flex
      bg="brand.800"
      w="15rem"
      h="18rem"
      m="1.5rem"
      justify="space-evenly"
      align="center"
      direction="column"
      borderRadius="1rem"
      boxShadow="0px 0px 10px 1px #fff"
      p="1rem"
    >
      <Icon as={BsFillBasket3Fill} color="brand.700" fontSize="4xl" />

      <Text
        color="white"
        fontWeight="bold"
        fontSize="xl"
        textAlign="center"
        noOfLines={2}
      >
        Order Ship ID: {order.custId}
      </Text>
      <Text
        fontWeight="bold"
        fontSize="md"
        ml="0.5rem"
        textAlign="center"
        color="brand.700"
        noOfLines={2}
      >
        Order Ship City: {order.shipCity}
      </Text>
      <Text
        fontWeight="bold"
        fontSize="md"
        ml="0.5rem"
        textAlign="center"
        color="brand.700"
        noOfLines={2}
      >
        Order Ship Freight:{" "}
        {order.freight === "0.00" ? <Text color="green">Free Freight!</Text> : order.freight}
      </Text>

      <PopupInfosOrder orderId={order.orderId} key={order.orderId} />
    </Flex>
  );
};
