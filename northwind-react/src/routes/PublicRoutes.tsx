import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsPage } from "../pages";

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
