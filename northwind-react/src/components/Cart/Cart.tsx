import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsCart4 } from "react-icons/bs";

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Button
        ref={btnRef}
        bg="brand.700"
        onClick={onOpen}
        color="brand.800"
        _hover={{ color: "white", backgroundColor: "brand.900" }}
        _active={{}}
      >
        <Icon as={BsCart4} fontSize="xl" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.800">
          <DrawerCloseButton color="brand.700" />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
