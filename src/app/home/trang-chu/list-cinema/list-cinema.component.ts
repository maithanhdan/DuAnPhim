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
    public thongTinLichChieu: ThongTinLichChieuHeThongService
  ) {}
  // heThongRap:any

  ngOnInit(): void {
    // hàm subscribe sẽ chờ kết quả trả về từ Observable

    const heThongRap = this.cinemaService.heThongRap();
    if (heThongRap.length === 0) {
      this.cinemaService.layThongTinHeThongRap().subscribe(res => {
        console.log(res[0].maHeThongRap);
        const cumRap = this.cinemaService.cumRapTheoHeThong();
        if (cumRap.length === 0) {
          this.cinemaService
            .layCumRapTheoHeThong(res[0].maHeThongRap)
            .subscribe(res => {
              this.cinemaService.layThongTinLichChieuRap(res[0]).subscribe();
              console.log(res[0].maCumRap);
            });
        }
      });
    }
  }

  chonHeThongRap(maHeThongRap: string) {
    this.cinemaService.layCumRapTheoHeThong(maHeThongRap).subscribe();
  }

  async chonPhimChieu(maCumRap: string) {
    let listCum = [];
    let list = [];
    this.thongTinLichChieu.layLichChieuChiTiet().subscribe(async rs => {
      await rs.forEach(element => {
        listCum.push(element.lstCumRap);
      });
      await listCum.forEach(element => {
        element.forEach(x => {
          if (x.maCumRap == maCumRap) {
            list.push(x);
          }
        });
      });
      this.lichChieu = await list.map(x => x.danhSachPhim); //duyet tat cả list , sau đó  gán lại film thành danhSachPhim
      console.log(this.lichChieu);
      return this.lichChieu;
    });
  }
  lichChieu: any[];
  // chonPhimChieu(maCumRap: string) {
  //   let listCum = [];
  //   let list = [];
  //   this.thongTinLichChieu.layLichChieuChiTiet().subscribe(rs => {
  //     rs.forEach(element => {
  //       listCum.push(element.lstCumRap);
  //     });
  //     listCum.forEach(element => {
  //       element.forEach(x => {
  //         if (x.maCumRap === maCumRap) {
  //           list.push(x);
  //         }
  //       });
  //     });

  //     let films = list.map(x => x.danhSachPhim); //duyet tat cả list , sau đó  gán lại film thành danhSachPhim
  //     return films;
  //     console.log(films);
  //   });
  // }
}
