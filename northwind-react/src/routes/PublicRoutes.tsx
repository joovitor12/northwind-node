import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AddCustomerPage,
  AddProductPage,
  CustomersPage,
  EditCustomerPage,
  ProductsPage,
} from "../pages";

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/add-customer" element={<AddCustomerPage />} />
        <Route path="/edit-customer/:id" element={<EditCustomerPage />} />
      </Routes>
    </BrowserRouter>
  );
};
