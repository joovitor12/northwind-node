import * as yup from "yup";
export const CreateProductSchema = yup.object().shape({
  discontinued: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .max(1, "Must be exactly 1 digit")
    .required("Empty label!"),
  productName: yup.string().required("Empty label!"),
  unitPrice: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Empty label!"),
});

export const CreateCustomerSchema = yup.object().shape({
  companyName: yup.string().required("Empty label!"),
  contactName: yup.string().required("Empty label!"),
  contactTitle: yup.string().required("Empty label!"),
  address: yup.string().required("Empty label!"),
  city: yup.string().required("Empty label!"),
  region: yup.string().required("Empty label!"),
  postalCode: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Empty label!"),
  country: yup.string().required("Empty label!"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Empty label!"),
  fax: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Empty label!"),
});
