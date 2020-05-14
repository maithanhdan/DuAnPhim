import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpParams } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CheckoutService {
  constructor(private api: ApiService) { }
  private phongVeSubject = new BehaviorSubject([]);
  public layDanhSachPhongVe(maLichChieu: string): Observable<any> {
    let params = new HttpParams();
    params = params.append("MaLichChieu", maLichChieu);
    return this.api.get("QuanLyDatVe/LayDanhSachPhongVe", { params }).pipe(
      tap(res => {
        this.phongVeSubject.next(res);
      })
    );
  }

  public danhSachphongVe() {
    return this.phongVeSubject.value;
  }
}
