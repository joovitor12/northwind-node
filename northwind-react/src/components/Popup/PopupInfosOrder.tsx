import {
  Button,
  Divider,
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
import { BsFillBasket3Fill } from "react-icons/bs";
import { useGetOrderDetails } from "../../configs";
import { PopupReportsOrder } from "./PopupReportsOrder";

export const PopupInfosOrder = ({
  orderId,
}: {
  orderId: string | number | undefined;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: orderDetails } = useGetOrderDetails({ id: Number(orderId) });

  return (
    <>
      <Button onClick={onOpen}>Show infos</Button>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent bg="brand.900" w="50%" minH="80%" h="auto">
          <ModalHeader color="brand.700">Infos</ModalHeader>
          <ModalCloseButton color="brand.700" />
          <ModalBody display="flex" justifyContent="center">
            <Flex
              direction="column"
              color="white"
              justify="space-evenly"
              align="center"
              fontWeight="bold"
              h="90%"
            >
              <Icon as={BsFillBasket3Fill} color="brand.700" fontSize="4xl" />
              {orderDetails?.map((orderDetail) => (
                <>
                  <Divider m="2rem 0" />
                  <Text>
                    Product Name:{" "}
                    {orderDetail?.product?.productName || "No data"}
                  </Text>
                  <Text>
                    Units in Stock:{" "}
                    {orderDetail?.product?.unitsInStock || "No data"}
                  </Text>
                  <Text>
                    Unit Price: {orderDetail?.product?.unitPrice || "No data"}$
                  </Text>

                  <Text>Quantity: {orderDetail.quantity || "No data"}</Text>
                  <Text>Discount: {orderDetail.discount || "No data"}</Text>
                </>
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <PopupReportsOrder />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
