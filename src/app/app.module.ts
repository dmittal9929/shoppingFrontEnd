import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { PorductcardComponent } from './porductcard/porductcard.component';
import { ProductsComponent } from './products/products.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,LoginComponent,  PorductcardComponent, ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [PorductcardComponent,LoginComponent]
})
export class AppModule { }
