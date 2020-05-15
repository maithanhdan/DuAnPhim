import { Component, OnInit, Input } from "@angular/core";
import { UsersService } from "src/app/core/services/users.service";

@Component({
  selector: "app-danh-sach-ghe",
  templateUrl: "./danh-sach-ghe.component.html",
  styleUrls: ["./danh-sach-ghe.component.scss"]
})
export class DanhSachGheComponent implements OnInit {
  user: any;
  @Input() danhSachGhe: any;

  constructor(private userServive: UsersService) { }
  ngOnInit(): void {
    this.user = this.userServive.getCurrentUser();
  }
}
