// destination.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TripDetailsDialogComponent } from './trip-details-dialog/trip-details-dialog.component';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent {
  from: string = ''; // Initialize with an empty string
  to: string = '';
  tripDuration: string = '';
  departureDate: string = '';
  returnDate: string = '';
  driverName: string = 'Rushikesh Nagare'; // Sample driver name
  carNumber: string = 'MH15 SN 7503'; // Sample car number
  durations = ['1 Day', '2 Days', '3 Days']; // Example durations

  constructor(public dialog: MatDialog) {}

  todayDate(): string {
    const today = new Date();
    const dd: string = String(today.getDate()).padStart(2, '0');
    const mm: string = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy: string = today.getFullYear().toString();
    return `${yyyy}-${mm}-${dd}`;
  }

  submitForm() {
    // Validate inputs
    if (!this.from) {
      alert('Please enter departure location.');
      return;
    }
    if (!this.to) {
      alert('Please enter destination.');
      return;
    }
    if (!this.tripDuration) {
      alert('Please select a trip duration.');
      return;
    }
    if (!this.departureDate) {
      alert('Please select a departure date.');
      return;
    }
    if (!this.returnDate) {
      alert('Please select a return date.');
      return;
    }

    const today = new Date();
    const selectedDepartureDate = new Date(this.departureDate);
    const selectedReturnDate = new Date(this.returnDate);

    // Check if the selected dates are in the past
    if (selectedDepartureDate < today) {
      alert('Departure date cannot be in the past.');
      return;
    }
    if (selectedReturnDate < today) {
      alert('Return date cannot be in the past.');
      return;
    }

    // Check if return date is before departure date
    if (selectedReturnDate < selectedDepartureDate) {
      alert('Return date must be after departure date.');
      return;
    }

    const tripDetails = {
      from: this.from,
      to: this.to,
      tripDuration: this.tripDuration,
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      driverName: this.driverName,
      carNumber: this.carNumber
    };

    const dialogRef = this.dialog.open(TripDetailsDialogComponent, {
      width: '400px',
      data: tripDetails
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Trip confirmed:', tripDetails);
        // Handle confirmed trip logic here
      } else {
        console.log('Trip cancelled.');
      }
    });
  }
}