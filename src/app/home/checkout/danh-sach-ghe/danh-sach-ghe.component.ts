import { Component, OnInit} from "@angular/core";
import { UsersService } from "src/app/core/services/users.service";
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from 'src/app/core/services/checkout.service';

@Component({
  selector: "app-danh-sach-ghe",
  templateUrl: "./danh-sach-ghe.component.html",
  styleUrls: ["./danh-sach-ghe.component.scss"]
})
export class DanhSachGheComponent implements OnInit {
  user: any;
  danhSachGhe: any;

  constructor(private userServive: UsersService,
    private activatedRoute: ActivatedRoute,
    private checkoutSevice: CheckoutService) { }
  ngOnInit(): void {
    this.user = this.userServive.getCurrentUser();
    // lay mang ghe
    this.activatedRoute.queryParams.subscribe(params => {
      this.checkoutSevice.layDanhSachPhongVe(params.maLichChieu).subscribe(rs => {
        this.danhSachGhe=rs;
      })
    })
  }
}
