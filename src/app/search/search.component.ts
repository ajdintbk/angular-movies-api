import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie-model';
import { SearchService } from '../search.service';
import { TvShow } from '../tvshow-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private readonly searchUrl:string = 'https://api.themoviedb.org/3/search'; 
  private readonly options : string = "?api_key=03cbd846c558f7ec368a815cf83e8630&language=en-US&page=1&include_adult=false&query=";

  timer;
  searchString:string;
  movies:Movie[]= [];
  tvshows: TvShow[] = [];
  constructor(private http: HttpClient, private router : Router, public searchService : SearchService) { 
  }
  ngOnInit(): void {
  }

  search(){
     this.searchService.search();
  }

}
