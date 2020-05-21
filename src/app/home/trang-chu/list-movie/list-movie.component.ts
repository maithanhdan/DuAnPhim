import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/core/models/movie';
import { BehaviorSubject } from "rxjs";
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit, OnDestroy {
  dsPhim: Movie[] = [];
  subDsPhim: Subscription;
  private currentDSPhimSubject = new BehaviorSubject({});

  constructor(private moviesService: MoviesService, private _lightbox: Lightbox) {}

  ngOnInit(): void {
    // hàm subscribe sẽ chờ kết quả trả về từ Observable
    this.subDsPhim = this.moviesService
      .layDanhSachPhim()
      .subscribe((result) => {
        this.dsPhim = result;
        console.log(this.dsPhim);
      });
  }

  ngOnDestroy(): void {
    this.subDsPhim.unsubscribe();
  }

  // open(index: number): void {
  //   // open lightbox
  //   // this._lightbox.open(this.dsPhim, index);
  // }

  // close(): void {
  //   // close lightbox programmatically
  //   this._lightbox.close();
  // }
}
