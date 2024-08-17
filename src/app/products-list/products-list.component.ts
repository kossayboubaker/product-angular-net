import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductListComponent implements OnInit {
  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
  };
  products: Product[] = [];
  selectedProduct: Product | undefined;

  selectedProductById: Product | null = null; // Variable pour afficher les détails du produit
  isUpdateMode: boolean = false;


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
        this.resetNewProduct();
      },
      (error: any) => {
        console.error('Error creating product', error);
      }
    );
  }

  loadProducts(): void {
    this.productService.getProduct().subscribe({
      next: (response: any) => {
        this.products = response.resultat.items;
      },
      error: (error) => {
        console.error('Error while loading products', error);
      },
    });
  }

  selectProduct(product: Product): void {
    this.selectedProduct = { ...product };
     //this.isUpdateMode = true; // Set to update mode
    // this.selectedProductById = null; // Clear the view mode product
  }

  selectProductById(id: number): void {
    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.selectedProductById = { ...product };
         // Set to view mode
         // Clear the update mode product
      },
      error: (error) => {
        console.error('Error finding product', error);
      },
    });
  }

  onSubmit(): void {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct).subscribe({
        next: () => {
          console.log('Product updated successfully');
          this.loadProducts();
          this.selectedProduct = undefined;
          //this.isUpdateMode = false;
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

  private resetNewProduct(): void {
    this.newProduct = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0,
    };
  }
}
