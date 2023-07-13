import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesService } from '../../services/movies.service';
/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
  styleUrls: ['./movie-detail.scss'],
})



export class MovieDetailPage {

 //sort by ID 
  constructor(
    private moviesService: MoviesService) {}
   
}
