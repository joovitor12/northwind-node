import { useContext } from "react";
import { CartsContext } from "../context";

export const useCart = () => useContext(CartsContext);
