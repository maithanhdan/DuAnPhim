import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { Movie } from '../models/movie';
import { MovieRegister } from '../models/movie-register';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private api: ApiService) {}

  public layDanhSachPhim(): Observable<Movie[]> {
    // Chỉ có 1 params thì dùng kiểu này cho nhanh
    // const params = new HttpParams().set('maNhom', 'GP01');
    // Từ 2 params trở lên
    let params = new HttpParams();
    params = params.append('maNhom', 'GP01');
    // params = params.append('param', 'value');
    return this.api.get(
      'QuanLyPhim/LayDanhSachPhim',
      // headers: { Authorization: 'Bearer abc' },
      { params }
    );
  }

  public layChiTietPhim(maPhim: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('maNhom', 'GP01');
    params = params.append('maPhim', maPhim);
    return this.api.get('QuanLyPhim/LayThongTinPhim', { params });
  }

  public dangKyPhim(values : MovieRegister): Observable<any> {
    return this.api.post('QuanLyPhim/ThemPhim', values);
  }
}
