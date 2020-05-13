import { Component, OnInit, Input } from "@angular/core";
import { UsersService } from "src/app/core/services/users.service";
import { CheckoutService } from "src/app/core/services/checkout.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-danh-sach-ghe",
  templateUrl: "./danh-sach-ghe.component.html",
  styleUrls: ["./danh-sach-ghe.component.scss"]
})
export class DanhSachGheComponent implements OnInit {
  mangGhe: any;
  @Input() danhSachGhe:any[]
  @Input() thongTinPhim: any[]
  constructor(
    private userServive: UsersService,
    private dSGheService: CheckoutService,
    private activatedRoute:ActivatedRoute,
  ) {}
  user: any;
  ngOnInit(): void {
    this.user = this.userServive.getCurrentUser();
    // lay mang ghe
  }
}
