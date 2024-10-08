// side-bar.component.ts
import { Component, OnInit } from '@angular/core';
// Import the Feather icons library
import feather from 'feather-icons';

// Define the component decorator to set metadata for the SideBarComponent
@Component({
  // The selector is the HTML tag that represents this component
  selector: 'app-side-bar',
  // The HTML template that defines the layout and structure of the component
  templateUrl: './side-bar.component.html',
  // The stylesheet for the component, allowing for custom styling
  styleUrls: ['./side-bar.component.scss']
})
// Create the SideBarComponent class that implements OnInit interface
export class SideBarComponent implements OnInit {
 
  // Constructor is a method that runs when the component is created
  constructor() { }

  // ngOnInit is a lifecycle hook that runs after the component is initialized
  ngOnInit(): void {
    // This line initializes the Feather icons library to replace any placeholder icons with actual SVG icons
    feather.replace();
  }
}
