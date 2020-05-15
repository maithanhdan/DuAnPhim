import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CheckoutService } from "src/app/core/services/checkout.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit {
  thongTinPhim: any;
  danhSachGhe: any;
  maLichChieu: any;
  mangGheThanhToan: any=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private checkoutSevice: CheckoutService
  ) {}

  mangGheDangDat(gheDangDat: any) {
    if (gheDangDat.DangDat) {
      this.mangGheThanhToan.push(gheDangDat);
    }else{
      this.mangGheThanhToan = this.mangGheThanhToan.filter(
        ghe => ghe.SoGhe !== gheDangDat.SoGhe,
      );
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.checkoutSevice
        .layDanhSachPhongVe(params.maLichChieu)
        .subscribe(rs => {
          const { danhSachGhe, ...thongTinPhim } = rs;
          this.danhSachGhe = danhSachGhe;
          this.thongTinPhim = thongTinPhim.thongTinPhim;
          console.log(this.danhSachGhe, this.thongTinPhim);
        });
    });
  }
}
