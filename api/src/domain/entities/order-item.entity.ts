import { validateOrReject } from 'class-validator';

export class OrderItem {
  private readonly _productId: string;
  private _quantity: number;
  private readonly _price: number;

  constructor(productId: string, quantity: number, price: number) {
    if (!productId || productId.trim().length === 0) {
      throw new Error('Product ID cannot be empty');
    }
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than 0');
    }
    if (price <= 0) {
      throw new Error('Price must be greater than 0');
    }

    this._productId = productId;
    this._quantity = quantity;
    this._price = price;
    this.validateInvariants();
  }

  get productId(): string {
    return this._productId;
  }

  get quantity(): number {
    return this._quantity;
  }

  get price(): number {
    return this._price;
  }

  set quantity(newQuantity: number) {
    if (newQuantity <= 0) {
      throw new Error('Quantity must be greater than 0');
    }
    this._quantity = newQuantity;
    this.validateInvariants();
  }

  calculateSubtotal(): number {
    return this._quantity * this._price;
  }

  private async validateInvariants(): Promise<void> {
    await validateOrReject(this);
  }

  toDTO(): OrderItemDTO {
    return {
      productId: this._productId,
      quantity: this._quantity,
      price: this._price
    };
  }
}

export interface OrderItemDTO {
  productId: string;
  quantity: number;
  price: number;
}