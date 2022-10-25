export type ProductProps = {
  discontinued: string;
  productId: number;
  productName: string;
  quantityPerUnit: string | number | null;
  reorderLevel: string | number | null;
  unitPrice: string;
  unitsInStock: string | number | null;
  unitsOnOrder: string | number | null;
};
