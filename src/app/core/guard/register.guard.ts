import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from 'src/app/auth/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class RegisterGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let flag = false;

    for (let item in component.form) {
      if (component.form[item]) {
        console.log(component.form[item]);
        flag = true;
      }
    }

    if (flag) {
      let cf = confirm('Bạn có chắc muốn rời đi');
      if (cf) {
        return true;
      }
      return false;
    }

    return true;
  }
}
