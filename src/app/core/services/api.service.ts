import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private ROOT_URL: string = 'http://movie0706.cybersoft.edu.vn/api';

  private handleError(err: any) {
    console.log(err);
    if (err.status === 401) {
      // Logout
    }
    if (err.status === 404) {
      // Khi mà cái url của mình bị sai
    }
    if (err.status === 500) {
      // Show toast ra cho người dùng thấy
    }
    // submit 1 cái form lên server
    // Trường hợp validation mà trùng email ....
    // Cái throwError nó sẽ giúp ném cái error này ra component
    // để người dùng hiện thị cái lỗi mà BE trả về
    return throwError(err);
  }
  // Cung cấp 4 phương thức get post put delete những services khác
  // sẽ inport api services để sử dụng
  public get(url: string, options?: any): Observable<any> {
    return this.http
      .get(`${this.ROOT_URL}/${url}`, options)
      .pipe(catchError(this.handleError));
  }

  public post(url: string, body: any, options?: any): Observable<any> {
    return this.http
      .post(`${this.ROOT_URL}/${url}`, body, options)
      .pipe(catchError(this.handleError));
  }

  public put(url: string, body: any, options?: any): Observable<any> {
    return this.http
      .put(`${this.ROOT_URL}/${url}`, body, options)
      .pipe(catchError(this.handleError));
  }

  public delete(url: string, options?: any): Observable<any> {
    return this.http
      .delete(`${this.ROOT_URL}/${url}`, options)
      .pipe(catchError(this.handleError));
  }
}
