import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu.component';
import { FilterComponent } from './filter/filter.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { MovieComponent } from './movie/movie.component';
import { NewsComponent } from './news/news.component';
import { ListCinemaComponent } from './list-cinema/list-cinema.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TrangChuRoutingModule } from './trang-chu-routing.module';
import { LightboxModule } from 'ngx-lightbox';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppLinkComponent } from './app-link/app-link.component';
@NgModule({
  declarations: [
    TrangChuComponent,
    FilterComponent,
    ListMovieComponent,
    MovieComponent,
    NewsComponent,
    ListCinemaComponent,
    CarouselComponent,
    AppLinkComponent,
  ],
  imports: [CommonModule, TrangChuRoutingModule, LightboxModule, SharedModule],
})
export class TrangChuModule { }
