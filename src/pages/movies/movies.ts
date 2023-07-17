
import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
//import { Observable } from 'rxjs';
import { NavController } from 'ionic-angular';
import { MovieDetailPage } from '../movie-detail/movie-detail';

@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [MoviesService]
})

export class MoviesPage  {
  movies: any[];

constructor( private moviesService: MoviesService , public navCtrl: NavController){
}

ionViewDidLoad() {
  this.moviesService.getMovies().subscribe( (data: any) => {
    this.movies = data.Search;
    console.log(data);
  });
}
openMovieDetail(imdbID: string) {
  this.navCtrl.push(MovieDetailPage, { imdbID: imdbID });
}
}




 
