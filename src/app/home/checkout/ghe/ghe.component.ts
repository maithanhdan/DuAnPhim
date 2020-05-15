import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "events";

@Component({
  selector: "app-ghe",
  templateUrl: "./ghe.component.html",
  styleUrls: ["./ghe.component.scss"]
})
export class GheComponent implements OnInit {
  @Input() ghe: any;
  @Output() eventDatGhe = new EventEmitter();
  dangDat: boolean = false;

  constructor() {}
  ngOnInit(): void {
    console.log(this.ghe);
  }
  datGhe() {
    // this.dangDat = !this.dangDat;
    // const gheDangDat = {
    //   SoGhe: this.ghe.stt,
    //   Gia: this.ghe.giaVe,
    //   DangDat: this.dangDat,
    // };
    // this.eventDatGhe.emit(gheDangDat);
  }
}
