import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AdminPanelComponent } from '../nav-bar/admin-panel/admin-panel.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HomeComponent } from '../home/home.component';
import { DestinationComponent } from '../destination/destination.component';
import { TripDetailsDialogComponent } from '../destination/trip-details-dialog/trip-details-dialog.component';




@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    AdminPanelComponent,
    HomeComponent,
    DestinationComponent,
    TripDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    RouterModule,
    MatDialogModule
    
  ],
  exports:[
    NavBarComponent,
    SideBarComponent,
    AdminPanelComponent,
    HomeComponent,
    DestinationComponent,
    TripDetailsDialogComponent

  ]

})
export class SharedModule { }
