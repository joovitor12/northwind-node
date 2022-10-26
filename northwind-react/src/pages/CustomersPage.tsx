import { Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { Navbar } from "../components";
import { CustomerCard } from "../components";
import { useGetCustomers } from "../configs";

export const CustomersPage = () => {
  const { data: customers, refetch: customersRefetch } = useGetCustomers();

  useEffect(() => {
    customersRefetch();
  }, [customersRefetch]);

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
        Customers
      </Heading>
      <Flex
        minH="100%"
        h="auto"
        maxW="90%"
        justify="center"
        align="center"
        flexWrap="wrap"
      >
        {customers?.map((customer) => (
          <CustomerCard customer={customer} key={customer.custId} />
        ))}
      </Flex>
    </Flex>
  );
};
