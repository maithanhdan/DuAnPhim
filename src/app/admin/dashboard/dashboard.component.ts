import { Component, OnInit } from "@angular/core";
import { DanhSachNguoiDungService } from "src/app/core/services/danh-sach-nguoi-dung.service";
import { match } from 'minimatch';
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private DSNguoiDung: DanhSachNguoiDungService) {}
  danhSachNguoiDung: any[];
  startPageNumber = 0;
  endPageNumber = 10;

  ngOnInit(): void {
    this.DSNguoiDung.layDanhSachNguoiDung().subscribe(rs => {
      this.danhSachNguoiDung = rs;
      console.log(this.danhSachNguoiDung);
    });
  }

  getArrayFromNumber(length) {
    return new Array(Math.ceil(length /25));
  }
  updatePageNumber(pageNum) {
    this.startPageNumber = pageNum * 10;
    this.endPageNumber = this.startPageNumber + 10;
  }
}
