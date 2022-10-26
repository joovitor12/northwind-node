import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { ImDatabase } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import { Cart } from "../Cart";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Flex
      bg="brand.800"
      w="100%"
      h="4rem"
      justify="space-between"
      align="center"
      p="0 2rem"
    >
      <Flex color="brand.700" w="35rem" justify="space-between" align="center">
        <Icon as={ImDatabase} fontSize="4xl" />
        <Link
          fontWeight="bold"
          _hover={{}}
          onClick={() => navigate("/add-product")}
        >
          Add Product
        </Link>
        <Link fontWeight="bold" _hover={{}} onClick={() => navigate("/")}>
          Products
        </Link>
        <Link
          fontWeight="bold"
          _hover={{}}
          onClick={() => navigate("/add-customer")}
        >
          Add Customer
        </Link>
        <Link
          fontWeight="bold"
          _hover={{}}
          onClick={() => navigate("/customers")}
        >
          Customers
        </Link>
        <Link fontWeight="bold" _hover={{}} onClick={() => navigate("/")}>
          Orders
        </Link>
      </Flex>
      <Cart />
    </Flex>
  );
};
