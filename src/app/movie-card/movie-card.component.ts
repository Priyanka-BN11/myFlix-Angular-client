import { Component } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
 //initializing movies variable as array
 //This is where the movies returned from the API call will be kept.
  movies: any[] = [];

 constructor(public fetchApiData:FetchApiDataService) {}
 // lifecycle hook
//this function is similar to componentdidmount which will execute first 
 ngOnInit():void{
  //getMovies function called
  this.getMovies();
 }
 //getMovies function defined
 // used to fetch the movies from the FetchApiDataService service with the help of getAllMovies()
 getMovies():void{
  this.fetchApiData.getAllMovies().subscribe((resp:any) => {
    this.movies=resp;
    console.log(this.movies);
    return this.movies;
  });
 }
}
