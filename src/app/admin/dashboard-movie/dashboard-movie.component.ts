import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/core/services/users.service";
import { MoviesService } from "src/app/core/services/movies.service";
import { UserRegister } from "src/app/core/models/user-register";

@Component({
  selector: "app-dashboard-movie",
  templateUrl: "./dashboard-movie.component.html",
  styleUrls: ["./dashboard-movie.component.scss"]
})
export class DashboardMovieComponent implements OnInit {
  constructor(private listMovie: MoviesService) { }
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
}