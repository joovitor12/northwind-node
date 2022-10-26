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

import { RiStarSmileFill } from "react-icons/ri";
import { useDeleteProduct } from "../../configs";
import { ProductProps } from "../../types";

export const PopupInfosProduct = ({ product }: { product: ProductProps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteProductMutation, deleteProductLoading } = useDeleteProduct();

  const handleDeleteProduct = () => {
    deleteProductMutation({ id: product.productId ?? 0 });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Show infos</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg="brand.900" w="50%" h="70%">
          <ModalHeader color="brand.700">
            {product.productName} Infos
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
              <Icon as={RiStarSmileFill} color="brand.700" fontSize="4xl" />
              <Text>Product Name: {product.productName || "No data"}</Text>
              <Text>
                Quantity Per Unit: {product.quantityPerUnit || "No data"}
              </Text>
              <Text>Reorder Level: {product.reorderLevel || "No data"}</Text>
              <Text>Unit Price: {product.unitPrice || "No data"} $</Text>
              <Text>Units On Order: {product.unitsOnOrder || "No data"}</Text>
              <Text>Units in Stock: {product.unitsInStock || "No data"}</Text>
              <Text>Discontinued: {product.discontinued || "No data"}</Text>
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
              isLoading={deleteProductLoading}
              onClick={handleDeleteProduct}
            >
              Delete {product.productName}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
