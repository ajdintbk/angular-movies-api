import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../movie-details-model';
import { MoviesService } from '../movies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie:MovieDetails = null;

  constructor(private moviedetailsService : MoviesService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.moviedetailsService.getMovieById(+this.route.snapshot.paramMap.get('id')).subscribe(
      data=> this.movie=data
      );
  
  }

  back() {
    this.location.back();
  }

}
