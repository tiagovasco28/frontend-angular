import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/IUser';
import { NotificationsService } from '../../services/notifications.service';
import { Router } from '@angular/router';


type userData = { exp: number, iat: number, sub: string }

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  user: IUser | undefined;

  constructor(private userService:UserService, private notificationService:NotificationsService, private router:Router)  {
   this.getUserData();
  }

  ngOnInit() {
    console.log('Datos del usuario:', this.user);
  }

    posts = [
    { user: 'Juan Pérez', content: '¡Hola a todos! Esta es mi primera publicación.' },
    { user: 'María Gómez', content: 'Estoy disfrutando el día con amigos.' }
  ];

  suggestedUsers = [
    { name: 'Rogue' },
    { name: 'Wolverine' }
  ];

   getUserData() {
    const email = localStorage.getItem('email');
    console.log('token almacenado:', localStorage.getItem('token'));
    if (!email) {
      console.error('No email found in localStorage');
      return;
    }
   let userData = this.userService.getUserByEmail(email);
   userData.subscribe({
     next: (data) => {
       this.user = data;
     },
     error: (error) => {
       console.error('Error fetching user data:', error);
     }
   });
  }


  logout() {
    this.notificationService.neutro('Desconectado.');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

}
