import { OrderDTO, OrderStatusDTO, OrderItemDTO } from '../dtos/order.dto';

export interface Order {
  id: string;
  status: OrderStatus;
  items: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderStatus {
  value: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export function mapOrderDtoToOrder(dto: OrderDTO): Order {
  return {
    id: dto.id,
    status: { value: dto.status.value },
    items: dto.items.map((item: OrderItemDTO) => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price
    })),
    createdAt: new Date(dto.createdAt),
    updatedAt: new Date(dto.updatedAt)
  };
}

export type { OrderDTO, OrderStatusDTO, OrderItemDTO } from '../dtos/order.dto';