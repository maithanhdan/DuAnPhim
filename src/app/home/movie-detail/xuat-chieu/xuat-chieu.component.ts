import { Component, OnInit, Input } from '@angular/core';
import { CinemasService } from 'src/app/core/services/cinemas.service';

@Component({
  selector: 'app-xuat-chieu',
  templateUrl: './xuat-chieu.component.html',
  styleUrls: ['./xuat-chieu.component.scss']
})
export class XuatChieuComponent implements OnInit {
  @Input() lichChieu: any[];
  lichChieuTheoNgay: any[]; 
  constructor(public cinemasService: CinemasService) { }

  ngOnInit(): void {
    // Kiểm tra xem hệ thống rạp đã có data chưa
    // Nếu có thì k cần gọi lại API ngược lại thì gọi API
    // Object.keys(heThongRap).length === 0 cách kiểm tra Object rỗng
    const heThongRap = this.cinemasService.heThongRap();
    if (heThongRap.length === 0) {
      // this.cinemasService.layThongTinHeThongRap().subscribe dùng để gọi ra các logo hoặc tên Hệ thống rạp
      this.cinemasService.layThongTinHeThongRap().subscribe(res => {
        console.log(res[0].maHeThongRap);
       this.cinemasService.layCumRapTheoHeThong(res[0].maHeThongRap).subscribe();//dùng để khi mới render xong sẽ hiện các tên rạp theo cụm rạp
      });
    }
  }

  chonHeThongRap(maHeThongRap: string) {
    this.cinemasService.layCumRapTheoHeThong(maHeThongRap).subscribe();
  }

  chonNgayChieu(date) {
    if (!this.lichChieu) return [];
    this.lichChieuTheoNgay = this.lichChieu.filter(item => {
      const ngayChieu = item.ngayChieuGioChieu.split('T')[0];
      return ngayChieu === date;
    })
  }

  filterLichChieuTheoCumRap(maCumRap: string) {
    if (!this.lichChieuTheoNgay) return [];
    return this.lichChieuTheoNgay.filter((item) => item.thongTinRap.maCumRap === maCumRap);
  }

}
