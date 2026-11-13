import { validate } from 'class-validator';

export class OrderStatus {
  private readonly _value: string;

  private static readonly ALLOWED_STATUSES = [
    'PENDING',
    'PROCESSING',
    'SHIPPED',
    'DELIVERED',
    'CANCELLED'
  ];

  constructor(value: string) {
    if (!OrderStatus.ALLOWED_STATUSES.includes(value)) {
      throw new Error(`Invalid order status: ${value}`);
    }
    this._value = value;
    this.validate();
  }

  get value(): string {
    return this._value;
  }

  private async validate(): Promise<void> {
    const errors = await validate(this);
    if (errors.length > 0) {
      throw new Error(`OrderStatus validation failed: ${errors.join(', ')}`);
    }
  }

  isTerminal(): boolean {
    return ['DELIVERED', 'CANCELLED'].includes(this._value);
  }

  canTransitionTo(newStatus: OrderStatus): boolean {
    const transitions: Record<string, string[]> = {
      PENDING: ['PROCESSING', 'CANCELLED'],
      PROCESSING: ['SHIPPED', 'CANCELLED'],
      SHIPPED: ['DELIVERED'],
      DELIVERED: [],
      CANCELLED: []
    };
    return transitions[this._value].includes(newStatus.value);
  }

  toDTO(): OrderStatusDTO {
    return {
      value: this._value
    };
  }
}

export interface OrderStatusDTO {
  value: string;
}