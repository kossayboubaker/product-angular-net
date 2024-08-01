import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
  };

  constructor(private productService: ProductService, private router: Router) {}

  // createProduct(): void {
  //   this.productService.createProduct(this.product).subscribe(
  //     () => {
  //       console.log('Product created successfully');
  //       this.router.navigate(['/product-create']); // Navigate to the product list page or another page after creation
  //     },
  //     (error: any) => {
  //       console.error('Error created product', error);
  //     }
  //   );
  // }
}
