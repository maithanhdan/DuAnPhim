import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  chiTietPhim: any;
  lichChieu: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    // Khi route thay đổi nó sẽ kiểm tra xem cái route đó có
    // param nào không, nếu có nó sẽ trả về thông qua biến result
    this.activatedRoute.queryParams.subscribe((param) => {
      console.log(param);
      // Lấy được maphim => gọi api lấy chitietphim
      this.moviesService.layChiTietPhim(param.maPhim).subscribe((result) => {
        const { lichChieu, ...chiTietPhim } = result;
        this.chiTietPhim = chiTietPhim;
        this.lichChieu = lichChieu;
        console.log(this.chiTietPhim);
        console.log(this.lichChieu);
      });
    });
  }
}
