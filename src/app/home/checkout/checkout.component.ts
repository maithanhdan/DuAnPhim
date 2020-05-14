import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from 'src/app/core/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  thongTinPhim: any;
  danhSachGhe: any;

  maLichChieu:any;

  constructor(private activatedRoute: ActivatedRoute,
    private checkoutSevice: CheckoutService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.checkoutSevice.layDanhSachPhongVe(params.maLichChieu).subscribe(rs => {
        const { danhSachGhe, ...thongTinPhim } = rs;
        this.danhSachGhe = danhSachGhe;
        this.thongTinPhim = thongTinPhim
      })
    })
  }
}
