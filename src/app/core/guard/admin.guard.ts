import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = JSON.parse(localStorage.getItem('userLogin'));
    if (user) {
      if (user.maLoaiNguoiDung === 'QuanTri') {
        return true;
      }
      // Nếu không phải quản trị thì redirect về trang home
      this.router.navigate(['/']);
      return false;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
