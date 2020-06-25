import { Component, OnInit, ViewChild } from "@angular/core";
import { DanhSachNguoiDungService } from "src/app/core/services/danh-sach-nguoi-dung.service";
import { UsersService } from "src/app/core/services/users.service";
import { UserRegister } from 'src/app/core/models/user-register';
import { User } from 'src/app/core/models/user';
import swal from 'sweetalert2';
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  @ViewChild('closeupdate') closeupdate;
  constructor(
    private DSNguoiDung: DanhSachNguoiDungService,
    private usersServices: UsersService
  ) { }
  nguoiDung: User = {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maLoaiNguoiDung: "",
    hoTen: ""
  };
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
    return new Array(Math.ceil(length / 10));
  }

  updatePageNumber(pageNum) {
    this.startPageNumber = pageNum * 10;
    this.endPageNumber = this.startPageNumber + 10;
  }

  form: UserRegister = new UserRegister();
  onSubmit() {
    console.log(this.form);
    const values = { ...this.form, maNhom: 'GP01' };
    this.usersServices.dangKy(values).subscribe();
    this.closebutton.nativeElement.click();
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã đăng kí thành công',
      showConfirmButton: false,
      timer: 1500
    })
  }

  editUser(taiKhoan) {
    this.nguoiDung = {
      ...this.danhSachNguoiDung.find(res => {
        return res.taiKhoan === taiKhoan;
      })
    }
    console.log(this.nguoiDung === this.danhSachNguoiDung[0]);
  }

  updateUser() {
    console.log(this.nguoiDung);
    this.closeupdate.nativeElement.click();
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã update thành công',
      showConfirmButton: false,
      timer: 1500
    })
  }

  xoaUser(ele: string) {

  }
}
