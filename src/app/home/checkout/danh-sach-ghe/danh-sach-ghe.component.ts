import { Component, OnInit, Input } from "@angular/core";
import { UsersService } from "src/app/core/services/users.service";
import { Ghe } from "./../../../core/models/ghe";


@Component({
  selector: "app-danh-sach-ghe",
  templateUrl: "./danh-sach-ghe.component.html",
  styleUrls: ["./danh-sach-ghe.component.scss"]
})
export class DanhSachGheComponent implements OnInit {
  user: any;
  @Input() danhSachGhe: Ghe[]=[];
  // mangGhe:Ghe[]=[]
  mangGheDangDat: any[] = [];
  constructor(private userServive: UsersService) { }
  ngOnInit(): void {
    this.user = this.userServive.getCurrentUser();
    console.log(this.danhSachGhe);
  }
 datGhe(gheDangDat:any){
   
 }
}
