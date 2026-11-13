import { OrderStatus } from './order-status.entity';
import { OrderItem } from './order-item.entity';
import { validateOrReject } from 'class-validator';

export class Order {
  private readonly _id: string;
  private _status: OrderStatus;
  private readonly _items: OrderItem[];
  private readonly _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: string,
    status: OrderStatus,
    items: OrderItem[],
    createdAt: Date = new Date(),
    updatedAt: Date = new Date()
  ) {
    this._id = id;
    this._status = status;
    this._items = items;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this.validateInvariants();
  }

  get id(): string {
    return this._id;
  }

  get status(): OrderStatus {
    return this._status;
  }

  get items(): OrderItem[] {
    return [...this._items];
  }

  get createdAt(): Date {
    return new Date(this._createdAt);
  }

  get updatedAt(): Date {
    return new Date(this._updatedAt);
  }

  updateStatus(newStatus: OrderStatus): void {
    if (!newStatus) {
      throw new Error('Order status cannot be null or undefined');
    }
    this._status = newStatus;
    this._updatedAt = new Date();
    this.validateInvariants();
  }

  calculateTotal(): number {
    return this._items.reduce((total, item) => total + item.calculateSubtotal(), 0);
  }

  private async validateInvariants(): Promise<void> {
    if (!this._id || this._id.trim().length === 0) {
      throw new Error('Order ID cannot be empty');
    }
    if (!this._status) {
      throw new Error('Order status cannot be null');
    }
    if (!this._items || this._items.length === 0) {
      throw new Error('Order must have at least one item');
    }
    await validateOrReject(this);
  }

  toDTO(): OrderDTO {
    return {
      id: this._id,
      status: this._status.toDTO(),
      items: this._items.map(item => item.toDTO()),
      createdAt: this._createdAt,
      updatedAt: this._updatedAt
    };
  }
}

export interface OrderDTO {
  id: string;
  status: OrderStatusDTO;
  items: OrderItemDTO[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderStatusDTO {
  value: string;
}

export interface OrderItemDTO {
  productId: string;
  quantity: number;
  price: number;
}