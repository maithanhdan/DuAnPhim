import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() phim: Movie;
  constructor() {

  }

  ngOnInit(): void { }
}
