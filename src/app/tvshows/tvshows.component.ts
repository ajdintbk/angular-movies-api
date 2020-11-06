import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { TvShow } from '../tvshow-model';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {
  private readonly topRatedTvShowsUrl:string = 'https://api.themoviedb.org/3/tv/popular?api_key='; 
  private key:string= "03cbd846c558f7ec368a815cf83e8630";

  tvshows: TvShow[] = [];
  tvshowsSearch:string;

  constructor(private http: HttpClient, public searchService : SearchService) { 
    this.http.get(this.topRatedTvShowsUrl+this.key).subscribe( data => {
      if(data.hasOwnProperty('results' )){
        this.tvshows = data['results'];
      }
    });
      this.searchService.search();
  }

  ngOnInit(): void {
  }

}
