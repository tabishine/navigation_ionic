
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()

export class MoviesService {
    private apiUrl = 'http://www.omdbapi.com/';
    private apiKey = '905483bc';

    constructor(private http: HttpClient) { }

    //check these GET HTTP
    getMovies(): Observable<any> {
        const url = `${this.apiUrl}?s=batman&apikey=${this.apiKey}`;
        return this.http.get(url);
      }

    getMovieById(id: string): Observable<any> {
        const url = `${this.apiUrl}?i=${id}&apikey=${this.apiKey}`;
        return this.http.get(url);
      }
}



//getMovies with API links 
//getMovieById
