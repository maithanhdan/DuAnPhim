import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thanh-toan',
  templateUrl: './thanh-toan.component.html',
  styleUrls: ['./thanh-toan.component.scss']
})
export class ThanhToanComponent implements OnInit {
  @Input() thongTinPhim: any;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.thongTinPhim)
    console.log(this.thongTinPhim);
    
  }

}
