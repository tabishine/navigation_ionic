import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { movies } from './movies';

@NgModule({
  declarations: [
    movies,
  ],
  
  imports: [
    IonicPageModule.forChild(movies),
  ],
})

export class MoviesPageModule {}
