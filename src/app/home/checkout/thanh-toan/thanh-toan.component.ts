import { Component, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "app-thanh-toan",
  templateUrl: "./thanh-toan.component.html",
  styleUrls: ["./thanh-toan.component.scss"]
})
export class ThanhToanComponent implements OnInit {
  @Input() thongTinPhim: any;
  @Input() mangGheThanhToan:any
  constructor() {}

  ngOnInit(): void {}
  
  // mangGheDangDat(gheDangDat: any) {
  //   if (gheDangDat.DangDat) {
  //     if (this.mangGheThanhToan.length <= 7) {
  //       this.mangGheThanhToan.push(gheDangDat);
  //     }
  //   } else {
  //     this.mangGheThanhToan = this.mangGheThanhToan.filter(
  //       ghe => ghe.SoGhe !== gheDangDat.SoGhe
  //     );
  //   }
  // }

  tinhTongTien() {
    return (this.mangGheThanhToan.reduce(
      (tongTien, gheDangDat) => {
        tongTien += gheDangDat.Gia;
        return tongTien;
      },
      0
    ));
  }
}
