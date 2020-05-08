import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from "./../../../core/models/movie";
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private movieService : MoviesService) { }
  movie :Movie[];
  ngOnInit(): void {
    this.movieService.layDanhSachPhim().subscribe(
      data=>{
        this.movie=data
      }
    )
  }

}
