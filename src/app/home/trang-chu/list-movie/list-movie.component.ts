import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { MoviesService } from "src/app/core/services/movies.service";
import { Movie } from "src/app/core/models/movie";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-list-movie",
  templateUrl: "./list-movie.component.html",
  styleUrls: ["./list-movie.component.scss"]
})
export class ListMovieComponent implements OnInit, OnDestroy {
  dsPhim: Movie[] = [];
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
