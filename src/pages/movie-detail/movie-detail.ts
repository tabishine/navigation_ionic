import { Component } from '@angular/core';
import { IonicPage,  NavParams } from 'ionic-angular';
import { MoviesService } from '../../services/movies.service';

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: './movie-detail.html',
})



export class MovieDetailPage  {
  movieDetails: any = {};


 //sort by ID 

  constructor(
    private moviesService: MoviesService, private navParams: NavParams) {}
    ionViewDidLoad() {
      const imdbID = this.navParams.get('imdbID');
      if (imdbID) {
        this.moviesService.getMovieById(imdbID).subscribe(
          (response) => {
            // Обработка полученной детальной информации по фильму
            this.movieDetails = response;
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }
    
    
   
}
