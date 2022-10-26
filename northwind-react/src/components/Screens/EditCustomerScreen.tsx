import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { CustomerProps } from "../../types";
import { Navbar } from "../Navbar";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm } from "../Input";
import { CreateCustomerSchema } from "../../assets";
import { useEditCustomer, useGetCustomer } from "../../configs";
import { useEffect } from "react";

export const EditCustomerScreen = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<CustomerProps>({
    mode: "onSubmit",
    resolver: yupResolver(CreateCustomerSchema),
  });

  const { id } = useParams();

  const { data: customer } = useGetCustomer({ id: Number(id) });
  const { editCustomerMutation, editCustomerLoading } = useEditCustomer();

  const navigate = useNavigate();

  const submitProductForm = async (data: CustomerProps) => {
    await editCustomerMutation({
      id: Number(id)|| 0,
      data: {
        companyName: data.companyName,
        contactName: data.contactName,
        contactTitle: data.contactTitle,
        address: data.address,
        city: data.city,
        region: data.region,
        postalCode: data.postalCode,
        country: data.country,
        phone: data.phone,
        fax: data.fax,
      },
    });
    navigate("/customers");
  };

  useEffect(() => {
    reset({
      companyName: customer?.companyName,
      contactName: customer?.contactName,
      contactTitle: customer?.contactTitle,
      address: customer?.address,
      city: customer?.city,
      region: customer?.region,
      postalCode: customer?.postalCode,
      country: customer?.country,
      phone: customer?.phone,
      fax: customer?.fax,
    });
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
        Edit {customer?.companyName}
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
          register={register("companyName")}
          error={errors.companyName}
          placeholder="Company Name"
          type="text"
          color="white"
        />
        <InputForm
          register={register("contactName")}
          error={errors.contactName}
          placeholder="Contact Name"
          type="text"
          color="white"
        />
        <InputForm
          register={register("contactTitle")}
          error={errors.contactTitle}
          placeholder="Contact Title"
          type="text"
          color="white"
        />
        <InputForm
          register={register("address")}
          error={errors.address}
          placeholder="Address"
          type="text"
          color="white"
        />
        <InputForm
          register={register("city")}
          error={errors.city}
          placeholder="City"
          type="text"
          color="white"
        />
        <InputForm
          register={register("region")}
          error={errors.region}
          placeholder="Region"
          type="text"
          color="white"
        />
        <InputForm
          register={register("postalCode")}
          error={errors.postalCode}
          placeholder="Postal Code"
          type="text"
          color="white"
        />
        <InputForm
          register={register("country")}
          error={errors.country}
          placeholder="Country"
          type="text"
          color="white"
        />
        <InputForm
          register={register("phone")}
          error={errors.phone}
          placeholder="Phone"
          type="text"
          color="white"
        />
        <InputForm
          register={register("fax")}
          error={errors.fax}
          placeholder="Fax"
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
          isLoading={editCustomerLoading}
          _active={{}}
          _hover={{}}
          _focus={{}}
        >
          Edit {customer?.companyName}
        </Button>
      </Flex>
    </Flex>
  );
};
