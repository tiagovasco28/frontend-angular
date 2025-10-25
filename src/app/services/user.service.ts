import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http:HttpClient) { 
  }

  
  getUserByEmail(email:string) : Observable<IUser> {

      let token = localStorage.getItem('token');
       const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

     const params = new HttpParams().set('email', email);

     console.log('Token en UserService:', token);
     console.log('headers en UserService:', headers.get('Authorization'));

    return this.http.get<IUser>(this.apiUrl, { headers, params });
  }
}
