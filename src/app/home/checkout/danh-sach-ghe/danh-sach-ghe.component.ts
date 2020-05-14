import { Component, OnInit, Input } from "@angular/core";
import { UsersService } from "src/app/core/services/users.service";
@Component({
  selector: "app-danh-sach-ghe",
  templateUrl: "./danh-sach-ghe.component.html",
  styleUrls: ["./danh-sach-ghe.component.scss"]
})
export class DanhSachGheComponent implements OnInit {
  @Input() danhSachGhe: any[];
  @Input() thongTinPhim: any[];
  constructor(private userServive: UsersService) { }
  user: any;
  ngOnInit(): void {
    this.user = this.userServive.getCurrentUser();
    // lay mang ghe
    console.log(this.danhSachGhe);
    console.log(this.thongTinPhim);
  }
}
