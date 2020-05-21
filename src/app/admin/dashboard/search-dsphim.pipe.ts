import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchDSPhim"
})
export class SearchDSPhimPipe implements PipeTransform {
  transform(danhSachPhim: any, searchDSPhim: string) {
    if (searchDSPhim == null) {
      return danhSachPhim;
    }
    return danhSachPhim.filter(
      ele =>
        ele.tenPhim.toLowerCase().indexOf(searchDSPhim.toLowerCase()) !== -1
    );
  }
}

