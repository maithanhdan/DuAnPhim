import { Component, OnInit } from "@angular/core";
import { DanhSachNguoiDungService } from "src/app/core/services/danh-sach-nguoi-dung.service";
import { UsersService } from "src/app/core/services/users.service";
import { UserRegister } from 'src/app/core/models/user-register';
import { Router } from '@angular/router';
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(
    private DSNguoiDung: DanhSachNguoiDungService,
    private usersServices: UsersService, private router: Router 
  ) {}
  danhSachNguoiDung: any[];
  startPageNumber = 0;
  endPageNumber = 10;

  search: string;
  searchDSPhim: string;
  ngOnInit(): void {
  
    this.DSNguoiDung.layDanhSachNguoiDung().subscribe(rs => {
      this.danhSachNguoiDung = rs;
      console.log(this.danhSachNguoiDung);
    });
  }

  getArrayFromNumber(length) {
    return new Array(Math.ceil(length / 25));
  }

  updatePageNumber(pageNum) {
    this.startPageNumber = pageNum * 10;
    this.endPageNumber = this.startPageNumber + 10;
  }
  form: UserRegister = new UserRegister();
  onSubmit() {
    console.log(this.form);
    const values = { ...this.form, maNhom: 'GP01' };
    this.usersServices.dangKy(values).subscribe((res) => {
      this.ngOnInit()
    });
  }
  xoaUser(ele:string){

  }
}
