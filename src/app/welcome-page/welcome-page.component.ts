import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  /**
 * This is the function openUserRegistrationDialog() that will open the dialog when the signup button is clicked 
 */
  // This is the function that will open the dialog when the signup button is clicked  
  openUserRegistrationDialog(): void {
      this.dialog.open(UserRegistrationFormComponent, {
  // Assigning the dialog a width
      width: '280px'
      });
    }
    openUserLoginDialog(): void {
      this.dialog.open(UserLoginFormComponent, {
  // Assigning the dialog a width
      width: '280px'
      });
    }
    openMoviesDialog():void{
      this.dialog.open(MovieCardComponent,{
        width: '500px'
      });
    }

}
