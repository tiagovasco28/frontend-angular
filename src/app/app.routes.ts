import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';;
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';

export const routes: Routes = 
[
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    {path: 'logout', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    { path: 'recover-password', component: RecoverPasswordComponent },
    { path: '**', redirectTo: '/login' }
];
