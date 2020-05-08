import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

// component là sử dụng cho route là component
const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    // children: [
    // {path: 'payment', component: PaymentComponent}
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
