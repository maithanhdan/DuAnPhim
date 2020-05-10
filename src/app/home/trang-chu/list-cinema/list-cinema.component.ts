import { Component, OnInit, OnDestroy } from "@angular/core";
import { CinemasService } from "src/app/core/services/cinemas.service";
import { ThongTinLichChieuHeThongService } from "src/app/core/services/thong-tin-lich-chieu-he-thong.service";

@Component({
  selector: "app-list-cinema",
  templateUrl: "./list-cinema.component.html",
  styleUrls: ["./list-cinema.component.scss"]
})
export class ListCinemaComponent implements OnInit {
  constructor(
    public cinemaService: CinemasService,
    private thongTinLichChieuService: ThongTinLichChieuHeThongService
  ) {}
  // heThongRap:any
  ngOnInit(): void {
    // hàm subscribe sẽ chờ kết quả trả về từ Observable
    const heThongRap = this.cinemaService.heThongRap();
    if (heThongRap.length === 0) {
      this.cinemaService.layThongTinHeThongRap().subscribe(res => {
        console.log(res[0].maHeThongRap);
        this.cinemaService
          .layCumRapTheoHeThong(res[0].maHeThongRap)
          .subscribe();
      });
    }
  }
  chonHeThongRap(maHeThongRap: string) {
    this.cinemaService.layCumRapTheoHeThong(maHeThongRap).subscribe();
  }

  chonPhimChieu() {
    const lichChieuChiTiet = this.thongTinLichChieuService.layLichChieuChiTiet();
    // if(lichChieuChiTiet.length === 0){
    //   this.thongTinLichChieuService.layLichChieuChiTiet().subscribe(res)=>{
    //     this.thongTinLichChieuService
    //   }
    // }
    this.thongTinLichChieuService.layLichChieuChiTiet().subscribe()
  }
}
