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
