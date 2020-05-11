import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpParams } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ThongTinLichChieuHeThongService {
  constructor(private api: ApiService) {}
  private thongTinLichChieuChiTietSubject = new BehaviorSubject([]);
  public layLichChieuChiTiet(): Observable<any> {
    let params = new HttpParams();
    params = params.append("maNhom", "GP01");
    return this.api
      .get("QuanLyRap/LayThongTinLichChieuHeThongRap", { params })
      .pipe(
        tap(rs => {
          this.thongTinLichChieuChiTietSubject.next(rs);
        })
      );
  }
  public getThongTinLichChieuSubject() {
    return this.thongTinLichChieuChiTietSubject.value;
  }
}
