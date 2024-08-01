import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http'; // Import required modules
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    NavBarComponent,
    SideBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    ProductService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
