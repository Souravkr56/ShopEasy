import { Injectable, computed, signal } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = signal<CartItem[]>([]);

  items = this.cartItems.asReadonly();

  cartCount = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );

  cartTotal = computed(() =>
    this.cartItems().reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  );

  addToCart(product: CartItem) {

    const currentItems = this.cartItems();

    const existingItem = currentItems.find(
      item => item.id === product.id
    );

    if (existingItem) {

      this.cartItems.set(
        currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

    } else {

      this.cartItems.set([
        ...currentItems,
        {
          ...product,
          quantity: 1
        }
      ]);

    }
  }

  increaseQuantity(id: number) {

    this.cartItems.update(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  }

  decreaseQuantity(id: number) {

    this.cartItems.update(items =>
      items
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );

  }

  removeFromCart(id: number) {

    this.cartItems.update(items =>
      items.filter(item => item.id !== id)
    );

  }

  clearCart() {
    this.cartItems.set([]);
  }
}
