
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieDetailPage } from '../movie-detail/movie-detail';
import { MoviesPage } from '../movies/movies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  navItems: any[];
  constructor(public navCtrl: NavController) {
    this.navItems = [
      { title: 'Movies', icon: 'film', page: MoviesPage },
      { title: 'MovieDetail', icon: 'film', page: MovieDetailPage },
    ];
  }
  //app starts here
  openMoviesPage() {
     this.navCtrl.push(MoviesPage)
  }
}

