import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DanhSachNguoiDungService {

  constructor(private api : ApiService) { }
  
  private danhSachNguoiDungSubject =new BehaviorSubject([]);

  public layDanhSachNguoiDung():Observable<any>{
    let params = new HttpParams();
    params = params.append('maNhom', 'GP01');
    return this.api.get(
      'QuanLyNguoiDung/LayDanhSachNguoiDung',
      { params }
    ) .pipe(
      tap(res => {
        this.danhSachNguoiDungSubject.next(res);
      })
    );
  }
  public danhSachNguoiDung() {
    return this.danhSachNguoiDungSubject.value;
  }
}
