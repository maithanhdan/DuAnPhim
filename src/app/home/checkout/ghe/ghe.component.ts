import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CheckoutComponent } from '../checkout.component';
@Component({
  selector: "app-ghe",
  templateUrl: "./ghe.component.html",
  styleUrls: ["./ghe.component.scss"]
})
export class GheComponent implements OnInit {
  @Input() ghe: any;
  @Input() mangGheThanhToan: any;
  @Output() eventDatGhe = new EventEmitter();
  dangDat: boolean = false;

  constructor() { }
  ngOnInit(): void {
    console.log(this.ghe);
  }
  datGhe() {
    if (this.mangGheThanhToan.length < 8 || this.dangDat) {
      this.dangDat = !this.dangDat;
      const gheDangDat = {
        SoGhe: this.ghe.stt,
        Gia: this.ghe.giaVe,
        DangDat: this.dangDat,
        LoaiGhe: this.ghe.loaiGhe,
      };
      this.eventDatGhe.emit(gheDangDat);
    }
  }
}
