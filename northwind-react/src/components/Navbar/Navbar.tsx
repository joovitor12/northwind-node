import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { ImDatabase } from "react-icons/im";

import { Cart } from "../Cart";

export const Navbar = () => {
  return (
    <Flex
      bg="brand.800"
      w="100%"
      h="4rem"
      justify="space-between"
      align="center"
      p="0 2rem"
    >
      <Flex color="brand.700" w="15rem" justify="space-between" align="center">
        <Icon as={ImDatabase} fontSize="4xl" />
        <Link fontWeight="bold" _hover={{}}>Products</Link>
        <Link fontWeight="bold" _hover={{}}>Orders</Link>
      </Flex>
      <Cart />
    </Flex>
  );
};
