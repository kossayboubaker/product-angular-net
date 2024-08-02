import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Route par défaut
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '' } // Redirige toutes les autres routes vers la route par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
