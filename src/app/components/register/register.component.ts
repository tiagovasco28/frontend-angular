import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


   userForm: FormGroup;
  submitted = false;

   constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      imageUrl: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      birthDate: ['', Validators.required]
    });
  }

   onSubmit() {
    // this.submitted = true;
    // if (this.userForm.invalid) return;

    // const user: UserModel = this.userForm.value;

    // this.http.post(this.apiUrl, user).subscribe({
    //   next: () => alert('Usuario registrado correctamente'),
    //   error: (err) => alert('Error al registrar: ' + err.message)
    // });
  }

}
