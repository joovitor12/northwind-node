import { Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";

import { useGetProducts } from "../../configs";

import { Navbar } from "../Navbar";
import { PopupAwarded } from "../Popup";
import { ProductCard } from "../ProductCard";

export const ProductScreen = () => {
  const { data: products, refetch: refetchProducts } = useGetProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
    refetchProducts();
  }, []);

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
        Products
      </Heading>
      <PopupAwarded />
      <Flex
        minH="100%"
        h="auto"
        maxW="90%"
        justify="center"
        align="center"
        flexWrap="wrap"
      >
        {products?.map((product) => (
          <ProductCard product={product} key={product.productId} />
        ))}
      </Flex>
    </Flex>
  );
};
