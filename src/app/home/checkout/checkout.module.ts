import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';

import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';

@NgModule({
  declarations: [CheckoutComponent, ThanhToanComponent, DanhSachGheComponent, GheComponent],
  imports: [CommonModule, CheckoutRoutingModule],
})
export class CheckoutModule {}
