import { Component, OnInit, OnDestroy } from "@angular/core";
import { CinemasService } from "src/app/core/services/cinemas.service";

@Component({
  selector: "app-list-cinema",
  templateUrl: "./list-cinema.component.html",
  styleUrls: ["./list-cinema.component.scss"]
})
export class ListCinemaComponent implements OnInit {
  constructor(public cinemaService: CinemasService) {}
  lichChieu: any;
  rapDangChon: any;
  xuatChieu1Phim: any;
  ngOnInit(): void {
    // hàm subscribe sẽ chờ kết quả trả về từ Observable

    const heThongRap = this.cinemaService.heThongRap();
    if (heThongRap.length === 0) {
      this.cinemaService.layThongTinHeThongRap().subscribe(res => {
        console.log(res[0].maHeThongRap);
        // Gọi api lấy cụm rạp theo hệ thống
        this.cinemaService
          .layCumRapTheoHeThong(res[0].maHeThongRap)
          .subscribe();
        // Gọi api lấy lịch chiếu theo hệ thống rạp
        this.cinemaService
          .layThongTinLichChieuRap(res[0].maHeThongRap)
          .subscribe();
      });
    }
  }

  chonHeThongRap(maHeThongRap: string) {
    this.cinemaService.layCumRapTheoHeThong(maHeThongRap).subscribe();
    this.cinemaService.layThongTinLichChieuRap(maHeThongRap).subscribe();
  }

  chonPhimChieu(maCumRap: string) {
    //  Đầu tiên dựa vào maCumRap tìm ra cái obj của rạp đó
    this.rapDangChon = this.cinemaService
      .cumRapTheoHeThong()
      .find(item => item.maCumRap === maCumRap);
    // Tiếp theo lấy  lịch chiếu của cái rạp đang chọn dựa vào maCumRap
    this.lichChieu = this.cinemaService
      .lichChieuHeThong()[0]
      .lstCumRap.find(item => {
        item.maCumRap === maCumRap;
      });

    // this.xuatChieu1Phim = this.lichChieu.danhSachPhim[0].find(item => {
    //   console.log(this.xuatChieu1Phim);
    // });
  }
}
