import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ThongTinLichChieuHeThongService {
  constructor(private api: ApiService) {}
  public layLichChieuChiTiet(): Observable<any> {
    let params = new HttpParams();
    params = params.append("maNhom", "GP01");
    return this.api.get("QuanLyRap/LayThongTinLichChieuHeThongRap", { params });
  }
}
