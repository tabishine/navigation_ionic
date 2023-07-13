import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { IonicPage} from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  styleUrls: ['movies.scss'],
})

export class MoviesPage  {
  results: Observable<any>;
  type: string;

  //questions ???
  
  constructor(private moviesService: MoviesService){}
  searchChanged() {
    this.results = this.moviesService.getMovies();
  }
  } 
 

 
