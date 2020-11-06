import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Movie } from './movie-model';
import { TvShow } from './tvshow-model';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private readonly searchUrl: string = 'https://api.themoviedb.org/3/search';
    private readonly optional: string = "?api_key=03cbd846c558f7ec368a815cf83e8630&language=en-US&page=1&include_adult=false&query=";
    timer;
    searchString : string = "";
    public movies:Movie[]= [];
    public tvshows: TvShow[] = [];
  
    options = new HttpHeaders().set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');

    constructor(private http: HttpClient, private router : Router) { }


    search(){
        if(this.searchString.length > 3){
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            this.http.get(this.searchUrl+ (this.router.url == "/" ? "/tv" : this.router.url)  +this.optional+this.searchString).subscribe( data => {
              if(this.router.url == "/movie"){
                this.tvshows = [];
                this.movies = data['results'];
              }else{
                this.movies = [];
                this.tvshows = data['results'];
              }
            });
          }, 1000);
        }
        if(this.searchString.length <=3){
          this.movies = [];
          this.tvshows = [];
        }
      }
    



}
