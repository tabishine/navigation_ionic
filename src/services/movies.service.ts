
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class MoviesService {
  
    constructor(private http: HttpClient) {}

    //check these GET HTTP
    getMovies(): Observable<any> {
        const url = 'http://www.omdbapi.com/?s=batman&apikey=905483bc';
        return this.http.get(url)
        .map(response => response)
        .catch(error => {
          console.log('error', error);
          return Observable.throw(error)
        })
      }

      getMovieById(id: string): Observable<any> {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=905483bc`;
        return this.http.get(url)
          .map(response => response)
          .catch(error => {
            console.log('Error occurred:', error);
            return Observable.throw(error);
          });
      }
}


//getMovies with API links 
//getMovieById
