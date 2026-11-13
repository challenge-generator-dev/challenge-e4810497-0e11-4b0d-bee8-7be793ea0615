import { Order } from '../entities/order.entity';
import { Observable } from 'rxjs';

export interface OrderRepositoryPort {
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  save(order: Order): Promise<Order>;
  update(order: Order): Promise<Order>;
  delete(id: string): Promise<void>;
  findByStatus(status: string): Promise<Order[]>;
  watchOrders(): Observable<Order>;
}