import { ChakraProps } from "@chakra-ui/react";
import { UseFormRegisterReturn, FieldErrors } from "react-hook-form";

export type ProductProps = {
  discontinued: string;
  productId?: number;
  productName: string;
  categoryId?: string | number | null;
  supplierId?: string | number | null;
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

export type OrderProps = {
  orderId?: number | string;
  custId?: number | string;
  employeeId?: string | null | number;
  quantity?: number | string;
  orderDate?: number;
  date?: string | Date | null;
  requiredDate?: string | Date | null;
  orderRequiredDate?: string | Date | null;
  shippedDate?: string | Date | null;
  product?: ProductProps;
  products?: ProductProps[];
  shipperId?: {
    shipperId: number;
    companyName: string;
    phone: string;
  } | number;
  ship?: {
    shipName: string,
    shipAddress: string,
    shipCity: string,
    shipRegion: string,
    shipPostalCode: string,
    shipCountry: string,
  },
  freight?: number | string;
  shipName?: string | null;
  shipAddress?: string;
  shipCity?: string;
  shipRegion?: string;
  shipPostalCode?: string;
  shipCountry?: string;
  discount?: number;
  unitPrice? : string | number;
};
