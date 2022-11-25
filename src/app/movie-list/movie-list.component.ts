import { Component } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: any[] = []

  constructor(
    public fetchApi: FetchApiDataService,
    ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): any {
    this.fetchApi.getAllMovies().subscribe(
      (result) => {
       this.movies = result; 
      },
      (err) => {
        console.log("Error while fetching movies", err)
      }
    );
  }
}
