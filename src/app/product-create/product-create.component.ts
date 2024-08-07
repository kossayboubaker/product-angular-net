import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
  };

  constructor(private productService: ProductService, private router: Router) {}

  createProduct(): void {
    this.productService.createProduct(this.newProduct).subscribe(
      () => {
        console.log('Product created successfully');
        this.router.navigate(['/products-list']);
      },
      (error: any) => {
        console.error('Error creating product', error);
      }
    );
  }
}
