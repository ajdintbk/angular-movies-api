import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowDetails } from '../tvshow-details-model';
import { TvShowService } from '../tvshows.service';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css']
})
export class TvshowDetailsComponent implements OnInit {
  tvshow: TvShowDetails = null;
  trailerUrl : string = "https://www.youtube.com/embed/";
  safeUrl = null;

  constructor(private tvshowService : TvShowService, private route: ActivatedRoute, private location: Location, private _sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
    this.tvshowService.getTvShowById(+this.route.snapshot.paramMap.get('id')).subscribe(
      data=> this.tvshow = data
      );

      this.tvshowService.getTvShowTrailer(+this.route.snapshot.paramMap.get('id')).subscribe(
        data => this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.trailerUrl + data["results"][0]["key"])
      );

    }
    
    

    back() {
      console.log(this.trailerUrl);
    this.location.back();
  }

}
