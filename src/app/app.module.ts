import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../services/movies.service';

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { MoviesPage } from '../pages/movies/movies';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';




@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    ContactPage,
    AboutPage, //app.component - root to HomePage
    MoviesPage,
    MovieDetailPage
  ],

  //modules importing
  imports:  [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],

  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    AboutPage,
    MoviesPage, 
    MovieDetailPage
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    MoviesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
}
)

export class AppModule { }
