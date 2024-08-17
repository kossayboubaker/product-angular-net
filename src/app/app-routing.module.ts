import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './product-create/product-create.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './products-list/products-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent}, // Route par défaut
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'products-list', component:ProductListComponent },
  {path: 'signup', component: SignupComponent},
  { path: '', component: LoginComponent},
   { path: "login", component: LoginComponent},

  { path: 'product-detail/:id', component: ProductDetailComponent },
 // Redirige toutes les autres routes vers la route par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
