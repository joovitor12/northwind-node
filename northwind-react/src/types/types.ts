import { ChakraProps } from "@chakra-ui/react";
import { UseFormRegisterReturn, FieldErrors } from "react-hook-form";

export type ProductProps = {
  discontinued: string;
  productId?: number;
  productName: string;
  quantityPerUnit?: string | number | null;
  reorderLevel?: string | number | null;
  unitPrice: string;
  unitsInStock?: string | number | null;
  unitsOnOrder?: string | number | null;
};

export type CustomerProps = {
  custId?: number;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  fax: string;
};

export type InputFormProps = {
  register: UseFormRegisterReturn<string>;
  error?: FieldErrors | any;
  placeholder?: string;
  type: string;
} & ChakraProps;
