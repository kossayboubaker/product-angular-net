import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  'title': string;
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
    this.loadProducts();
  }

  createProduct(): void {
    this.productService.createProduct(this.newProduct).subscribe(
      () => {
        console.log('Product created successfully');
        this.loadProducts();
        this.router.navigate(['']);
        this.newProduct = {
          id: 0,
          name: '',
          description: '',
          price: 0,
          stock: 0,
        };
      },
      (error: any) => {
        console.error('Error creating product', error);
      }
    );
  }

  loadProducts(): void {
    this.productService.getProduct().subscribe({
      next: (products: any) => {
        this.products = products.resultat.items;
      },
      error: (error) => {
        console.error('Error while loading products', error);
      },
    });
  }

  selectProduct(product: Product): void {
    this.selectedProduct = { ...product };
  }

  onSubmit(): void {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct).subscribe({
        next: () => {
          console.log('Product updated successfully');
          this.loadProducts();
          this.selectedProduct = undefined;
        },
        error: (error) => {
          console.error('Error updating product:', error);
        },
      });
    }
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        console.log('Product deleted successfully');
        this.loadProducts();
      },
      error: (error) => {
        console.error('Error deleting product:', error);
      },
    });
  }
}
