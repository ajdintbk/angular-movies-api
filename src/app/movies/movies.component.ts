import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Movie } from '../movie-model';
import { SearchComponent } from '../search/search.component';
import { SearchService } from '../search.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:Movie[]= [];
  moviesSearch:string;

  constructor(private movieService: MoviesService,private http: HttpClient, public searchService : SearchService) { 
  }
  
  ngOnInit(): void {
    this.movieService.getTopMovies().subscribe( data => {
      if(data.hasOwnProperty('results' )){
        this.movies = data['results'];
      }
    });
    this.searchService.search();
  } 

}
