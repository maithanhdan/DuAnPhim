import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/core/services/movies.service";
import { MovieRegister } from "src/app/core/models/movie-register";

@Component({
  selector: "app-dashboard-movie",
  templateUrl: "./dashboard-movie.component.html",
  styleUrls: ["./dashboard-movie.component.scss"]
})
export class DashboardMovieComponent implements OnInit {
  constructor(private listMovie: MoviesService) {}
  danhSachPhim: any[];
  searchDSPhim: string;
  ngOnInit(): void {
    this.listMovie.layDanhSachPhim().subscribe(rs => {
      this.danhSachPhim = rs;
    });
  }
  startPageNumberDS = 0;
  endPageNumberDS = 5;
  getArrayNumberDsPhim(length) {
    return new Array(Math.ceil(length / 5));
  }

  updatePageNumberDSPhim(pageNum) {
    this.startPageNumberDS = pageNum * 5;
    this.endPageNumberDS = this.startPageNumberDS + 5;
  }

  form: MovieRegister = new MovieRegister();
  onSubmit() {
    console.log(this.form);
    const values = { ...this.form, maNhom: 'GP01' };
    this.listMovie.dangKyPhim(values).subscribe((res) => {
      this.ngOnInit()
    });
  }
}
