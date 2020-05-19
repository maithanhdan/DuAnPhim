import { Pipe, PipeTransform } from "@angular/core";
import { User } from "./../../core/models/user";
@Pipe({
  name: "myFilter"
})
export class MyFilterPipe implements PipeTransform {
  transform(danhSachNguoiDung: User[], search: string) {
    if (search == null) {
      return danhSachNguoiDung;
    }
    return danhSachNguoiDung.filter(
      ele =>
        ele.taiKhoan.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }
}
