import { Injectable } from '@nestjs/common';
import { OrderRepositoryPort } from '../../domain/ports/order.repository.port';
import { Order } from '../../domain/entities/order.entity';
import { OrderStatus } from '../../domain/entities/order-status.entity';
import { OrderItem } from '../../domain/entities/order-item.entity';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class OrderRepository implements OrderRepositoryPort {
  private readonly orders: Map<string, Order> = new Map();
  private readonly orderSubject: Subject<Order> = new Subject();

  constructor() {
    this.seedInitialData();
  }

  private seedInitialData(): void {
    const order1 = new Order(
      'order-1',
      new OrderStatus('PENDING'),
      [
        new OrderItem('product-1', 2, 10.99),
        new OrderItem('product-2', 1, 5.99)
      ]
    );

    const order2 = new Order(
      'order-2',
      new OrderStatus('PROCESSING'),
      [
        new OrderItem('product-3', 3, 7.50)
      ]
    );

    this.orders.set(order1.id, order1);
    this.orders.set(order2.id, order2);
  }

  async findAll(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }

  async findById(id: string): Promise<Order | null> {
    return this.orders.get(id) || null;
  }

  async save(order: Order): Promise<Order> {
    this.orders.set(order.id, order);
    this.orderSubject.next(order);
    return order;
  }

  async update(order: Order): Promise<Order> {
    if (!this.orders.has(order.id)) {
      throw new Error(`Order with ID ${order.id} not found`);
    }
    this.orders.set(order.id, order);
    this.orderSubject.next(order);
    return order;
  }

  async delete(id: string): Promise<void> {
    this.orders.delete(id);
  }

  async findByStatus(status: string): Promise<Order[]> {
    return Array.from(this.orders.values()).filter(order =>
      order.status.value === status
    );
  }

  watchOrders(): Observable<Order> {
    return this.orderSubject.asObservable();
  }
}