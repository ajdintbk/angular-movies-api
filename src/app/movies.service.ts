import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MovieDetails } from './movie-details-model';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    private readonly topRatedMoviesUrl: string = 'https://api.themoviedb.org/3/movie/popular?api_key=03cbd846c558f7ec368a815cf83e8630';
    private readonly movieByIdUrl: string = "https://api.themoviedb.org/3/movie/";
    private api_key = "api_key=03cbd846c558f7ec368a815cf83e8630";


    options = new HttpHeaders().set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');

    constructor(public http: HttpClient) { }

    getTopMovies(): any {
        return this.http.get(this.topRatedMoviesUrl);
    }

    getMovieById(id : number) :Observable<MovieDetails>{
        return this.http.get<MovieDetails>(this.movieByIdUrl+id+"?"+this.api_key);
    }


}
