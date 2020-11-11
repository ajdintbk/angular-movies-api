import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TvShowDetails } from './tvshow-details-model';

@Injectable({
    providedIn: 'root'
})
export class TvShowService {

    private readonly populartvshowsUrl: string = 'https://api.themoviedb.org/3/tv/popular?api_key=03cbd846c558f7ec368a815cf83e8630';
    private readonly tvshowByIdUrl: string = "https://api.themoviedb.org/3/tv/";
    private api_key = "api_key=03cbd846c558f7ec368a815cf83e8630";


    options = new HttpHeaders().set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');

    constructor(public http: HttpClient) { }

    getPopularTvShows(): any {
        return this.http.get(this.populartvshowsUrl);
    }

    getTvShowById(id : number) :Observable<TvShowDetails>{
        return this.http.get<TvShowDetails>(this.tvshowByIdUrl+id+"?"+this.api_key);
    }

    getTvShowTrailer(id : number){
        return this.http.get(this.tvshowByIdUrl+id+"/videos?"+this.api_key);
    }


}
