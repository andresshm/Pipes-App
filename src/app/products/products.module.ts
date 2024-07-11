import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    OrderComponent,

  ]
})
export class ProductsModule { }
