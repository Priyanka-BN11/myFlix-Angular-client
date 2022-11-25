import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
      public fetchApiData: FetchApiDataService,
      public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
      public snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
  }
  
  // This is the function responsible for sending the form inputs to the backend
  registerUser(): void {
      console.log("User Data", this.userData)
      this.fetchApiData.userRegistration(this.userData).subscribe(
        (result) => {
          console.log("Success", result)
        // Logic for a successful user registration goes here! (To be implemented)
       this.dialogRef.close(); // This will close the modal on success!
       console.log("Login Success", result);
       this.snackBar.open(result, 'OK', {
          duration: 2000
       });
      }, (err) => {
        console.log("Error while login", err)
        this.snackBar.open(err, 'OK', {
          duration: 2000
        });
      });
    }
}
