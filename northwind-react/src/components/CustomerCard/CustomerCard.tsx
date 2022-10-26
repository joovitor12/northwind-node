import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { CustomerProps } from "../../types";
import { PopupInfosCustomer } from "../Popup";

export const CustomerCard = ({ customer }: { customer: CustomerProps }) => {
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
      p="1rem"
    >
      <Icon as={BsFillPersonFill} color="brand.700" fontSize="4xl" />

      <Text
        color="white"
        fontWeight="bold"
        fontSize="xl"
        textAlign="center"
        noOfLines={2}
      >
        Company Name: {customer.companyName}
      </Text>
      <Text
        fontWeight="bold"
        fontSize="md"
        ml="0.5rem"
        textAlign="center"
        color="brand.700"
        noOfLines={2}
      >
        Contact Name: {customer.contactName}
      </Text>
      <Text
        fontWeight="bold"
        fontSize="md"
        ml="0.5rem"
        textAlign="center"
        color="brand.700"
        noOfLines={2}
      >
        Address: {customer.address}
      </Text>

      <PopupInfosCustomer customer={customer} />
    </Flex>
  );
};
