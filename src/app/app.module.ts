import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../services/movies.service';
import { MoviesPage } from '../pages/movies/movies';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';
import { HomePage } from '../pages/home/home';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoviesPage,
    MovieDetailPage //app.component - root to HomePage
  ],

  //modules importing
  imports:  [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],

  bootstrap: [MyApp],

  entryComponents: [
    MyApp,
    //HomePage,
    MoviesPage,
    MovieDetailPage
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    MoviesService,
  ]
})

export class AppModule { }
