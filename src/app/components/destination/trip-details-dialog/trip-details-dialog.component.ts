// trip-details-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trip-details-dialog',
  templateUrl: './trip-details-dialog.component.html',
  styleUrls: ['./trip-details-dialog.component.scss']
})
export class TripDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TripDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    // Logic for confirming the trip
    this.dialogRef.close(true); // Close dialog and return true
  }

  onCancel(): void {
    this.dialogRef.close(false); // Close dialog and return false
  }
}
