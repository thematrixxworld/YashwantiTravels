import { Dialog } from '@angular/cdk/dialog';
import { Component, Output, EventEmitter  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Output() sidebarToggle = new EventEmitter<void>();
  sidebarVisible = false;

  // Method to emit the toggle event
  toggleSidebar() {
    this.sidebarToggle.emit(); // Emit an event to notify the parent component
    this.sidebarVisible = !this.sidebarVisible;
  }
 

    

  constructor(public dialog:MatDialog){

  }
    
  isPanelOpen: boolean = false;

  openAdminPanelDialog(): void{
    this.dialog.open(AdminPanelComponent,{
      width: '700px',
      disableClose: true,
      backdropClass: 'custom-backdrop' // Optional: You can add a custom backdrop class if needed
    })  //This will open the panel
   }

    
}
