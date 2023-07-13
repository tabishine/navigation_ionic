import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  navItems: any[];

  constructor(public navCtrl: NavController) {
    this.navItems = [
      { title: 'Home', page: 'AboutPage' },
      { title: 'About', page: 'AboutPage' },
      { title: 'Contact', page: 'ContactPage' },
      { title: 'Movies', page: 'MoviesPage' },
    ];
  }

  navigate(item: any) {
    this.navCtrl.push(item.page);
  }
}

