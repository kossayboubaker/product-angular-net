import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './product-create/product-create.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'product-create.component', component: ProductCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
