import { Component, OnInit, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../core/models/order.model';
import { OrderStatusComponent } from '../../shared/components/order-status/order-status.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, OrderStatusComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  private readonly orderService = inject(OrderService);
  
  readonly orders = this.orderService.orders;
  readonly selectedOrder = this.orderService.selectedOrder;
  readonly isLoading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  
  readonly hasOrders = computed(() => this.orders().length > 0);
  readonly orderCount = computed(() => this.orders().length);
  
  readonly pendingOrders = computed(() => 
    this.orders().filter(order => order.status.value === 'PENDING')
  );
  
  readonly completedOrders = computed(() => 
    this.orders().filter(order => order.status.value === 'COMPLETED')
  );

  constructor() {
    effect(() => {
      const currentOrders = this.orders();
      if (currentOrders.length > 0) {
        console.log(`[OrdersComponent] Órdenes cargadas: ${currentOrders.length}`);
      }
    });
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    
    this.orderService.fetchOrders().subscribe({
      next: (orders: Order[]) => {
        this.isLoading.set(false);
        console.log(`[OrdersComponent] Se cargaron ${orders.length} órdenes`);
      },
      error: (error: Error) => {
        this.isLoading.set(false);
        this.errorMessage.set('Error al cargar las órdenes. Por favor, intente de nuevo.');
        console.error('[OrdersComponent] Error cargando órdenes:', error);
      }
    });
  }

  selectOrder(order: Order): void {
    this.orderService.fetchOrderById(order.id).subscribe({
      next: (selectedOrder: Order) => {
        console.log(`[OrdersComponent] Orden seleccionada: ${selectedOrder.id}`);
      },
      error: (error: Error) => {
        console.error('[OrdersComponent] Error al seleccionar orden:', error);
      }
    });
  }

  updateStatus(orderId: string, newStatus: string): void {
    this.orderService.updateOrderStatus(orderId, newStatus);
  }

  getTotalItems(order: Order): number {
    return order.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice(order: Order): number {
    return order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  trackByOrderId(index: number, order: Order): string {
    return order.id;
  }

  onRefresh(): void {
    this.loadOrders();
  }

  clearError(): void {
    this.errorMessage.set(null);
  }
}