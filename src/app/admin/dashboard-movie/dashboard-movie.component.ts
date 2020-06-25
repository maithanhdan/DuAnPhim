import { Component, OnInit, ViewChild } from "@angular/core";
import { MoviesService } from "src/app/core/services/movies.service";
import { MovieRegister } from "src/app/core/models/movie-register";
import swal from 'sweetalert2';
import { Movie } from 'src/app/core/models/movie';

@Component({
  selector: "app-dashboard-movie",
  templateUrl: "./dashboard-movie.component.html",
  styleUrls: ["./dashboard-movie.component.scss"]
})
export class DashboardMovieComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  @ViewChild('closeupdate') closeupdate;
  constructor(private listMovie: MoviesService) { }
  danhSachPhim: any[];
  searchDSPhim: string;
  phim: Movie = {
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    maNhom: "",
    ngayKhoiChieu: "",
    danhGia: 5,
  }

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
    const values = { ...this.form, maNhom: 'GP01' };
    this.listMovie.themPhim(values).subscribe();
    this.closebutton.nativeElement.click();
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã thêm thành công',
      showConfirmButton: false,
      timer: 1500
    })
  }

  delete(maPhim) {
    this.listMovie.xoaPhim(maPhim).subscribe();
    for (let i = 0; i < this.danhSachPhim.length; ++i) {
      if (this.danhSachPhim[i].maPhim === maPhim) {
        this.danhSachPhim.splice(i, 1);
      }
    }
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã xóa phim thành công',
      showConfirmButton: false,
      timer: 1500
    })
  }

  editPhim(maPhim) {
    this.phim = {
      ...this.danhSachPhim.find(res => {
        return res.maPhim === maPhim;
      })
    }
  }

  updatePhim() {
    this.closeupdate.nativeElement.click();
    this.listMovie.updatePhim(this.phim).subscribe();
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã update phim thành công',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
