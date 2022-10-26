import { Collapse, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import { InputFormProps } from "../../types";

export const InputForm: React.FC<InputFormProps> = ({
  register,
  error,
  placeholder,
  type,
  ...rest
}) => {
  return (
    <>
      <InputGroup
        {...rest}
        w="50%"
        mt="1rem"
        display="flex"
        alignItems="center"
      >
        <Input
          h="3.5rem"
          type={type}
          placeholder={placeholder}
          _active={{ borderColor: "brand.700" }}
          _hover={{ borderColor: "brand.700" }}
          _focus={{ borderColor: "brand.700" }}
          {...register}
        />
      </InputGroup>
      <Flex w="50%" align="left">
        <Collapse in={error} animateOpacity>
          <Text fontSize="sm" color="red" mt="0.2rem">
            {error?.message && error?.message}
          </Text>
        </Collapse>
      </Flex>
    </>
  );
};
