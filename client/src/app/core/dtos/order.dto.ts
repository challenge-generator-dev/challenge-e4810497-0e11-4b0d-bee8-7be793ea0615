export interface OrderDTO {
  id: string;
  status: OrderStatusDTO;
  items: OrderItemDTO[];
  createdAt: string;
  updatedAt: string;
}

export interface OrderStatusDTO {
  value: string;
}

export interface OrderItemDTO {
  productId: string;
  quantity: number;
  price: number;
}