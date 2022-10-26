import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ProductProps } from "../../types";
import { Navbar } from "../Navbar";
import { InputForm } from "../Input";
import { useCreateProduct } from "../../configs";
import { CreateProductSchema } from "../../assets";

export const AddProductScreen = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ProductProps>({
    mode: "onSubmit",
    resolver: yupResolver(CreateProductSchema),
  });
  const { createProductMutation, createProductLoading } = useCreateProduct();

  const navigate = useNavigate();

  const submitProductForm = async (data: ProductProps) => {
    await createProductMutation({
      productName: data.productName,
      quantityPerUnit: data.quantityPerUnit,
      unitPrice: data.unitPrice,
      unitsInStock: data.unitsInStock,
      unitsOnOrder: data.unitsOnOrder,
      reorderLevel: data.reorderLevel,
      discontinued: data.discontinued,
    });
    navigate("/");
  };

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
        ADD Product
      </Heading>
      <Flex
        w="50%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        as="form"
        onSubmit={handleSubmit(submitProductForm)}
      >
        <Text mt="2rem" fontWeight="bold" color="brand.900" fontSize="2xl">
          Login
        </Text>
        <InputForm
          register={register("discontinued")}
          error={errors.discontinued}
          placeholder="Discontinued"
          type="text"
          color="white"
        />
        <InputForm
          register={register("productName")}
          error={errors.productName}
          placeholder="Product Name"
          type="text"
          color="white"
        />
        <InputForm
          register={register("quantityPerUnit")}
          error={errors.quantityPerUnit}
          placeholder="Quantity Per Unit"
          type="text"
          color="white"
        />
        <InputForm
          register={register("unitPrice")}
          error={errors.unitPrice}
          placeholder="Unit Price"
          type="text"
          color="white"
        />
        <InputForm
          register={register("unitsInStock")}
          error={errors.unitsInStock}
          placeholder="Units in Stock"
          type="text"
          color="white"
        />
        <InputForm
          register={register("unitsOnOrder")}
          error={errors.unitsOnOrder}
          placeholder="Unit Price"
          type="text"
          color="white"
        />
        <InputForm
          register={register("reorderLevel")}
          error={errors.reorderLevel}
          placeholder="Unit Price"
          type="text"
          color="white"
        />
        <Button
          title="Login"
          type="submit"
          w="50%"
          m="2rem 0"
          color="white"
          bg="brand.700"
          h="3.5rem"
          isLoading={createProductLoading}
          _active={{}}
          _hover={{}}
          _focus={{}}
        >
          Add
        </Button>
      </Flex>
    </Flex>
  );
};
