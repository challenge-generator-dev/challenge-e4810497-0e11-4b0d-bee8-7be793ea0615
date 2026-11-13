import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatus } from '../../../core/models/order.model';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent {
  @Input({ required: true }) status!: OrderStatus;
  @Input() showLabel: boolean = true;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  get statusClass(): string {
    if (!this.status?.value) {
      return 'status-unknown';
    }
    const normalizedValue = this.status.value.toLowerCase();
    
    if (normalizedValue.includes('pending') || normalizedValue.includes('pendiente')) {
      return 'status-pending';
    }
    if (normalizedValue.includes('processing') || normalizedValue.includes('procesando')) {
      return 'status-processing';
    }
    if (normalizedValue.includes('completed') || normalizedValue.includes('completado') || normalizedValue.includes('entregado')) {
      return 'status-completed';
    }
    if (normalizedValue.includes('cancelled') || normalizedValue.includes('cancelado')) {
      return 'status-cancelled';
    }
    if (normalizedValue.includes('failed') || normalizedValue.includes('error')) {
      return 'status-failed';
    }
    
    return 'status-default';
  }

  get statusIcon(): string {
    if (!this.status?.value) {
      return 'help_outline';
    }
    const normalizedValue = this.status.value.toLowerCase();
    
    if (normalizedValue.includes('pending') || normalizedValue.includes('pendiente')) {
      return 'schedule';
    }
    if (normalizedValue.includes('processing') || normalizedValue.includes('procesando')) {
      return 'sync';
    }
    if (normalizedValue.includes('completed') || normalizedValue.includes('completado') || normalizedValue.includes('entregado')) {
      return 'check_circle';
    }
    if (normalizedValue.includes('cancelled') || normalizedValue.includes('cancelado')) {
      return 'cancel';
    }
    if (normalizedValue.includes('failed') || normalizedValue.includes('error')) {
      return 'error';
    }
    
    return 'info';
  }

  get displayLabel(): string {
    if (!this.status?.value) {
      return 'Desconocido';
    }
    return this.status.value;
  }

  get ariaLabel(): string {
    return `Estado de la orden: ${this.displayLabel}`;
  }
}