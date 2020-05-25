import { Component, OnInit } from "@angular/core";
import { CinemasService } from "src/app/core/services/cinemas.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  constructor(private cinemaservice: CinemasService, private router: Router) {}
  tenHeThongRap: any[];
  CumRap: any[];
  tenPhim: any[];
  ngayChieu: any[];
  gioChieu: any[];
  maLichChieu: any;
  subTenHeThongRap: Subscription;
  subCumRap: Subscription;

  ngOnInit(): void {
    this.subTenHeThongRap = this.cinemaservice
      .layThongTinLichChieuRap()
      .subscribe(rs => {
        this.tenHeThongRap = rs;
      });
  }

  layTenCumRap(event) {
    let stt = event.target.value;
    this.CumRap = this.tenHeThongRap[stt].lstCumRap;
    console.log(this.CumRap);
  }
  layTenPhim(event) {
    let stt = event.target.value;
    this.tenPhim = this.CumRap[stt].danhSachPhim;
  }
  layNgayChieu(event) {
    let stt = event.target.value;
    this.ngayChieu = this.tenPhim[stt].lstLichChieuTheoPhim;
    console.log(this.ngayChieu);
  }
  layMaLichChieu(event) {
    let stt = event.target.value;
    this.maLichChieu = this.ngayChieu[0].maLichChieu;
    
  }
  datVe() {
    console.log(this.maLichChieu);
    this.router.navigate([`/checkout?maLichChieu=${this.maLichChieu}`])
  }
}
