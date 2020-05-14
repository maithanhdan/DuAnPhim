import { Component, OnInit, Input } from "@angular/core";
import { UsersService } from "src/app/core/services/users.service";
import { CheckoutService } from "src/app/core/services/checkout.service";
@Component({
  selector: "app-danh-sach-ghe",
  templateUrl: "./danh-sach-ghe.component.html",
  styleUrls: ["./danh-sach-ghe.component.scss"]
})
export class DanhSachGheComponent implements OnInit {
 
  @Input() maLichChieu: any;
  mangGhe: any;
  constructor(
    private userServive: UsersService,
    private checkoutSevice: CheckoutService
  ) {}
  user: any;
  ngOnInit(): void {
    this.user = this.userServive.getCurrentUser();
    // lay mang ghe
    this.mangGhe = this.checkoutSevice
      .LayDanhSachPhongVe('18529')
      .subscribe(rs => {
        this.mangGhe = rs;
      });

    console.log(this.maLichChieu);
    
  }
}
