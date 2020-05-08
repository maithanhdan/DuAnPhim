import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { BannerComponent } from './banner/banner.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { RatingComponent } from './rating/rating.component';
import { XuatChieuComponent } from './xuat-chieu/xuat-chieu.component';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';

@NgModule({
  declarations: [
    MovieDetailComponent,
    BannerComponent,
    MovieInfoComponent,
    RatingComponent,
    XuatChieuComponent,
  ],
  imports: [CommonModule, MovieDetailRoutingModule],
})
export class MovieDetailModule {}
