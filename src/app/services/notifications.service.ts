import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CustomsnackbarComponent } from '../components/customsnackbar/customsnackbar.component';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackBar: MatSnackBar) {}

  private mostrar(mensaje: string, clase: string, icono: string) {
    const config: MatSnackBarConfig = {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [clase],
      data: { mensaje, clase, icono }
    };
    this.snackBar.openFromComponent(CustomsnackbarComponent, config);
  }

  neutro(mensaje: string) {
    this.mostrar(mensaje, 'snackbar-neutro', '💬');
  }

  exito(mensaje: string) {
    this.mostrar(mensaje, 'snackbar-exito', '✅');
  }

  error(mensaje: string) {
    this.mostrar(mensaje, 'snackbar-error', '❌');
  }

  aviso(mensaje: string) {
    this.mostrar(mensaje, 'snackbar-aviso', '⚠️');
  }
}
