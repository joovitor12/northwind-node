import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { ProductProps } from "../../types";

import { RiStarSmileFill } from "react-icons/ri";
import { SiCashapp } from "react-icons/si";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useCart } from "../../configs";
import { PopupInfosProduct } from "../Popup";

export const ProductCard = ({ product }: { product: ProductProps }) => {
  const { contentCart, setContentCart } = useCart();

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
    >
      <Icon as={RiStarSmileFill} color="brand.700" fontSize="4xl" />
      <Text color="white" fontWeight="bold" fontSize="2xl">
        {product.productName}
      </Text>
      <Flex align="center" color="brand.600">
        <Icon as={SiCashapp} fontSize="xl" />
        <Text fontWeight="bold" fontSize="md" ml="0.5rem">
          Price: {product.unitPrice}
        </Text>
      </Flex>
      <Flex justify="center" align="center" color="brand.700">
        <Button
          borderRadius="3rem"
          fontSize="md"
          px="0"
          bg="none"
          _focus={{}}
          _hover={{ color: "brand.600" }}
          _active={{}}
          letterSpacing={0.8}
          onClick={() => setContentCart([...contentCart, product])}
          rightIcon={
            <Icon as={BsFillPlusCircleFill} color="brand.400" fontSize="2xl" />
          }
        >
          <Text>Add to cart</Text>
        </Button>
      </Flex>
      <PopupInfosProduct product={product} />
    </Flex>
  );
};
