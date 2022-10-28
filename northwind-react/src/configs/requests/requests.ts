import { CustomerProps, ProductProps } from "../../types";
import { api } from "../database";

const baseUrlOrders = "/order";

export const postProduct = async (data: ProductProps): Promise<void> => {
  const response = await api.post("/product", data);
  return response.data;
};

export const getProducts = async (): Promise<void> => {
  const response = await api.get("/product");
  return response.data;
};

export const postCustomer = async (data: CustomerProps): Promise<void> => {
  const response = await api.post("/customer", data);
  return response.data;
};

export const getCustomers = async (): Promise<void> => {
  const response = await api.get("/customer");
  return response.data;
};

export const getCustomer = async ({ id }: { id: number }): Promise<void> => {
  const response = await api.get(`/customer/${id}`);
  return response.data;
};

export const editCustomer = async ({
  id,
  data,
}: {
  id: number;
  data: CustomerProps;
}): Promise<void> => {
  const response = await api.put(`/customer/${id}`, data);
  return response.data;
};

export const deleteCustomer = async ({ id }: { id: number }): Promise<void> => {
  const response = await api.delete(`/customer/${id}`);
  return response.data;
};

export const postOrder = async (data: any): Promise<void> => {
  const response = await api.post(baseUrlOrders, data);
  return response.data;
};

export const getOrders = async (): Promise<void> => {
  const response = await api.get(baseUrlOrders);
  return response.data;
};

export const getOrderDetail = async ({ id }: { id: number }): Promise<void> => {
  const response = await api.get(
    `${baseUrlOrders}/order-details-customer/${id}`
  );
  return response.data;
};

export const getOrderReport = async ({ shipperId }: { shipperId: number }): Promise<void> => {
  const response = await api.get(
    `${baseUrlOrders}/relatory/${shipperId}`
  );
  return response.data;
};