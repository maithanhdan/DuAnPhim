import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from "./../../core/services/checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  thongTinPhim: any[];
  danhSachGhe: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private checkoutSevice: CheckoutService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.checkoutSevice.LayDanhSachPhongVe(params.maLichChieu).subscribe(rs => {
        const { thongTinPhim, ...danhSachGhe } = rs
        this.thongTinPhim = thongTinPhim;
        this.danhSachGhe = danhSachGhe;
      })
    })
  }

}
