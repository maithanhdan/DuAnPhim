import { Component, OnInit } from "@angular/core";
import { DanhSachNguoiDungService } from "src/app/core/services/danh-sach-nguoi-dung.service";
import { MoviesService } from "src/app/core/services/movies.service";
import { UsersService } from "src/app/core/services/users.service";
import { UserRegister } from 'src/app/core/models/user-register';
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(
    private DSNguoiDung: DanhSachNguoiDungService,
    private listMovie: MoviesService,
    private usersServices: UsersService
  ) {}
  danhSachNguoiDung: any[];
  startPageNumber = 0;
  endPageNumber = 10;
  danhSachPhim: any[];

  search: string;
  searchDSPhim: string;
  ngOnInit(): void {
    this.listMovie.layDanhSachPhim().subscribe(rs => {
      this.danhSachPhim = rs;
    });

    this.DSNguoiDung.layDanhSachNguoiDung().subscribe(rs => {
      this.danhSachNguoiDung = rs;
      console.log(this.danhSachNguoiDung);
    });
  }

  getArrayFromNumber(length) {
    return new Array(Math.ceil(length / 25));
  }

  updatePageNumber(pageNum) {
    this.startPageNumber = pageNum * 10;
    this.endPageNumber = this.startPageNumber + 10;
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
  form: UserRegister = new UserRegister();
  onSubmit() {}
}
