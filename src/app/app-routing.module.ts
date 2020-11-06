import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowDetailsComponent } from './tvshow-details/tvshow-details.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

const routes: Routes = [
  { path: '', component: TvshowsComponent },
  { path: 'movie', component: MoviesComponent },
  { path: 'tv', component: TvshowsComponent },
  {path: 'moviedetails/:id',component: MovieDetailsComponent},
  {path: 'tvshowdetails/:id',component: TvshowDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
