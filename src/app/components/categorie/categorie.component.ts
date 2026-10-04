import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorie',
  imports: [RouterLink],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent {
 categories = [
    {
      name: 'Electronics',
      icon: '💻',
      description: 'Smart gadgets, laptops, headphones and more',
      items: '120+ Products'
    },
    {
      name: 'Fashion',
      icon: '👕',
      description: 'Trendy clothing and accessories for everyone',
      items: '250+ Products'
    },
    {
      name: 'Footwear',
      icon: '👟',
      description: 'Sports shoes, sneakers and casual footwear',
      items: '100+ Products'
    },
    {
      name: 'Home & Living',
      icon: '🏠',
      description: 'Make your home beautiful and comfortable',
      items: '180+ Products'
    },
    {
      name: 'Beauty',
      icon: '💄',
      description: 'Beauty, skincare and personal care products',
      items: '150+ Products'
    },
    {
      name: 'Sports',
      icon: '⚽',
      description: 'Sports equipment and fitness accessories',
      items: '90+ Products'
    },
    {
      name: 'Books',
      icon: '📚',
      description: 'Books, novels and educational materials',
      items: '200+ Products'
    },
    {
      name: 'Accessories',
      icon: '⌚',
      description: 'Watches, bags, wallets and other accessories',
      items: '130+ Products'
    }
  ];
}
