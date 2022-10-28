import {
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
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
      <Flex color="brand.700" w="7rem" justify="space-between" align="center">
        <Icon as={ImDatabase} fontSize="4xl" />
        <Menu>
          <MenuButton as="button">Menu</MenuButton>
          <MenuList bg="brand.900" borderColor="brand.700">
            <MenuItem>
              <Link
                fontWeight="bold"
                _hover={{}}
                onClick={() => navigate("/add-product")}
              >
                Add Product
              </Link>
            </MenuItem>
            <MenuItem>
              <Link fontWeight="bold" _hover={{}} onClick={() => navigate("/")}>
                Products
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                fontWeight="bold"
                _hover={{}}
                onClick={() => navigate("/add-customer")}
              >
                Add Customer
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                fontWeight="bold"
                _hover={{}}
                onClick={() => navigate("/customers")}
              >
                Customers
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                fontWeight="bold"
                _hover={{}}
                onClick={() => navigate("/orders")}
              >
                Orders
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Cart />
    </Flex>
  );
};
