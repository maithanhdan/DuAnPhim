import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TrangChuModule } from './trang-chu/trang-chu.module';
// import { MovieDetailModule } from './movie-detail/movie-detail.module';
import { HomeComponent } from './home.component';
import { TrangChuModule } from './trang-chu/trang-chu.module';
import { MovieDetailModule } from './movie-detail/movie-detail.module';
import { CheckoutModule } from './checkout/checkout.module';

// loadChildren là sử dụng cho route là module
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', loadChildren: () => TrangChuModule },

      { path: 'detail', loadChildren: () => MovieDetailModule },

      { path: 'checkout', loadChildren: () => CheckoutModule },

      { path: 'checkout/:maLichChieu', loadChildren: () => CheckoutModule },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
