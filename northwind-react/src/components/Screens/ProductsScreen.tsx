import { Flex } from "@chakra-ui/react";
import { useGetProducts } from "../../configs";
import { Navbar } from "../Navbar";
import { ProductCard } from "../ProductCard";

export const ProductScreen = () => {
  const { data: products } = useGetProducts();

  console.log(products);

  return (
    <Flex
      bg="brand.900"
      w="100vw"
      minH="100vh"
      h="auto"
      direction="column"
      align="center"
      overflowX="hidden"
    >
      <Navbar />
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
