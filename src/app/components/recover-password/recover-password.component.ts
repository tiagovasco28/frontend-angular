import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-recover-password',
  imports: [ FormsModule, ReactiveFormsModule, CommonModule, NavbarComponent],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss'
})
export class RecoverPasswordComponent {

  recoveryForm: FormGroup;
  submitted = false;
  message = '';

  constructor(private fb: FormBuilder) {
    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.recoveryForm.invalid) return;
    this.message = 'If this email is registered, a recovery link has been sent.';
  }

}
