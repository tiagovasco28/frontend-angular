import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customsnackbar',
  imports: [CommonModule],
  templateUrl: './customsnackbar.component.html',
  styleUrl: './customsnackbar.component.scss'
})
export class CustomsnackbarComponent {

    constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackBarRef: MatSnackBarRef<CustomsnackbarComponent>
  ) {}

  cerrar() {
    this.snackBarRef.dismiss();
  }
}
