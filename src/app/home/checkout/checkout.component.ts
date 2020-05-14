import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  thongTinPhim: any[];
  danhSachGhe: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
