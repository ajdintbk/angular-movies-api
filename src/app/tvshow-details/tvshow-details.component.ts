import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowDetails } from '../tvshow-details-model';
import { TvShowService } from '../tvshows.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css']
})
export class TvshowDetailsComponent implements OnInit {
  tvshow: TvShowDetails = null;
  constructor(private tvshowService : TvShowService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.tvshowService.getTvShowById(+this.route.snapshot.paramMap.get('id')).subscribe(
      data=> this.tvshow = data
      );
  }
  
  back() {
    this.location.back();
  }

}
