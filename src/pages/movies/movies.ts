import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  styleUrls: ['movies.scss'],
})

export class movies  {
  results: Observable<any>;
  type: string;

  constructor(private moviesService: MoviesService){}

  searchChanged() {
    this.results = this.moviesService.getMovies();
  }
  }
 

 
