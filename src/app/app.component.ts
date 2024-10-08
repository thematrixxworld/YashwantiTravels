import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarVisible: boolean = false; // State variable to track sidebar visibility

  // Method to handle sidebar toggle
  onToggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible; // Toggle the sidebar visibility
  }
}
