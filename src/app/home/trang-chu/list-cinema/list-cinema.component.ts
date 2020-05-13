import { Component, OnInit, OnDestroy } from "@angular/core";
import { CinemasService } from "src/app/core/services/cinemas.service";

@Component({
  selector: "app-list-cinema",
  templateUrl: "./list-cinema.component.html",
  styleUrls: ["./list-cinema.component.scss"]
})
export class ListCinemaComponent implements OnInit {
  rapDangChon: any;
  lichChieu: any;
  danhSachRap: any;
  danhSachPhim: any;
  xuatChieuPhim: any;

  constructor(
    public cinemaService: CinemasService,
  ) { }
  // heThongRap:any

  ngOnInit(): void {
    // hàm subscribe sẽ chờ kết quả trả về từ Observable

    const heThongRap = this.cinemaService.heThongRap();
    if (heThongRap.length === 0) {
      this.cinemaService.layThongTinHeThongRap().subscribe(res => {
        // Gọi api lấy cụm rạp theo hệ thống
        this.cinemaService.layCumRapTheoHeThong(res[0].maHeThongRap).subscribe();
        // Gọi api lấy lịch chiếu theo hệ thống rạp
        this.cinemaService.layThongTinLichChieuRap(res[0].maHeThongRap).subscribe();
      });
    }
  }

  chonHeThongRap(maHeThongRap: string) {
    this.cinemaService.layCumRapTheoHeThong(maHeThongRap).subscribe();
    this.cinemaService.layThongTinLichChieuRap(maHeThongRap).subscribe();
  }

  chonPhimChieu(maCumRap: string) {
    //  Đầu tiên dựa vào maCumRap tìm ra cái obj của rạp đó
    this.rapDangChon = this.cinemaService.cumRapTheoHeThong().find(item =>
      item.maCumRap === maCumRap
    );
    // Tiếp theo lấy  lịch chiếu của cái rạp đang chọn dựa vào maCumRap
    this.lichChieu = this.cinemaService.lichChieuHeThong()[0].lstCumRap.find(item =>
      item.maCumRap === maCumRap
    );
    console.log(this.rapDangChon, this.lichChieu);

    //tách data dsPhim và dsRap
    const { danhSachRap, ...chiTietRap } = this.rapDangChon;
    this.danhSachRap = danhSachRap;
    const { danhSachPhim, ...ctRap } = this.lichChieu;
    this.danhSachPhim = danhSachPhim;

    // console.log(this.danhSachRap, this.danhSachPhim);


  }
}
