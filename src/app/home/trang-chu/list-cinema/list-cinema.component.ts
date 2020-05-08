import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.scss'],
})
export class ListCinemaComponent implements OnInit, OnDestroy {
  dsPhim: any[] = [];
  subDsPhim: Subscription;
  constructor(private moviesService: MoviesService) {}

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
}
