import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddProductPage, CustomersPage, ProductsPage } from "../pages";
import { AddCustomerPage } from "../pages/AddCustomerPage";

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/add-customer" element={<AddCustomerPage />} />
      </Routes>
    </BrowserRouter>
  );
};
