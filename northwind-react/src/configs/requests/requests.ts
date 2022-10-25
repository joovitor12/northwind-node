import { api } from "../database";

export const getProducts = async (): Promise<void> => {
  const response = await api.get("/product");
  return response.data;
};
