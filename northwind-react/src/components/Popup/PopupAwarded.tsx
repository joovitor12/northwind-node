import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export const PopupAwarded = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent bg="brand.900" w="50%" minH="30%" h="auto">
        <ModalHeader color="brand.700">Enjoy the promotion!</ModalHeader>
        <ModalCloseButton color="brand.700" />
        <ModalBody display="flex" justifyContent="center" alignItems="center">
          <Text textAlign="center" color="brand.700" fontSize="xl">
            For every two purchases, the second purchase will be free shipping!
            &#x1F525;
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
