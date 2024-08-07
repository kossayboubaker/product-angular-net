import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {
  [x: string]: any;
  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
  };
  products: Product[] = [];
  selectedProduct: Product | undefined;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this['loadProducts']();
  }
  selectProduct(product: Product): void {
    this.selectedProduct = { ...product };
  }

  onSubmit(): void {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct).subscribe({
        next: () => {
          console.log('Product updated successfully');
          this['loadProducts']();
          this.selectedProduct = undefined;
        },
        error: (error) => {
          console.error('Error updating product:', error);
        },
      });
    }
  }
}
