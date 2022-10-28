import {
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsFillBasket3Fill } from "react-icons/bs";

import { useGetOrdersReport } from "../../configs";
import { InputForm } from "../Input";

export const PopupReportsOrder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [shipperId, setShipperId] = useState(0);

  const { data: orderReport } = useGetOrdersReport({ shipperId });
  return (
    <>
      <Button onClick={onOpen}>Consult the shipper report</Button>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent bg="brand.900" w="50%" minH="30%" h="auto">
          <ModalHeader color="brand.700">Shipper Report</ModalHeader>
          <ModalCloseButton color="brand.700" />
          <ModalBody display="flex" justifyContent="center">
            <Flex
              direction="column"
              color="white"
              justify="space-evenly"
              align="center"
              fontWeight="bold"
              h="100%"
              p="2rem"
            >
              <Icon as={BsFillBasket3Fill} color="brand.700" fontSize="4xl" />
              <InputForm
                placeholder="Shipper ID"
                type="text"
                color="white"
                w="80%"
                onChange={(e: any) => setShipperId(e.target.value)}
              />
              <Flex direction="column" m="1rem" textAlign="center">
                {orderReport && (
                  <>
                    <Text>Shipper Sells: {orderReport[0].shipperSells}</Text>
                    <Text>
                      Company Name: {orderReport[0].companyName || "No data"}
                    </Text>
                  </>
                )}
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
