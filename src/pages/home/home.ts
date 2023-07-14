// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { MoviesPage } from '../movies/movies';

// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {
//   navItems: any[];
//   navigateToMovies() {
//     this.navCtrl.push(MoviesPage)
//   }


//   constructor(public navCtrl: NavController) {
//     this.navItems = [
//       { title: 'Home', page: 'AboutPage' },
//       { title: 'About', page: 'AboutPage' },
//       { title: 'Contact', page: 'ContactPage' },
//       { title: 'Movies', page: 'MoviesPage' },

//     ];

//   }

// }

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesPage } from '../movies/movies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  navigateToMovies() {
    this.navCtrl.push(MoviesPage);
  }
}
