import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CinemasService {
  private heThongRapSubject = new BehaviorSubject([]);
  private cumRapTheoHeThongSubject = new BehaviorSubject([]);

  constructor(private api: ApiService) { }

  public layThongTinHeThongRap(maHeThongRap = ''): Observable<any> {
    return this.api.get(`QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${maHeThongRap}`
    ).pipe(
      tap((res) => {
        this.heThongRapSubject.next(res);
      })
    )
  }

  public heThongRap() {
    return this.heThongRapSubject.value;
  }

  public layCumRapTheoHeThong(maHeThongRap: string): Observable<any> {
    return this.api.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`).pipe(tap((res) => {
      this.cumRapTheoHeThongSubject.next(res);
    }))
  }

  public cumRapTheoHeThong() {
    return this.cumRapTheoHeThongSubject.value;
  }
}
