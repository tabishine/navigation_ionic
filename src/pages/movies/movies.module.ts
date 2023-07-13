
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MoviesPage } from './movies';
import { IonicPageModule } from 'ionic-angular';

//router or by component implement MoviesPage path

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(MoviesPage)
  ],

  declarations: [MoviesPage]
})

export class MoviesPageModule {} 