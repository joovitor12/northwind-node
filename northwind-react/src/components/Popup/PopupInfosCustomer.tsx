import {
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { useDeleteCustomer } from "../../configs";
import { CustomerProps } from "../../types";

export const PopupInfosCustomer = ({
  customer,
}: {
  customer: CustomerProps;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteCustomerMutation, deleteCustomerLoading } = useDeleteCustomer();

  const handleDeleteCustomer = () => {
    deleteCustomerMutation({ id: customer.custId ?? 0 });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Show infos</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg="brand.900" w="50%" h="70%">
          <ModalHeader color="brand.700">
            {customer.companyName} Infos
          </ModalHeader>
          <ModalCloseButton color="brand.700" />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Flex
              direction="column"
              color="white"
              justify="space-evenly"
              align="center"
              fontWeight="bold"
              h="90%"
            >
              <Icon as={BsFillPersonFill} color="brand.700" fontSize="4xl" />
              <Text>Company Name: {customer.companyName || "No data"}</Text>
              <Text>Contact Name: {customer.contactName || "No data"}</Text>
              <Text>Contact Title: {customer.contactTitle || "No data"}</Text>
              <Text>Address: {customer.address || "No data"}</Text>
              <Text>City: {customer.city || "No data"}</Text>
              <Text>Country{customer.country || "No data"}</Text>
              <Text>Region: {customer.region || "No data"}</Text>
              <Text>Phone: {customer.phone || "No data"}</Text>
              <Text>Fax: {customer.fax || "No data"}</Text>
            </Flex>
          </ModalBody>
          <ModalFooter
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              bg="red"
              color="white"
              _hover={{}}
              _active={{}}
              _focus={{}}
              isLoading={deleteCustomerLoading}
              onClick={handleDeleteCustomer}
            >
              Delete {customer.companyName}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
