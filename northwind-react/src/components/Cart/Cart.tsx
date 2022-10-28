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
import { useNavigate } from "react-router-dom";

import { useCart, useCreateOrder, useGetCustomers } from "../../configs";

import { ProductProps } from "../../types";
import { CartProduct } from "../CartProduct";

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

  const { contentCart, setContentCart } = useCart();
  const { data: customers } = useGetCustomers();
  const { createOrderMutation, createOrderLoading } = useCreateOrder();

  const [customer, setCustomer] = useState("");

  const handleFinishOrder = () => {
    createOrderMutation({
      custId: customer,
      products: contentCart,
      date: new Date().toISOString(),
      orderRequiredDate: new Date().toISOString(),
      shipperId: 1,
      ship: {
        shipName: "Davi",
        shipAddress: "Madalena",
        shipCity: "Recife",
        shipRegion: "PE",
        shipPostalCode: "50203405 ",
        shipCountry: "Brasil",
      },
      shippedDate: null,
      employeeId: 0,
      freight: 20.5,
      discount: 0.0,
    });
    setContentCart([]);
    navigate("/orders");
  };

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
                <option value={customer.custId} key={customer.custId}>
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
            <Button
              bg="brand.700"
              color="brand.900"
              _hover={{}}
              onClick={handleFinishOrder}
              isLoading={createOrderLoading}
            >
              Finish order
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
