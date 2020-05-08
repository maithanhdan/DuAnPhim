import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private usersServices: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      taiKhoan: new FormControl('', [Validators.required]),
      matKhau: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
    // Tương tự bên register, gọi api đăng nhập
    // Kiểm tra ma loại người dùng từ api
    // Nếu là khachhang thì navigate qua '/'
    // Nếu là quantri thì navigate qua '/admin'
    this.usersServices.dangNhap(this.form.value).subscribe((res) => {
      if (res.maLoaiNguoiDung === 'KhachHang') {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/admin']);
      }
    });
  }
}
