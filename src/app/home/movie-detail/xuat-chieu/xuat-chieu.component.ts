import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-xuat-chieu',
  templateUrl: './xuat-chieu.component.html',
  styleUrls: ['./xuat-chieu.component.scss'],
})
export class XuatChieuComponent implements OnInit {
  @Input() lichChieu: any[];
  constructor() {}

  ngOnInit(): void {}
}
