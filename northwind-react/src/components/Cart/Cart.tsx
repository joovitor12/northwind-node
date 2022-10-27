import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useCart, useGetCustomers } from "../../configs";
import { ProductProps } from "../../types";
import { CartProduct } from "../CartProduct";

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const { contentCart, setContentCart } = useCart();
  const { data: customers } = useGetCustomers();

  const [customer, setCustomer] = useState("");

  return (
    <Flex>
      {contentCart.length > 0 && (
        <Flex
          w="1.3rem"
          h="1.3rem"
          bg="red"
          position="relative"
          borderRadius="50%"
          left="0.6rem"
          zIndex="1"
          justify="center"
        >
          <Text fontWeight="bold" color="white">
            {contentCart.length}
          </Text>
        </Flex>
      )}
      <Button
        ref={btnRef}
        bg="brand.700"
        onClick={onOpen}
        color="brand.800"
        _hover={{ color: "white", backgroundColor: "brand.900" }}
        _active={{}}
      >
        <Icon as={BsCart4} fontSize="xl" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.800">
          <DrawerCloseButton color="brand.700" />
          <DrawerHeader>
            <Text color="brand.700">Your Cart</Text>
            <Select
              bg="brand.700"
              mt="1rem"
              onChange={(e) => setCustomer(e.target.value)}
            >
              <option selected hidden disabled value="">
                Select the customer
              </option>
              {customers?.map((customer) => (
                <option value={customer.companyName} key={customer.custId}>
                  {customer.companyName}
                </option>
              ))}
            </Select>
          </DrawerHeader>

          <DrawerBody>
            <Flex minH="100%" w="100%" p="0.5rem" direction="column">
              {contentCart.map((product: ProductProps) => (
                <CartProduct product={product} key={product.productId} />
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button
              bg="red"
              color="white"
              _hover={{}}
              mr={3}
              onClick={() => {
                setContentCart([]);
                onClose();
              }}
            >
              Clear Cart
            </Button>
            <Button bg="brand.700" color="brand.900" _hover={{}}>
              Finish order
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
