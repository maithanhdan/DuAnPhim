import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/core/models/user-register';
import { UsersService } from 'src/app/core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: UserRegister = new UserRegister();
  constructor(private usersServices: UsersService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form);
    // Gọi api
    const values = { ...this.form, maNhom: 'GP01' };
    this.usersServices.dangKy(values).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/login']);
    });
  }
}
