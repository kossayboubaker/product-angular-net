import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './products-list/products-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent}, // Route par défaut
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'products-list', component:ProductListComponent },
  { path: '', component: DashboardComponent},
  { path: 'product-detail/:id', component: ProductDetailComponent },
 // Redirige toutes les autres routes vers la route par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
