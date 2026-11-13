import { Controller, Get, Param, NotFoundException, HttpCode, HttpStatus } from '@nestjs/common';
import { OrderService } from '../../application/services/order.service';
import { OrderDTO } from '../../domain/entities/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getOrders(): Promise<OrderDTO[]> {
    const orders = await this.orderService.getOrders();
    return orders;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getOrderById(@Param('id') id: string): Promise<OrderDTO> {
    const order = await this.orderService.getOrderById(id);
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }
    return order;
  }
}