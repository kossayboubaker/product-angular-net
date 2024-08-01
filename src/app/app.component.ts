import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { lstat } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
  };
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(
      () => {
        console.log('Product created successfully');
        this.loadProducts()
        this.router.navigate(['']);
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
        console.error('Erreur lors du chargement des produits:', error);
      },
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        console.log('Product deleted successfully');
        this.loadProducts();
      },
      error: (error) => {
        console.error('Error deleting product', error);
      },
    });
  }
  // methode pour modifier un produit
  editProduct(productId: number): void {
    this.productService.getProductById(productId).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (error) => {
        console.error('Error loading product', error);
      },
    });
  }

  updateProduct(product: Product): void {
    this.productService.updateProduct(product).subscribe({
      next: () => {
        console.log('Product updated successfully');
        this.loadProducts();
      },
      error: (error) => {
        console.error('Error updating product', error);
      },
    });
  }

  // methode pour affiche un produit par son id
  getProductById(id: number): void {
    this.productService.getProductById(id).subscribe({
      next: (product) => {
        console.log('Product found:', product);
      },
      error: (error) => {
        console.error('Error finding product', error);
      },
    });
  }
}
