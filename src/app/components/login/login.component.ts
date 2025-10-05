import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

   loginForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';


    constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() { return this.loginForm.controls; }

   onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }

    const { username, password } = this.loginForm.value;

    // Simulación de login correcto
    if (username === 'admin' && password === '123456') {
      this.successMessage = 'Login successful! Welcome back.';
    } else {
      this.errorMessage = 'Invalid username or password.';
    }

    console.log('Login attempt:', { username, password });
  }

}
