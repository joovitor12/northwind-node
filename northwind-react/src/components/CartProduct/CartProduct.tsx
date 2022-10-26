import { Flex, Icon, Text } from "@chakra-ui/react";
import { RiStarSmileFill } from "react-icons/ri";
import { ProductProps } from "../../types";

export const CartProduct = ({ product }: { product: ProductProps }) => {
  return (
    <Flex
      bg="brand.700"
      w="100%"
      h="5rem"
      borderRadius="1rem"
      align="center"
      justify="space-evenly"
      m="0.5rem 0"
    >
      <Icon as={RiStarSmileFill} color="brand.900" fontSize="4xl" />
      <Flex direction="column">
        <Text fontWeight="bold" color="brand.900">
          {product.productName}
        </Text>
        <Text
          color="brand.600"
          fontWeight="bold"
          bg="brand.900"
          w="5rem"
          textAlign="center"
          borderRadius="0.5rem"
        >
          {product.unitPrice}$
        </Text>
      </Flex>
    </Flex>
  );
};
