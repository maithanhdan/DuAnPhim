import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.user = this.usersService.getCurrentUser();
    console.log(this.user);
  }
}
