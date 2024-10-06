import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YashwantiTravels';
 // Property to manage the state of the sidebar
 isSidebarOpen: boolean = false;

 // Method to toggle the sidebar open/close
 toggleSidebar() {
   this.isSidebarOpen = !this.isSidebarOpen; // Toggle the boolean value
 }
}
