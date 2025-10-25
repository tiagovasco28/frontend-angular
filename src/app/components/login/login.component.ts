import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationsService } from '../../services/notifications.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatSnackBarModule, NavbarComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notification: NotificationsService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        // ✅ El token viene en response.token
        let token = response.token;
        console.log('Token:', token);

        this.notification.exito('Conectado con éxito');
        // (Opcional) Guardarlo en localStorage
        localStorage.setItem('token', token);    
        localStorage.setItem('email', email);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error de login:', err);
        this.notification.error('Usuario o contraseña incorrectos');
      },
    });
  }


 
}
