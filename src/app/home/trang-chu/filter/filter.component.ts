import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/core/services/movies.service";
import { Movie } from "./../../../core/models/movie";
import { CinemasService } from 'src/app/core/services/cinemas.service';
import { Subscription } from 'rxjs';
@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  constructor(private cinemaservice: CinemasService) {}
  tenHeThongRap: any[];
  CumRap: any[];
  tenPhim: any[];
  ngayChieu: any[];
  gioChieu:any[];
  subTenHeThongRap:Subscription;
  subCumRap:Subscription;

  ngOnInit(): void {
    this.subTenHeThongRap=this.cinemaservice.layThongTinLichChieuRap().subscribe(rs => {
      this.tenHeThongRap = rs;
      // console.log(rs);
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
  }
  layGioChieu(event){
    let stt = event.target.value;
    this.gioChieu = this.ngayChieu[stt];
  }
  onSubmit(){}
  
  // ngOnDestroy(){
  //   this.subTenHeThongRap.unsubscribe();
  // }
}