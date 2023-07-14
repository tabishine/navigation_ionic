import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-movies',
  templateUrl: './movies.html',
  //styleUrls: ['movies.scss'],
})

export class MoviesPage implements OnInit  {
  results: Observable<any>;
  
  constructor(private moviesService: MoviesService, private navCtrl: NavController){}
  
  ngOnInit() {
    this.moviesService.getMovies().subscribe(
      (response) => {
        // Обработка полученного списка фильмов
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );

  }
  openMovieDetails(imdbID: string) {
    this.navCtrl.push('MovieDetailPage', {imdbID: imdbID} );
  }
  
}

 
