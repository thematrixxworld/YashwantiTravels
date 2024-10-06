import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {

  constructor(public dialogRef: MatDialogRef<AdminPanelComponent>) {}
  // Models for the forms
  signupModel = {
    name: '',
    email: '',
    password: ''
  };

  signinModel = {
    email: '',
    password: ''
  };

  // Reference for the container element
  rightPanelActive: boolean = false;

  // Toggle between Sign In and Sign Up form
  toggleForms(panel: string): void {
    this.rightPanelActive = panel === 'signUp';
  }

  // Sign Up form submission logic
  onSignup(): void {
    if (this.signupModel.name && this.signupModel.email && this.signupModel.password) {
      // Implement sign up logic here
      console.log('Sign up with:', this.signupModel);
    }
  }

  // Sign In form submission logic
  onSignin(): void {
    if (this.signinModel.email && this.signinModel.password) {
      // Implement sign in logic here
      console.log('Sign in with:', this.signinModel);
    }
  }
}
