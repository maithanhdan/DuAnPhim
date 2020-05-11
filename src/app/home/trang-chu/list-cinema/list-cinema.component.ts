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
  constructor(
    public cinemaService: CinemasService,
<<<<<<< HEAD
    public thongTinLichChieu: ThongTinLichChieuHeThongService
  ) {}
  lichChieu: any;
  rapDangChon: any;
=======
  ) { }
  // heThongRap:any

>>>>>>> d343090c18f9bff2c5c7b6351cf6e053066b16a8
  ngOnInit(): void {
    // hàm subscribe sẽ chờ kết quả trả về từ Observable

    const heThongRap = this.cinemaService.heThongRap();
    if (heThongRap.length === 0) {
      this.cinemaService.layThongTinHeThongRap().subscribe(res => {
        console.log(res[0].maHeThongRap);
<<<<<<< HEAD
        this.cinemaService
          .layCumRapTheoHeThong(res[0].maHeThongRap)
          .subscribe();

        this.cinemaService
          .layThongTinLichChieuRap(res[0].maHeThongRap)
          .subscribe();
=======
        // Gọi api lấy cụm rạp theo hệ thống
        this.cinemaService.layCumRapTheoHeThong(res[0].maHeThongRap).subscribe();
        // Gọi api lấy lịch chiếu theo hệ thống rạp
        this.cinemaService.layThongTinLichChieuRap(res[0].maHeThongRap).subscribe();
>>>>>>> d343090c18f9bff2c5c7b6351cf6e053066b16a8
      });
    }
  }

  chonHeThongRap(maHeThongRap: string) {
    this.cinemaService.layCumRapTheoHeThong(maHeThongRap).subscribe();
    this.cinemaService.layThongTinLichChieuRap(maHeThongRap).subscribe();
  }

  chonPhimChieu(maCumRap: string) {
<<<<<<< HEAD
    this.rapDangChon = this.cinemaService.cumRapTheoHeThong().find(item => {
      item.maCumRap === maCumRap;
    });
    this.lichChieu = this.cinemaService
      .lichChieuHeThong()[0]
      .lstCumRap.find(item => {
        item.maCumRap === maCumRap;
      });
    console.log(this.lichChieu);
  }

  // chonPhimChieu(maCumRap: string) {
  //   let listCum = [];
  //   let list = [];
  //   this.thongTinLichChieu.layLichChieuChiTiet().subscribe(rs => {
  //     //b1 : lấy data là rs trả về là 1 cái mảng sao duyet bằng forEach
  //     //b2 : gán từng element.lstCumRap ở đây là 1 cái mảng vài listCum[]
  //     rs.forEach(element => {
  //       //b1
  //       listCum.push(element.lstCumRap); //b2
  //     });
  //     //b3  :dùng forEach duyệt listCum[]
  //     //b4 : do mỗi phần tử của listCum[] là 1 cái mảng nên phải duyệt 1 lần nữa
  //     //b5 : xét dk maCumRap của từng phần tử ele  so sánh maCumRap dc truyền vào
  //     //b6 : nếu === thì push vào mảng list
  //     listCum.forEach(element => {
  //       //b3
  //       element.forEach(x => {
  //         //b4
  //         if (x.maCumRap == maCumRap) {
  //           //b5
  //           list.push(x);
  //         }
  //       });
  //     });
  //     //b6 : do trong list[] còn có 1 số dữ liệu đã dùng rồi nên mới dung hàm map để giữ lại danhSachPhim[]
  //     //b7 : gán lichChieu=list
  //     this.lichChieu = list.map(x => x.danhSachPhim); //duyet tat cả list , sau đó  gán lại film thành danhSachPhim
  //     console.log(this.lichChieu);
  //     return this.lichChieu;
  //   });
  // }
=======
    //  Đầu tiên dựa vào maCumRap tìm ra cái obj của rạp đó
    this.rapDangChon = this.cinemaService.cumRapTheoHeThong().find(item =>
      item.maCumRap === maCumRap
    );
    // Tiếp theo lấy  lịch chiếu của cái rạp đang chọn dựa vào maCumRap
    this.lichChieu = this.cinemaService.lichChieuHeThong()[0].lstCumRap.find(item =>
      item.maCumRap === maCumRap
    );
    console.log(this.rapDangChon, this.lichChieu);
  }
>>>>>>> d343090c18f9bff2c5c7b6351cf6e053066b16a8
}
