import { createContext, useState } from "react";
import { ProductProps } from "../../types";

export const CartsContext = createContext<any>([]);

export const CartProvider = ({ children }: any) => {
  const [contentCart, setContentCart] = useState<ProductProps[]>([]);

  return (
    <CartsContext.Provider value={{ contentCart, setContentCart }}>
      {children}
    </CartsContext.Provider>
  );
};
