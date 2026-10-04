import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../service/cart.service';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private cartService: CartService) {}

  searchText = '';
  selectedCategory = 'All';

  products: Product[] = [

    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 1499,
      rating: 4.5,
      image: 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/g/691f01eb863e7c733fcfc4af/black-1.png',
      description: 'High quality wireless headphones with clear sound.'
    },

    {
      id: 2,
      name: 'Smart Watch',
      category: 'Electronics',
      price: 2499,
      rating: 4.3,
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/MK/KK/ZQ/35510924/bip-3-pro-5-500x500.png',
      description: 'Smart watch with fitness and health tracking.'
    },

    {
      id: 3,
      name: 'Running Shoes',
      category: 'Footwear',
      price: 1999,
      rating: 4.6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPNY9X-Fg-o6t7h8Cf39S7jAWjmVyFUu-p7YzhSfuSyg&s',
      description: 'Comfortable running shoes for everyday use.'
    },

    {
      id: 4,
      name: 'Casual T-Shirt',
      category: 'Fashion',
      price: 699,
      rating: 4.2,
      image: 'https://m.media-amazon.com/images/I/710IISGKSlL._AC_UY1100_.jpg',
      description: 'Comfortable cotton casual t-shirt.'
    },

    {
      id: 5,
      name: 'Laptop Backpack',
      category: 'Fashion',
      price: 999,
      rating: 4.4,
      image: 'https://conceptkart.com/cdn/shop/files/TECPHILE-Laptop-Bag-35L-Expandable-Anti-Theft-Travel-Backpack-for-Men-with-USB-Port-_2.jpg?v=1774089837',
      description: 'Water resistant backpack for laptops.'
    },

    {
      id: 6,
      name: 'Bluetooth Speaker',
      category: 'Electronics',
      price: 1299,
      rating: 4.5,
      image: 'https://m.media-amazon.com/images/I/7101mxxpNPL.jpg',
      description: 'Portable Bluetooth speaker with powerful sound.'
    },

    {
      id: 7,
      name: 'Sports Shoes',
      category: 'Footwear',
      price: 2299,
      rating: 4.7,
      image: 'https://redtape.com/cdn/shop/files/RSO4863_1.jpg?v=1786010846',
      description: 'Lightweight sports shoes for active lifestyles.'
    },

    {
      id: 8,
      name: 'Coffee Mug',
      category: 'Home',
      price: 399,
      rating: 4.1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhLpfcZsJOnncZcp3ixNFUkgSEkYhWn_Q7PPBgpHGqAbAQryMsKNxF8rE&s=10',
      description: 'Premium ceramic coffee mug.'
    }

  ];

  get categories(): string[] {
    return [
      'All',
      ...new Set(this.products.map(product => product.category))
    ];
  }

  get filteredProducts(): Product[] {

    return this.products.filter(product => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase());

      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;

      return matchesSearch && matchesCategory;

    });

  }

  addToCart(product: Product): void {

    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });

    alert(`${product.name} added to cart!`);

  }

}