import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Order, mapOrderDtoToOrder } from '../models/order.model';
import { OrderDTO } from '../dtos/order.dto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly apiUrl = 'http://localhost:3000/orders';
  private ordersSignal = signal<Order[]>([]);
  private selectedOrderSignal = signal<Order | null>(null);

  constructor(private http: HttpClient) {}

  get orders() {
    return this.ordersSignal.asReadonly();
  }

  get selectedOrder() {
    return this.selectedOrderSignal.asReadonly();
  }

  fetchOrders(): Observable<Order[]> {
    return this.http.get<OrderDTO[]>(this.apiUrl).pipe(
      map(dtos => dtos.map(mapOrderDtoToOrder)),
      tap(orders => {
        this.ordersSignal.set(orders);
      }),
      catchError(error => {
        console.error('Error fetching orders:', error);
        return throwError(() => new Error('Failed to fetch orders'));
      })
    );
  }

  fetchOrderById(id: string): Observable<Order> {
    return this.http.get<OrderDTO>(`${this.apiUrl}/${id}`).pipe(
      map(dto => mapOrderDtoToOrder(dto)),
      tap(order => {
        this.selectedOrderSignal.set(order);
      }),
      catchError(error => {
        console.error(`Error fetching order with id ${id}:`, error);
        return throwError(() => new Error(`Failed to fetch order with id ${id}`));
      })
    );
  }

  updateOrderStatus(orderId: string, newStatus: string): void {
    const currentOrders = this.ordersSignal();
    const updatedOrders = currentOrders.map(order =>
      order.id === orderId ? { ...order, status: { value: newStatus } } : order
    );
    this.ordersSignal.set(updatedOrders);

    const currentSelectedOrder = this.selectedOrderSignal();
    if (currentSelectedOrder?.id === orderId) {
      this.selectedOrderSignal.set({
        ...currentSelectedOrder,
        status: { value: newStatus }
      });
    }
  }
}